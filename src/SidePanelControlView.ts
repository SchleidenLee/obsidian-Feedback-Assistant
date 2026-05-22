import { ItemView, MarkdownView, WorkspaceLeaf } from 'obsidian';
import TextInsertPlugin from './main';
import { feedbackTemplates, Category, Section, DisplayGroup, EvalDimension, SubGroup } from './templates';

export const SidePanelControlViewType = 'feedback-assistant-view';

type ActiveView = {
  categoryIdx: number;
  sectionIdx: number | null;
};

export class SidePanelControlView extends ItemView {
  private plugin: TextInsertPlugin;
  private active: ActiveView = { categoryIdx: 0, sectionIdx: null };

  constructor(leaf: WorkspaceLeaf, plugin: TextInsertPlugin) {
    super(leaf);
    this.plugin = plugin;
  }

  public getViewType(): string {
    return SidePanelControlViewType;
  }

  public getDisplayText(): string {
    return 'Feedback Assistant';
  }

  public getIcon(): string {
    return 'viewIcon';
  }

  public load(): void {
    super.load();
    this.draw();
  }

  private draw(): void {
    const container = this.containerEl.children[1];
    const rootEl = document.createElement('div');
    rootEl.id = 'SidePaneRootElement';
    rootEl.style.padding = '8px';

    this.drawTopTabs(rootEl);

    container.empty();
    container.appendChild(rootEl);
  }

  private drawTopTabs(rootEl: HTMLElement): void {
    const tabRow = rootEl.createDiv();
    tabRow.style.display = 'flex';
    tabRow.style.gap = '4px';
    tabRow.style.marginBottom = '8px';

    feedbackTemplates.forEach((cat, idx) => {
      const btn = tabRow.createDiv();
      btn.style.flex = '1';
      btn.style.textAlign = 'center';
      btn.style.padding = '8px 0';
      btn.style.fontSize = '17px';
      btn.style.fontWeight = 'bold';
      btn.style.cursor = 'pointer';
      btn.style.borderRadius = '6px';
      btn.setText(cat.label);

      if (this.active.categoryIdx === idx) {
        btn.style.background = 'var(--interactive-accent)';
        btn.style.color = 'var(--text-on-accent)';
      } else {
        btn.style.background = 'var(--background-modifier-cover)';
        btn.style.color = 'var(--text-muted)';
      }

      btn.onClickEvent(() => {
        this.active.categoryIdx = idx;
        this.active.sectionIdx = null;
        this.draw();
      });
    });

    this.drawSubTabs(rootEl);
    this.drawContent(rootEl);
  }

  private drawSubTabs(rootEl: HTMLElement): void {
    const cat = feedbackTemplates[this.active.categoryIdx];
    if (!cat) return;

    const subRow = rootEl.createDiv();
    subRow.style.display = 'flex';
    subRow.style.flexWrap = 'wrap';
    subRow.style.gap = '4px';
    subRow.style.marginBottom = '10px';

    cat.sections.forEach((sec, idx) => {
      const btn = subRow.createDiv();
      btn.style.padding = '4px 10px';
      btn.style.fontSize = '14px';
      btn.style.cursor = 'pointer';
      btn.style.borderRadius = '4px';
      btn.style.border = '1px solid var(--background-modifier-border)';
      btn.setText(sec.label);

      if (this.active.sectionIdx === idx) {
        btn.style.background = 'var(--interactive-accent-hover)';
        btn.style.color = 'var(--text-on-accent)';
        btn.style.fontWeight = '600';
        btn.style.borderColor = 'var(--interactive-accent)';
      } else {
        btn.style.background = 'var(--background-secondary)';
        btn.style.color = 'var(--text-muted)';
      }

      btn.onClickEvent(() => {
        this.active.sectionIdx = this.active.sectionIdx === idx ? null : idx;
        this.draw();
      });
    });
  }

  private drawContent(rootEl: HTMLElement): void {
    const cat = feedbackTemplates[this.active.categoryIdx];
    if (!cat) return;

    const sectionsToShow = this.active.sectionIdx !== null
      ? [cat.sections[this.active.sectionIdx]]
      : cat.sections;

    sectionsToShow.forEach((section) => {
      section.groups.forEach((group) => {
        this.drawGroup(rootEl, group);
      });
    });
  }

