import { classCategory } from './templates-class';
import { studentCategory } from './templates-student';
import { contentCategory } from './templates-content';

export interface TemplateItem {
  label: string;
  text: string;
}

export interface EvalDimension {
  name: string;
  items: TemplateItem[];
}

export interface DisplayGroup {
  header: string;
  typeName?: string;
  dimensions?: EvalDimension[];
  items?: TemplateItem[];
  subgroups?: SubGroup[];
}

export interface SubGroup {
  header: string;
  typeName?: string;
  dimensions?: EvalDimension[];
  items?: TemplateItem[];
}

export interface Section {
  id: string;
  label: string;
  groups: DisplayGroup[];
}

export interface Category {
  id: string;
  label: string;
  sections: Section[];
}

export const feedbackTemplates: Category[] = [
  classCategory,
  studentCategory,
  contentCategory,
];

export function getAllItems(): TemplateItem[] {
  const items: TemplateItem[] = [];
  feedbackTemplates.forEach((cat) => {
    cat.sections.forEach((sec) => {
      sec.groups.forEach((grp) => {
        if (grp.items) {
          grp.items.forEach((item) => items.push(item));
        }
        if (grp.dimensions) {
          grp.dimensions.forEach((dim) => {
            dim.items.forEach((item) => items.push(item));
          });
        }
        if (grp.subgroups) {
          grp.subgroups.forEach((sub) => {
            if (sub.dimensions) {
              sub.dimensions.forEach((dim) => {
                dim.items.forEach((item) => items.push(item));
              });
            }
            if (sub.items) {
              sub.items.forEach((item) => items.push(item));
            }
          });
        }
      });
    });
  });
  return items;
}
