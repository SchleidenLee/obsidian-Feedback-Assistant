const fs = require('fs');

const tsContent = fs.readFileSync('src/templates.ts', 'utf8');
const mdContent = fs.readFileSync('docs/feedback_templates.md', 'utf8');

// Extract items from TS
const itemRegex = /\{ label: "([^"]+)", text: "([^"]+)" \}/g;
let tsItems = [];
let m;
while ((m = itemRegex.exec(tsContent)) !== null) {
  tsItems.push(m[1] + '|' + m[2]);
}

// Extract items from MD
const mdRegex = /^- (.+?) \u2192 (.+)$/gm;
let mdItems = [];
let m2;
while ((m2 = mdRegex.exec(mdContent)) !== null) {
  mdItems.push(m2[1].trim() + '|' + m2[2].trim());
}

console.log('TS items count:', tsItems.length);
console.log('MD items count:', mdItems.length);

const tsOnly = tsItems.filter(x => !mdItems.includes(x));
const mdOnly = mdItems.filter(x => !tsItems.includes(x));

if (tsOnly.length === 0 && mdOnly.length === 0) {
  console.log('PASS: All items match between templates.ts and feedback_templates.md');
} else {
  if (tsOnly.length > 0) {
    console.log('\nItems in TS but not in MD:');
    tsOnly.forEach(x => console.log('  ' + x.replace('|', ' => ')));
  }
  if (mdOnly.length > 0) {
    console.log('\nItems in MD but not in TS:');
    mdOnly.forEach(x => console.log('  ' + x.replace('|', ' => ')));
  }
}
