import { App, Editor, SuggestModal } from 'obsidian';
import { getAllItems, TemplateItem } from './templates';

export class CodeSuggestionModal extends SuggestModal<TemplateItem> {
  private editor: Editor;

  public setEditor = (editor: Editor) => {
    this.editor = editor;
  };

  getSuggestions(query: string): TemplateItem[] {
    const allItems = getAllItems();
    const filterFunction = (item: TemplateItem) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.text.toLowerCase().includes(query.toLowerCase());
    return allItems.filter(filterFunction);
  }

  renderSuggestion(item: TemplateItem, el: HTMLElement) {
    const row = el.createEl('div');
    row.classList.add('command-list-view-row');

    const labelDiv = row.createDiv();
    labelDiv.classList.add('command-list-view-text');
    labelDiv.style.fontWeight = '600';
    labelDiv.setText(item.label);

    const textDiv = row.createDiv();
    textDiv.style.fontSize = '12px';
    textDiv.style.color = 'var(--text-muted)';
    textDiv.style.paddingTop = '2px';
    textDiv.setText(item.text);
  }

  onChooseSuggestion(item: TemplateItem, evt: MouseEvent | KeyboardEvent) {
    this.editor.replaceSelection(item.text);
  }

  public static display = (app: App, editor: Editor): void => {
    const modal = new CodeSuggestionModal(app);
    modal.setEditor(editor);
    modal.open();
  };
}
