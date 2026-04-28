import {
  App,
  Editor,
  MarkdownView,
  Plugin,
  PluginSettingTab,
  Setting,
} from 'obsidian';

import { addIcons } from './icons';

import {
  SidePanelControlView,
  SidePanelControlViewType,
} from './SidePanelControlView';
import { CodeSuggestionModal } from './CommandListView';

export interface PluginSettings {
  sidePaneSideLeft: boolean;
}

const DEFAULT_SETTINGS: PluginSettings = {
  sidePaneSideLeft: false,
};

export default class TextInsertPlugin extends Plugin {
  settings: PluginSettings;
  private sidePanelControlView: SidePanelControlView;

  async onload() {
    console.log('loading text-insert-plugin');

    await this.loadSettings();
    addIcons();

    this.registerView(SidePanelControlViewType, (leaf) => {
      this.sidePanelControlView = new SidePanelControlView(leaf, this);
      return this.sidePanelControlView;
    });

    this.addRibbonIcon('viewIcon', 'Open Text Insert Panel', () => {
      this.toggleSidePanelControlView();
    });

    this.addCommand({
      id: 'open-command-selector',
      name: 'Open Command Selector',
      hotkeys: [{ modifiers: ['Alt'], key: 'q' }],
      editorCallback: (editor: Editor, view: MarkdownView) => {
        CodeSuggestionModal.display(this.app, editor);
      },
    });

    this.addSettingTab(new SettingsTab(this.app, this));
  }

  onunload() {}

  async loadSettings() {
    this.settings = Object.assign(DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  private readonly toggleSidePanelControlView = async (): Promise<void> => {
    this.app.workspace.detachLeavesOfType(SidePanelControlViewType);

    if (this.settings.sidePaneSideLeft) {
      await this.app.workspace.getLeftLeaf(false).setViewState({
        type: SidePanelControlViewType,
        active: true,
      });
    } else {
      await this.app.workspace.getRightLeaf(false).setViewState({
        type: SidePanelControlViewType,
        active: true,
      });
    }

    this.app.workspace.revealLeaf(
      this.app.workspace.getLeavesOfType(SidePanelControlViewType)[0],
    );
  };
}

class SettingsTab extends PluginSettingTab {
  plugin: TextInsertPlugin;

  constructor(app: App, plugin: TextInsertPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  async display() {
    let { containerEl } = this;

    containerEl.empty();

    containerEl.createEl('h2', {
      text: 'Text Insert Plugin Settings',
    });

    new Setting(containerEl)
      .setName('Side Pane Side')
      .setDesc('Choose on which side the Side Pane appears.')
      .addText((text) =>
        text
          .setPlaceholder('Enter left or right')
          .setValue(this.plugin.settings.sidePaneSideLeft ? 'left' : 'right')
          .onChange(async (value) => {
            this.plugin.settings.sidePaneSideLeft =
              value === 'left' ? true : false;
            await this.plugin.saveSettings();
          }),
      );
  }
}
