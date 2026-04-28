import { MarkdownView, WorkspaceLeaf } from 'obsidian';

export function checkIfMarkdownSource(leaf: WorkspaceLeaf) {
  return (
    leaf.view instanceof MarkdownView
  );
}
