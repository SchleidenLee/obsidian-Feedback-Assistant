import { ItemView, MarkdownView, WorkspaceLeaf } from 'obsidian';
import TextInsertPlugin from './main';
import { feedbackTemplates, Category, Section } from './templates';

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
    rootEl.style.maxWidth = '300px';
    rootEl.style.minWidth = '300px';
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
      btn.style.fontSize = '15px';
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
      btn.style.fontSize = '12px';
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
        this.drawGroup(rootEl, section.label, group);
      });
    });
  }

  private drawGroup(rootEl: HTMLElement, sectionLabel: string, group: { header: string; items: { label: string; text: string }[] }): void {
    const headerRow = rootEl.createDiv();
    headerRow.style.display = 'flex';
    headerRow.style.alignItems = 'center';
    headerRow.style.padding = '6px 4px 2px';
    headerRow.style.borderBottom = '1px solid var(--background-modifier-border)';
    headerRow.style.marginBottom = '4px';

    const tag = headerRow.createDiv();
    tag.style.background = 'var(--interactive-accent)';
    tag.style.color = 'var(--text-on-accent)';
    tag.style.fontSize = '11px';
    tag.style.fontWeight = '600';
    tag.style.padding = '1px 6px';
    tag.style.borderRadius = '3px';
    tag.style.marginRight = '6px';
    tag.setText(group.header);

    const secTag = headerRow.createDiv();
    secTag.style.color = 'var(--text-muted)';
    secTag.style.fontSize = '10px';
    secTag.setText(sectionLabel);

    const itemsPerRow = 3;
    let row: HTMLElement = null;

    group.items.forEach((item, idx) => {
      if (idx % itemsPerRow === 0) {
        row = rootEl.createDiv({ cls: 'nav-buttons-container' });
      }

      const btn = row.createDiv({ cls: 'nav-action-button' });
      btn.style.textAlign = 'center';
      btn.style.padding = '6px 3px';
      btn.style.fontSize = '13px';
      btn.style.cursor = 'pointer';
      btn.style.borderRadius = '4px';
      btn.style.whiteSpace = 'nowrap';
      btn.style.overflow = 'hidden';
      btn.style.textOverflow = 'ellipsis';
      btn.appendText(item.label);

      btn.onClickEvent(() => {
        this.insertText(item.text);
      });
    });

    rootEl.createDiv().style.height = '6px';
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
