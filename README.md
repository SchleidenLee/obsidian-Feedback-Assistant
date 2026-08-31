# Obsidian Feedback Assistant

一个用于**教学反馈撰写**的 Obsidian 插件。通过侧边栏面板或快捷键命令选择器，一键插入预定义的反馈文本片段，大幅减少重复输入，让老师可以专注于反馈内容本身。

> 本插件基于 [obsidian-markdown-formatting-assistant](https://github.com/Reocin/obsidian-markdown-formatting-assistant-plugin) 改写而来，感谢原作者的工作。

## 功能特性

### 侧边栏面板

通过左侧 Ribbon 图标打开面板，面板按三大类组织反馈模板：

| 分类 | 内容 |
| ---- | ---- |
| **班级** | 出勤、纪律、课堂氛围、课堂表现、作业情况、当堂练习（区分整体 / 个人维度） |
| **学员** | 出勤、入门测（速度 / 质量）、课堂表现（参与度 / 认真程度 / 独立练习）、作业（提交状态 / 做题习惯 / 作业态度）、题型（填空、判断、选择等细分） |
| **教学内容** | 初级教材、初级讲义、中级教材、中级讲义（按单元组织的课程内容条目） |

- 顶部 Tab 切换分类，子 Tab 切换小节
- 分组标题、维度标签（如"整体 / 个人"、"速度 / 质量"）均可点击插入对应文字
- 点击任意条目按钮，将对应的完整反馈语句插入到当前编辑器光标处

### 快捷键命令选择器

默认快捷键 `ALT+Q` 打开模糊搜索弹窗，输入关键字即可在全部模板条目中搜索（匹配名称与内容），回车插入到光标位置，全程无需离开键盘。

可在 Obsidian 的快捷键设置中自定义快捷键。

## 安装

1. 下载最新的 Release 中的 `main.js`、`manifest.json`、`styles.css`
2. 在你的 Vault 中创建文件夹：`.obsidian/plugins/obsidian-feedback-assistant/`
3. 将三个文件放入该文件夹
4. 在 Obsidian 设置 → 第三方插件中启用 **Feedback Assistant**

## 开发

```bash
# 安装依赖
npm install

# 开发模式（监听文件变化）
npm run dev

# 生产构建（输出到 build/ 目录）
npm run build
```

## 项目结构

```
src/
├── main.ts                  # 插件入口：视图注册、快捷键、设置
├── SidePanelControlView.ts  # 侧边栏面板 UI
├── CommandListView.ts       # Alt+Q 模糊搜索弹窗
├── templates.ts             # 模板数据模型与聚合
├── templates-class.ts       # 班级类模板
├── templates-student.ts     # 学员类模板
├── templates-content.ts     # 教学内容类模板
├── generalFunctions.ts      # 通用工具函数
└── icons.ts                 # 自定义图标
```

## 设置

- **Side Pane Side**：侧边栏面板显示在左侧还是右侧（默认右侧）

## License

[MIT](LICENSE)
