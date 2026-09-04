const fs = require('fs');

const tsContent = fs.readFileSync('src/templates.ts', 'utf8');
const mdContent = fs.readFileSync('docs/feedback_templates.md', 'utf8');

// Extract text values from TS
const textRegex = /text: "([^"]+)"/g;
let tsTexts = [];
let m;
while ((m = textRegex.exec(tsContent)) !== null) {
  tsTexts.push(m[1]);
}

// Extract text values from MD (after the arrow)
const mdRegex = /\u2192 (.+)$/gm;
let mdTexts = [];
let m2;
while ((m2 = mdRegex.exec(mdContent)) !== null) {
  mdTexts.push(m2[1].trim());
}

console.log('TS text count:', tsTexts.length);
console.log('MD text count:', mdTexts.length);

const tsOnly = tsTexts.filter(x => !mdTexts.includes(x));
const mdOnly = mdTexts.filter(x => !tsTexts.includes(x));

if (tsOnly.length === 0 && mdOnly.length === 0) {
  console.log('PASS: All text values match between templates.ts and feedback_templates.md');
} else {
  if (tsOnly.length > 0) {
    console.log('\nTexts in TS but not in MD:');
    tsOnly.forEach(x => console.log('  ' + x));
  }
  if (mdOnly.length > 0) {
    console.log('\nTexts in MD but not in TS:');
    mdOnly.forEach(x => console.log('  ' + x));
  }
}