  private drawGroup(rootEl: HTMLElement, group: DisplayGroup): void {
    const hasSubgroups = group.subgroups && group.subgroups.length > 0;
    const hasDimensions = group.dimensions && group.dimensions.length > 0;
    const hasItems = group.items && group.items.length > 0;

    // Only show header if there are subgroups or dimensions
    // Pure item-only groups (like teaching content units) skip the header
    if (hasSubgroups || hasDimensions) {
      const headerRow = rootEl.createDiv();
      headerRow.style.display = 'flex';
      headerRow.style.alignItems = 'center';
      headerRow.style.padding = '6px 4px 4px';
      headerRow.style.borderBottom = '1px solid var(--background-modifier-border)';
      headerRow.style.marginBottom = '4px';

      const tag = headerRow.createDiv();
      tag.style.background = 'var(--interactive-accent)';
      tag.style.color = 'var(--text-on-accent)';
      tag.style.fontSize = '16px';
      tag.style.fontWeight = '700';
      tag.style.padding = '3px 10px';
      tag.style.borderRadius = '4px';
      tag.style.cursor = 'pointer';
      tag.setText(group.header);

      tag.onClickEvent(() => {
        if (group.items && group.items.length === 1) {
          this.insertText(group.items[0].text);
        } else {
          const insertText = group.typeName || group.header;
          this.insertText(insertText);
        }
      });
    }

    if (hasSubgroups) {
      group.subgroups.forEach((sub, idx) => {
        if (idx > 0) {
          const sep = rootEl.createDiv();
          sep.style.borderTop = '1px dashed var(--background-modifier-border)';
          sep.style.margin = '6px 0';
        }
        this.drawSubGroup(rootEl, sub);
      });
    }

    if (hasDimensions) {
      let first = true;
      group.dimensions.forEach((dim) => {
        if (!first) {
          const sep = rootEl.createDiv();
          sep.style.borderTop = '1px dashed var(--background-modifier-border)';
          sep.style.margin = '4px 0';
        }
        first = false;
        this.drawDimension(rootEl, dim);
      });
    }

    if (hasItems) {
      group.items.forEach((item) => {
        this.drawItemButton(rootEl, item);
      });
    }

    rootEl.createDiv().style.height = '6px';
  }

  private drawSubGroup(rootEl: HTMLElement, sub: SubGroup): void {
    const subHeader = rootEl.createDiv();
    subHeader.style.display = 'flex';
    subHeader.style.alignItems = 'center';
    subHeader.style.padding = '4px 4px 2px 8px';

    const subTag = subHeader.createDiv();
    subTag.style.background = 'var(--interactive-accent)';
    subTag.style.color = 'var(--text-on-accent)';
    subTag.style.fontSize = '15px';
    subTag.style.fontWeight = '600';
    subTag.style.padding = '3px 10px';
    subTag.style.borderRadius = '4px';
    subTag.style.display = 'inline-block';
    subTag.style.cursor = 'pointer';
    subTag.setText(sub.header);

    subTag.onClickEvent(() => {
      this.insertText(sub.header);
    });

    if (sub.dimensions) {
      sub.dimensions.forEach((dim) => {
        this.drawDimension(rootEl, dim);
      });
    }

    if (sub.items) {
      sub.items.forEach((item) => {
        this.drawItemButton(rootEl, item);
      });
    }
  }

  private drawDimension(rootEl: HTMLElement, dim: EvalDimension): void {
    const dimRow = rootEl.createDiv();
    dimRow.style.display = 'flex';
    dimRow.style.alignItems = 'center';
    dimRow.style.padding = '2px 4px';
    dimRow.style.gap = '6px';

    const dimLabel = dimRow.createDiv();
    dimLabel.style.fontSize = '14px';
    dimLabel.style.fontWeight = '500';
    dimLabel.style.color = 'var(--text-normal)';
    dimLabel.style.minWidth = dim.name ? '70px' : '0';
    dimLabel.style.flexShrink = '0';
    if (dim.name) {
      dimLabel.setText(dim.name + ':');
    }

    const btnContainer = dimRow.createDiv();
    btnContainer.style.display = 'flex';
    btnContainer.style.flexWrap = 'wrap';
    btnContainer.style.gap = '3px';
    btnContainer.style.flex = '1';

    dim.items.forEach((item) => {
      const btn = btnContainer.createDiv({ cls: 'nav-action-button' });
      btn.style.textAlign = 'center';
      btn.style.padding = '4px 8px';
      btn.style.fontSize = '14px';
      btn.style.cursor = 'pointer';
      btn.style.borderRadius = '4px';
      btn.style.whiteSpace = 'nowrap';
      btn.appendText(item.label);

      btn.onClickEvent(() => {
        this.insertText(item.text);
      });
    });
  }

  private drawItemButton(rootEl: HTMLElement, item: { label: string; text: string }): void {
    const containers = Array.from(rootEl.querySelectorAll<HTMLElement>('.nav-buttons-container'));
    let row: HTMLElement | null = containers.length > 0
      ? containers[containers.length - 1]
      : null;
    if (!row || row.querySelectorAll('.nav-action-button').length >= 4) {
      row = rootEl.createDiv({ cls: 'nav-buttons-container' });
      row.style.display = 'flex';
      row.style.flexWrap = 'wrap';
      row.style.gap = '3px';
    }

    const btn = row.createDiv({ cls: 'nav-action-button' });
    btn.style.textAlign = 'center';
    btn.style.padding = '5px 8px';
    btn.style.fontSize = '15px';
    btn.style.cursor = 'pointer';
    btn.style.borderRadius = '4px';
    btn.style.flex = '1 1 auto';
    btn.style.minWidth = '0';
    btn.style.whiteSpace = 'nowrap';
    btn.appendText(item.label);

    btn.onClickEvent(() => {
      this.insertText(item.text);
    });
  }

  private insertText(text: string): void {
    const leaf = this.app.workspace.getMostRecentLeaf();
    if (leaf && leaf.view instanceof MarkdownView) {
      const editor = leaf.view.editor;
      editor.replaceSelection(text);
      editor.focus();
    }
  }
}
