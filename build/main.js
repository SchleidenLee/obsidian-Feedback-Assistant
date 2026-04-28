'use strict';

var obsidian = require('obsidian');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var viewIcon = "\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n    <path d=\"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z\"></path>\n  </svg>";
var icons = {
    viewIcon: viewIcon,
};
var addIcons = function () {
    Object.keys(icons).forEach(function (key) {
        obsidian.addIcon(key, icons[key]);
    });
};

var feedbackTemplates = [
    {
        id: "class",
        label: "班级",
        sections: [
            {
                id: "class-att-atm",
                label: "出勤/氛围",
                groups: [
                    { header: "出勤", items: [
                            { label: "全到", text: "全员出勤" },
                            { label: "个别迟到", text: "个别学员迟到" },
                            { label: "个别请假", text: "一人请假" },
                            { label: "多人请假", text: "多人请假" },
                            { label: "整体良好", text: "全员正常出勤，无迟到早退" },
                        ] },
                    { header: "氛围", items: [
                            { label: "积极性高", text: "学员整体积极性高，主动参与互动" },
                            { label: "积极性一般", text: "整体积极性一般，需要老师带动" },
                            { label: "积极性低", text: "整体积极性偏低，课堂互动较少" },
                            { label: "气氛好", text: "课堂气氛很好，学习氛围浓厚" },
                            { label: "气氛一般", text: "课堂气氛一般，比较平淡" },
                            { label: "气氛活跃", text: "课堂气氛活跃，学员互动积极" },
                            { label: "气氛沉闷", text: "课堂气氛较沉闷，学员反应不积极" },
                            { label: "有进步", text: "课堂氛围有进步，比之前好" },
                            { label: "需改善", text: "学习氛围需要改善，学员配合度不够" },
                        ] },
                ],
            },
            {
                id: "class-perf-hw",
                label: "表现/作业",
                groups: [
                    { header: "整体参与度", items: [
                            { label: "高", text: "整体参与度高，积极回答问题，主动互动" },
                            { label: "一般", text: "整体参与度一般，点名时能回答" },
                            { label: "低", text: "整体参与度偏低，较少主动发言" },
                        ] },
                    { header: "整体认真程度", items: [
                            { label: "好", text: "整体态度认真，能跟上课堂进度" },
                            { label: "一般", text: "整体认真程度一般，部分学员偶尔走神" },
                        ] },
                    { header: "独立练习", items: [
                            { label: "好", text: "整体独立练习效率高，正确率和速度都好" },
                            { label: "有进步", text: "整体独立练习效率有进步，比之前更专注" },
                            { label: "需提升", text: "整体独立练习效率需要提升，精神状态不够饱满" },
                            { label: "限时训练差", text: "整体限时训练正确率极低" },
                            { label: "整体速度慢", text: "整体阅读速度偏慢，需要加强限时训练" },
                        ] },
                    { header: "作业情况", items: [
                            { label: "大部分按时", text: "大部分学员按时提交作业" },
                            { label: "大部分未交", text: "大部分学员作业写了但是没交" },
                            { label: "整体态度好", text: "整体作业态度好，认真按时完成" },
                            { label: "态度需端正", text: "整体学习态度需要端正，作业完成度不够" },
                        ] },
                ],
            },
            {
                id: "class-improve",
                label: "需加强",
                groups: [
                    { header: "训练", items: [
                            { label: "限时训练", text: "整体限时训练正确率低，缺少高压训练" },
                            { label: "高压训练", text: "缺少高压训练，限时环境下表现不佳" },
                        ] },
                    { header: "其他", items: [
                            { label: "加强默写", text: "需要认真对待词汇默写" },
                            { label: "端正态度", text: "端正学习态度，作业要按时完成" },
                            { label: "提升专注", text: "需要在练习时保持专注，提高效率" },
                        ] },
                ],
            },
        ],
    },
    {
        id: "student",
        label: "学员",
        sections: [
            {
                id: "stu-attendance",
                label: "出勤",
                groups: [
                    { header: "出勤状态", items: [
                            { label: "迟到", text: "学员迟到" },
                            { label: "早退", text: "学员早退" },
                            { label: "请假", text: "学员请假" },
                            { label: "正常", text: "正常出勤" },
                        ] },
                ],
            },
            {
                id: "stu-performance",
                label: "课堂表现",
                groups: [
                    { header: "参与度", items: [
                            { label: "高", text: "参与度高，积极回答问题，主动互动" },
                            { label: "中", text: "参与度一般，点名时能回答" },
                            { label: "低", text: "参与度偏低，较少主动发言" },
                            { label: "明显提升", text: "参与度明显提升，值得肯定" },
                            { label: "有进步", text: "参与度有进步，比之前更积极" },
                        ] },
                    { header: "认真程度", items: [
                            { label: "非常认真", text: "非常认真，全程跟随课堂节奏" },
                            { label: "认真", text: "态度认真，能跟上课堂进度" },
                            { label: "一般", text: "认真程度一般，偶尔走神" },
                            { label: "需加强", text: "认真程度不够，需要提醒" },
                        ] },
                    { header: "独立练习", items: [
                            { label: "高", text: "独立练习效率高，正确率和速度都好" },
                            { label: "良好", text: "独立练习效率良好，正确率不错但速度偏慢" },
                            { label: "低", text: "独立练习效率低，存在发呆走神的情况" },
                            { label: "有进步", text: "独立练习效率有进步，比之前更专注" },
                            { label: "需提升", text: "独立练习效率需要提升，精神状态不够饱满" },
                        ] },
                ],
            },
            {
                id: "stu-homework",
                label: "作业",
                groups: [
                    { header: "提交状态", items: [
                            { label: "按时认真", text: "按时提交，认真" },
                            { label: "态度好", text: "按时提交，态度非常好，非常认真" },
                            { label: "先复习", text: "按时提交，态度非常好，先复习再做的作业" },
                            { label: "完成没交", text: "按时完成，但未按时提交" },
                            { label: "没按时交", text: "没按时交" },
                            { label: "写了没交", text: "写了没按时交" },
                            { label: "缺交", text: "作业缺交" },
                            { label: "部分完成", text: "部分完成，未全部完成" },
                        ] },
                    { header: "做题习惯", items: [
                            { label: "有痕迹", text: "有做题痕迹，习惯好" },
                            { label: "缺痕迹", text: "缺少做题痕迹，习惯还是要养成的" },
                            { label: "痕迹清晰", text: "做题痕迹清晰，关键词划分明确" },
                        ] },
                    { header: "作业态度", items: [
                            { label: "端正", text: "学习态度端正，作业认真" },
                            { label: "需端正", text: "学习态度需要端正，作业完成度不够" },
                            { label: "先复习", text: "先复习笔记再写作业，习惯好" },
                        ] },
                ],
            },
            {
                id: "stu-questions",
                label: "题型",
                groups: [
                    { header: "填空通用", items: [
                            { label: "注意词数", text: "注意词数限制" },
                            { label: "词数做得好", text: "严格遵循词数限制" },
                            { label: "违反词数", text: "出现词数限制违反的情况" },
                            { label: "词性预测好", text: "词性预测合理，有意识" },
                            { label: "词性有错误", text: "出现词性错误" },
                        ] },
                    { header: "表格/单句/笔记", items: [
                            { label: "表头定位好", text: "表头定位能力强" },
                            { label: "表头定位弱", text: "表头定位能力弱，容易混淆" },
                            { label: "语法掌握好", text: "简单句语法掌握好" },
                            { label: "语法掌握弱", text: "语法基础薄弱，需要加强" },
                            { label: "笔记好", text: "笔记填空完成好，信息捕捉准确" },
                            { label: "笔记弱", text: "笔记填空完成度不高，信息遗漏多" },
                        ] },
                    { header: "摘要填空", items: [
                            { label: "全对", text: "摘要填空全对，段落理解能力强" },
                            { label: "正确率好", text: "摘要填空正确率好，掌握度好" },
                            { label: "力不从心", text: "对高度改写的摘要填空力不从心，正确率不理想" },
                            { label: "排除法运用", text: "合理运用排除法" },
                            { label: "段落结构好", text: "段落结构识别定位能力强" },
                            { label: "段落结构弱", text: "段落结构识别定位能力弱" },
                        ] },
                    { header: "地图/流程图", items: [
                            { label: "方位词掌握好", text: "方位词掌握好" },
                            { label: "方位词薄弱", text: "方位词薄弱，需要加强" },
                            { label: "流程图好", text: "流程图理解能力强" },
                            { label: "流程图弱", text: "流程图理解有困难" },
                        ] },
                    { header: "判断", items: [
                            { label: "考点清晰", text: "考点识别清晰，能准确判断" },
                            { label: "考点不清", text: "考点识别不清晰" },
                            { label: "有基础", text: "具备一定识别考点的能力" },
                            { label: "No/NG区分好", text: "No和NG区分能力强" },
                            { label: "No/NG混淆", text: "No和NG区分有问题，正确率待提升" },
                            { label: "依据充分", text: "判断依据充分，定位准确" },
                            { label: "依据不足", text: "判断依据不足，定位能力有待提高" },
                            { label: "定位好", text: "定位能力强" },
                            { label: "定位不足", text: "定位能力不足导致错误" },
                            { label: "无痕迹全对", text: "没有做题痕迹但全对了，要注意养成习惯" },
                        ] },
                    { header: "选择", items: [
                            { label: "细节好", text: "细节题做得好，能抓住关键信息" },
                            { label: "主旨好", text: "主旨题做得好，能把握文章中心" },
                            { label: "区分好", text: "能区分细节题和主旨题" },
                            { label: "区分混淆", text: "细节题和主旨题容易混淆" },
                        ] },
                    { header: "人名匹配", items: [
                            { label: "好", text: "人名配信息完成好，细节信息识别准确" },
                            { label: "弱", text: "人名配信息完成度不高" },
                        ] },
                    { header: "段落匹配", items: [
                            { label: "关键词好", text: "关键词划分清晰，正确率好，能识别同义替换" },
                            { label: "关键词待提升", text: "关键词选的不好，不具有限定意义，正确率偏低" },
                            { label: "同义替换弱", text: "识别同义替换的能力能提高" },
                            { label: "细节识别好", text: "细节信息识别准确，题型特点掌握好" },
                            { label: "个别题优化", text: "个别题目关键词划分还有优化空间，总体表现好" },
                            { label: "完成好", text: "段落配信息完成好，正确率良好" },
                        ] },
                    { header: "半句/标题匹配", items: [
                            { label: "半句好", text: "半句匹配完成好，逻辑关系理解准确" },
                            { label: "半句弱", text: "半句匹配完成度不高，逻辑关系理解有困难" },
                            { label: "标题好", text: "段落配标题完成好，概括能力强" },
                            { label: "标题弱", text: "段落配标题完成度不高，概括能力有待提高" },
                        ] },
                ],
            },
            {
                id: "stu-skills",
                label: "技巧",
                groups: [
                    { header: "定位词划分", items: [
                            { label: "特殊词好", text: "特殊词识别利用能力强" },
                            { label: "特殊词弱", text: "特殊词识别利用能力弱" },
                            { label: "选词合理", text: "选词合理，定位准确" },
                            { label: "选词不合理", text: "选词不合理，定位效果不好" },
                        ] },
                    { header: "关键词划分", items: [
                            { label: "好", text: "关键词划分合理清晰" },
                            { label: "模糊", text: "关键词划分模糊，不够精准" },
                            { label: "找参照物好", text: "找参照物能力强" },
                            { label: "找参照物弱", text: "找参照物能力弱" },
                        ] },
                    { header: "扫读", items: [
                            { label: "速度快", text: "扫读速度快，找关键词能力强" },
                            { label: "速度慢", text: "扫读速度慢，需要提升" },
                            { label: "找词强", text: "扫读找关键词能力强" },
                            { label: "找词弱", text: "扫读找关键词能力弱" },
                        ] },
                    { header: "略读/概括", items: [
                            { label: "掌握好", text: "略读方法掌握好，能快速把握主旨" },
                            { label: "待提升", text: "略读方法待提升，阅读效率不够" },
                            { label: "概括强", text: "总结概括能力强" },
                            { label: "概括弱", text: "总结概括能力弱，需要加强" },
                        ] },
                    { header: "同义替换", items: [
                            { label: "简单好", text: "简单替换识别能力强" },
                            { label: "简单弱", text: "简单替换识别能力弱" },
                            { label: "改写好", text: "改写类替换识别能力强" },
                            { label: "改写弱", text: "改写类替换识别能力弱，对高度改写敏感" },
                            { label: "预测强", text: "同义替换预测能力强" },
                            { label: "预测弱", text: "同义替换预测能力弱" },
                        ] },
                    { header: "长难句", items: [
                            { label: "主干好", text: "能识别长难句主干" },
                            { label: "主干弱", text: "不太理解主干概念" },
                            { label: "理解强", text: "长难句理解能力强" },
                            { label: "理解吃力", text: "长难句理解吃力，阅读有困难" },
                            { label: "有进步", text: "长难句理解有进步" },
                        ] },
                ],
            },
            {
                id: "stu-mastery",
                label: "掌握",
                groups: [
                    { header: "语法", items: [
                            { label: "过硬", text: "语法非常过硬" },
                            { label: "简单句好", text: "简单句的语法掌握得很好" },
                            { label: "基础薄弱", text: "语法基础薄弱，需要加强" },
                        ] },
                    { header: "独立练习", items: [
                            { label: "出色", text: "独立练习完成出色，时间和正确率都很棒" },
                            { label: "有进步", text: "独立练习有很大进步，正确率保持高水平" },
                            { label: "良好", text: "独立练习正确率良好，但速度不够快" },
                        ] },
                    { header: "翻译", items: [
                            { label: "吃力", text: "翻译起来吃力" },
                            { label: "慢", text: "单句翻译需要时间思考，考场上时间不够用" },
                            { label: "有进步", text: "翻译能力有进步" },
                            { label: "点名好", text: "点名的翻译做得很好" },
                        ] },
                    { header: "词汇语感", items: [
                            { label: "语感好", text: "猜词做得很好，有点语感" },
                            { label: "基础弱", text: "词汇基础不够扎实" },
                            { label: "有进步", text: "词汇掌握有进步" },
                        ] },
                    { header: "入门测", items: [
                            { label: "定位没问题", text: "填空题定位能力没有问题" },
                            { label: "词汇良好", text: "词汇掌握良好" },
                            { label: "正确率高", text: "表现良好，正确率高" },
                            { label: "一般", text: "入门测表现一般" },
                            { label: "待提升", text: "入门测表现需要提升" },
                        ] },
                ],
            },
            {
                id: "stu-improve",
                label: "需加强",
                groups: [
                    { header: "词汇", items: [
                            { label: "加强背诵", text: "词汇基础不够扎实，建议加强基础词汇背诵巩固" },
                            { label: "加强默写", text: "需要认真对待词汇默写" },
                        ] },
                    { header: "训练", items: [
                            { label: "限时训练", text: "限时训练正确率低，缺少高压训练" },
                            { label: "阅读速度", text: "阅读速度偏慢，需要加强限时训练" },
                        ] },
                    { header: "习惯", items: [
                            { label: "做题痕迹", text: "养成做题痕迹的习惯" },
                            { label: "端正态度", text: "端正学习态度，作业要按时完成" },
                        ] },
                    { header: "技巧", items: [
                            { label: "定位能力", text: "定位能力需要加强" },
                            { label: "同义替换", text: "同义替换识别能力需要加强" },
                            { label: "长难句", text: "长难句理解能力需要加强" },
                            { label: "检查步骤", text: "需要有检查步骤，避免粗心错误" },
                        ] },
                    { header: "专注", items: [
                            { label: "保持专注", text: "需要在练习时保持专注，提高效率" },
                        ] },
                ],
            },
        ],
    },
];
function getAllItems() {
    var items = [];
    feedbackTemplates.forEach(function (cat) {
        cat.sections.forEach(function (sec) {
            sec.groups.forEach(function (grp) {
                grp.items.forEach(function (item) {
                    items.push(item);
                });
            });
        });
    });
    return items;
}

var SidePanelControlViewType = 'feedback-assistant-view';
var SidePanelControlView = /** @class */ (function (_super) {
    __extends(SidePanelControlView, _super);
    function SidePanelControlView(leaf, plugin) {
        var _this = _super.call(this, leaf) || this;
        _this.active = { categoryIdx: 0, sectionIdx: null };
        _this.plugin = plugin;
        return _this;
    }
    SidePanelControlView.prototype.getViewType = function () {
        return SidePanelControlViewType;
    };
    SidePanelControlView.prototype.getDisplayText = function () {
        return 'Feedback Assistant';
    };
    SidePanelControlView.prototype.getIcon = function () {
        return 'viewIcon';
    };
    SidePanelControlView.prototype.load = function () {
        _super.prototype.load.call(this);
        this.draw();
    };
    SidePanelControlView.prototype.draw = function () {
        var container = this.containerEl.children[1];
        var rootEl = document.createElement('div');
        rootEl.id = 'SidePaneRootElement';
        rootEl.style.maxWidth = '300px';
        rootEl.style.minWidth = '300px';
        rootEl.style.padding = '8px';
        this.drawTopTabs(rootEl);
        container.empty();
        container.appendChild(rootEl);
    };
    SidePanelControlView.prototype.drawTopTabs = function (rootEl) {
        var _this = this;
        var tabRow = rootEl.createDiv();
        tabRow.style.display = 'flex';
        tabRow.style.gap = '4px';
        tabRow.style.marginBottom = '8px';
        feedbackTemplates.forEach(function (cat, idx) {
            var btn = tabRow.createDiv();
            btn.style.flex = '1';
            btn.style.textAlign = 'center';
            btn.style.padding = '8px 0';
            btn.style.fontSize = '15px';
            btn.style.fontWeight = 'bold';
            btn.style.cursor = 'pointer';
            btn.style.borderRadius = '6px';
            btn.setText(cat.label);
            if (_this.active.categoryIdx === idx) {
                btn.style.background = 'var(--interactive-accent)';
                btn.style.color = 'var(--text-on-accent)';
            }
            else {
                btn.style.background = 'var(--background-modifier-cover)';
                btn.style.color = 'var(--text-muted)';
            }
            btn.onClickEvent(function () {
                _this.active.categoryIdx = idx;
                _this.active.sectionIdx = null;
                _this.draw();
            });
        });
        this.drawSubTabs(rootEl);
        this.drawContent(rootEl);
    };
    SidePanelControlView.prototype.drawSubTabs = function (rootEl) {
        var _this = this;
        var cat = feedbackTemplates[this.active.categoryIdx];
        if (!cat)
            return;
        var subRow = rootEl.createDiv();
        subRow.style.display = 'flex';
        subRow.style.flexWrap = 'wrap';
        subRow.style.gap = '4px';
        subRow.style.marginBottom = '10px';
        cat.sections.forEach(function (sec, idx) {
            var btn = subRow.createDiv();
            btn.style.padding = '4px 10px';
            btn.style.fontSize = '12px';
            btn.style.cursor = 'pointer';
            btn.style.borderRadius = '4px';
            btn.style.border = '1px solid var(--background-modifier-border)';
            btn.setText(sec.label);
            if (_this.active.sectionIdx === idx) {
                btn.style.background = 'var(--interactive-accent-hover)';
                btn.style.color = 'var(--text-on-accent)';
                btn.style.fontWeight = '600';
                btn.style.borderColor = 'var(--interactive-accent)';
            }
            else {
                btn.style.background = 'var(--background-secondary)';
                btn.style.color = 'var(--text-muted)';
            }
            btn.onClickEvent(function () {
                _this.active.sectionIdx = _this.active.sectionIdx === idx ? null : idx;
                _this.draw();
            });
        });
    };
    SidePanelControlView.prototype.drawContent = function (rootEl) {
        var _this = this;
        var cat = feedbackTemplates[this.active.categoryIdx];
        if (!cat)
            return;
        var sectionsToShow = this.active.sectionIdx !== null
            ? [cat.sections[this.active.sectionIdx]]
            : cat.sections;
        sectionsToShow.forEach(function (section) {
            section.groups.forEach(function (group) {
                _this.drawGroup(rootEl, section.label, group);
            });
        });
    };
    SidePanelControlView.prototype.drawGroup = function (rootEl, sectionLabel, group) {
        var _this = this;
        var headerRow = rootEl.createDiv();
        headerRow.style.display = 'flex';
        headerRow.style.alignItems = 'center';
        headerRow.style.padding = '6px 4px 2px';
        headerRow.style.borderBottom = '1px solid var(--background-modifier-border)';
        headerRow.style.marginBottom = '4px';
        var tag = headerRow.createDiv();
        tag.style.background = 'var(--interactive-accent)';
        tag.style.color = 'var(--text-on-accent)';
        tag.style.fontSize = '11px';
        tag.style.fontWeight = '600';
        tag.style.padding = '1px 6px';
        tag.style.borderRadius = '3px';
        tag.style.marginRight = '6px';
        tag.setText(group.header);
        var secTag = headerRow.createDiv();
        secTag.style.color = 'var(--text-muted)';
        secTag.style.fontSize = '10px';
        secTag.setText(sectionLabel);
        var itemsPerRow = 3;
        var row = null;
        group.items.forEach(function (item, idx) {
            if (idx % itemsPerRow === 0) {
                row = rootEl.createDiv({ cls: 'nav-buttons-container' });
            }
            var btn = row.createDiv({ cls: 'nav-action-button' });
            btn.style.textAlign = 'center';
            btn.style.padding = '6px 3px';
            btn.style.fontSize = '13px';
            btn.style.cursor = 'pointer';
            btn.style.borderRadius = '4px';
            btn.style.whiteSpace = 'nowrap';
            btn.style.overflow = 'hidden';
            btn.style.textOverflow = 'ellipsis';
            btn.appendText(item.label);
            btn.onClickEvent(function () {
                _this.insertText(item.text);
            });
        });
        rootEl.createDiv().style.height = '6px';
    };
    SidePanelControlView.prototype.insertText = function (text) {
        var leaf = this.app.workspace.getMostRecentLeaf();
        if (leaf && leaf.view instanceof obsidian.MarkdownView) {
            var editor = leaf.view.editor;
            editor.replaceSelection(text);
            editor.focus();
        }
    };
    return SidePanelControlView;
}(obsidian.ItemView));

var CodeSuggestionModal = /** @class */ (function (_super) {
    __extends(CodeSuggestionModal, _super);
    function CodeSuggestionModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setEditor = function (editor) {
            _this.editor = editor;
        };
        return _this;
    }
    CodeSuggestionModal.prototype.getSuggestions = function (query) {
        var allItems = getAllItems();
        var filterFunction = function (item) {
            return item.label.toLowerCase().includes(query.toLowerCase()) ||
                item.text.toLowerCase().includes(query.toLowerCase());
        };
        return allItems.filter(filterFunction);
    };
    CodeSuggestionModal.prototype.renderSuggestion = function (item, el) {
        var row = el.createEl('div');
        row.classList.add('command-list-view-row');
        var labelDiv = row.createDiv();
        labelDiv.classList.add('command-list-view-text');
        labelDiv.style.fontWeight = '600';
        labelDiv.setText(item.label);
        var textDiv = row.createDiv();
        textDiv.style.fontSize = '12px';
        textDiv.style.color = 'var(--text-muted)';
        textDiv.style.paddingTop = '2px';
        textDiv.setText(item.text);
    };
    CodeSuggestionModal.prototype.onChooseSuggestion = function (item, evt) {
        this.editor.replaceSelection(item.text);
    };
    CodeSuggestionModal.display = function (app, editor) {
        var modal = new CodeSuggestionModal(app);
        modal.setEditor(editor);
        modal.open();
    };
    return CodeSuggestionModal;
}(obsidian.SuggestModal));

var DEFAULT_SETTINGS = {
    sidePaneSideLeft: false,
};
var TextInsertPlugin = /** @class */ (function (_super) {
    __extends(TextInsertPlugin, _super);
    function TextInsertPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggleSidePanelControlView = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.app.workspace.detachLeavesOfType(SidePanelControlViewType);
                        if (!this.settings.sidePaneSideLeft) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.app.workspace.getLeftLeaf(false).setViewState({
                                type: SidePanelControlViewType,
                                active: true,
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.app.workspace.getRightLeaf(false).setViewState({
                            type: SidePanelControlViewType,
                            active: true,
                        })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        this.app.workspace.revealLeaf(this.app.workspace.getLeavesOfType(SidePanelControlViewType)[0]);
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    TextInsertPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('loading text-insert-plugin');
                        return [4 /*yield*/, this.loadSettings()];
                    case 1:
                        _a.sent();
                        addIcons();
                        this.registerView(SidePanelControlViewType, function (leaf) {
                            _this.sidePanelControlView = new SidePanelControlView(leaf, _this);
                            return _this.sidePanelControlView;
                        });
                        this.addRibbonIcon('viewIcon', 'Open Text Insert Panel', function () {
                            _this.toggleSidePanelControlView();
                        });
                        this.addCommand({
                            id: 'open-command-selector',
                            name: 'Open Command Selector',
                            hotkeys: [{ modifiers: ['Alt'], key: 'q' }],
                            editorCallback: function (editor, view) {
                                CodeSuggestionModal.display(_this.app, editor);
                            },
                        });
                        this.addSettingTab(new SettingsTab(this.app, this));
                        return [2 /*return*/];
                }
            });
        });
    };
    TextInsertPlugin.prototype.onunload = function () { };
    TextInsertPlugin.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        _c = (_b = Object).assign;
                        _d = [DEFAULT_SETTINGS];
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = _c.apply(_b, _d.concat([_e.sent()]));
                        return [2 /*return*/];
                }
            });
        });
    };
    TextInsertPlugin.prototype.saveSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return TextInsertPlugin;
}(obsidian.Plugin));
var SettingsTab = /** @class */ (function (_super) {
    __extends(SettingsTab, _super);
    function SettingsTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    SettingsTab.prototype.display = function () {
        return __awaiter(this, void 0, void 0, function () {
            var containerEl;
            var _this = this;
            return __generator(this, function (_a) {
                containerEl = this.containerEl;
                containerEl.empty();
                containerEl.createEl('h2', {
                    text: 'Text Insert Plugin Settings',
                });
                new obsidian.Setting(containerEl)
                    .setName('Side Pane Side')
                    .setDesc('Choose on which side the Side Pane appears.')
                    .addText(function (text) {
                    return text
                        .setPlaceholder('Enter left or right')
                        .setValue(_this.plugin.settings.sidePaneSideLeft ? 'left' : 'right')
                        .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.plugin.settings.sidePaneSideLeft =
                                        value === 'left' ? true : false;
                                    return [4 /*yield*/, this.plugin.saveSettings()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                });
                return [2 /*return*/];
            });
        });
    };
    return SettingsTab;
}(obsidian.PluginSettingTab));

module.exports = TextInsertPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uL3NyYy9pY29ucy50cyIsIi4uL3NyYy90ZW1wbGF0ZXMudHMiLCIuLi9zcmMvU2lkZVBhbmVsQ29udHJvbFZpZXcudHMiLCIuLi9zcmMvQ29tbWFuZExpc3RWaWV3LnRzIiwiLi4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XHJcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xyXG4gICAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xyXG4gICAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XHJcbiAgICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xyXG59XHJcbiIsImltcG9ydCB7IGFkZEljb24gfSBmcm9tICdvYnNpZGlhbic7XG5cbmNvbnN0IHZpZXdJY29uID0gYFxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+XG4gICAgPHBhdGggZD1cIk0xNyAzYTIuODI4IDIuODI4IDAgMSAxIDQgNEw3LjUgMjAuNSAyIDIybDEuNS01LjVMMTcgM3pcIj48L3BhdGg+XG4gIDwvc3ZnPmA7XG5cbmV4cG9ydCBjb25zdCBpY29uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgdmlld0ljb24sXG59O1xuXG5leHBvcnQgY29uc3QgYWRkSWNvbnMgPSAoKTogdm9pZCA9PiB7XG4gIE9iamVjdC5rZXlzKGljb25zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBhZGRJY29uKGtleSwgaWNvbnNba2V5XSk7XG4gIH0pO1xufTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgVGVtcGxhdGVJdGVtIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpc3BsYXlHcm91cCB7XG4gIGhlYWRlcjogc3RyaW5nO1xuICBpdGVtczogVGVtcGxhdGVJdGVtW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdGlvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGdyb3VwczogRGlzcGxheUdyb3VwW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2F0ZWdvcnkge1xuICBpZDogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBzZWN0aW9uczogU2VjdGlvbltdO1xufVxuXG5leHBvcnQgY29uc3QgZmVlZGJhY2tUZW1wbGF0ZXM6IENhdGVnb3J5W10gPSBbXG4gIHtcbiAgICBpZDogXCJjbGFzc1wiLFxuICAgIGxhYmVsOiBcIuePree6p1wiLFxuICAgIHNlY3Rpb25zOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiBcImNsYXNzLWF0dC1hdG1cIixcbiAgICAgICAgbGFiZWw6IFwi5Ye65YukL+awm+WbtFwiLFxuICAgICAgICBncm91cHM6IFtcbiAgICAgICAgICB7IGhlYWRlcjogXCLlh7rli6RcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5YWo5YiwXCIsIHRleHQ6IFwi5YWo5ZGY5Ye65YukXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5Liq5Yir6L+f5YiwXCIsIHRleHQ6IFwi5Liq5Yir5a2m5ZGY6L+f5YiwXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5Liq5Yir6K+35YGHXCIsIHRleHQ6IFwi5LiA5Lq66K+35YGHXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5aSa5Lq66K+35YGHXCIsIHRleHQ6IFwi5aSa5Lq66K+35YGHXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5pW05L2T6Imv5aW9XCIsIHRleHQ6IFwi5YWo5ZGY5q2j5bi45Ye65Yuk77yM5peg6L+f5Yiw5pep6YCAXCIgfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLmsJvlm7RcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi56ev5p6B5oCn6auYXCIsIHRleHQ6IFwi5a2m5ZGY5pW05L2T56ev5p6B5oCn6auY77yM5Li75Yqo5Y+C5LiO5LqS5YqoXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi56ev5p6B5oCn5LiA6IisXCIsIHRleHQ6IFwi5pW05L2T56ev5p6B5oCn5LiA6Iis77yM6ZyA6KaB6ICB5biI5bim5YqoXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi56ev5p6B5oCn5L2OXCIsIHRleHQ6IFwi5pW05L2T56ev5p6B5oCn5YGP5L2O77yM6K++5aCC5LqS5Yqo6L6D5bCRXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5rCU5rCb5aW9XCIsIHRleHQ6IFwi6K++5aCC5rCU5rCb5b6I5aW977yM5a2m5Lmg5rCb5Zu05rWT5Y6aXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5rCU5rCb5LiA6IisXCIsIHRleHQ6IFwi6K++5aCC5rCU5rCb5LiA6Iis77yM5q+U6L6D5bmz5rehXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5rCU5rCb5rS76LeDXCIsIHRleHQ6IFwi6K++5aCC5rCU5rCb5rS76LeD77yM5a2m5ZGY5LqS5Yqo56ev5p6BXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5rCU5rCb5rKJ6Ze3XCIsIHRleHQ6IFwi6K++5aCC5rCU5rCb6L6D5rKJ6Ze377yM5a2m5ZGY5Y+N5bqU5LiN56ev5p6BXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5pyJ6L+b5q2lXCIsIHRleHQ6IFwi6K++5aCC5rCb5Zu05pyJ6L+b5q2l77yM5q+U5LmL5YmN5aW9XCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi6ZyA5pS55ZaEXCIsIHRleHQ6IFwi5a2m5Lmg5rCb5Zu06ZyA6KaB5pS55ZaE77yM5a2m5ZGY6YWN5ZCI5bqm5LiN5aSfXCIgfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcImNsYXNzLXBlcmYtaHdcIixcbiAgICAgICAgbGFiZWw6IFwi6KGo546wL+S9nOS4mlwiLFxuICAgICAgICBncm91cHM6IFtcbiAgICAgICAgICB7IGhlYWRlcjogXCLmlbTkvZPlj4LkuI7luqZcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi6auYXCIsIHRleHQ6IFwi5pW05L2T5Y+C5LiO5bqm6auY77yM56ev5p6B5Zue562U6Zeu6aKY77yM5Li75Yqo5LqS5YqoXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5LiA6IisXCIsIHRleHQ6IFwi5pW05L2T5Y+C5LiO5bqm5LiA6Iis77yM54K55ZCN5pe26IO95Zue562UXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5L2OXCIsIHRleHQ6IFwi5pW05L2T5Y+C5LiO5bqm5YGP5L2O77yM6L6D5bCR5Li75Yqo5Y+R6KiAXCIgfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLmlbTkvZPorqTnnJ/nqIvluqZcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5aW9XCIsIHRleHQ6IFwi5pW05L2T5oCB5bqm6K6k55yf77yM6IO96Lef5LiK6K++5aCC6L+b5bqmXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5LiA6IisXCIsIHRleHQ6IFwi5pW05L2T6K6k55yf56iL5bqm5LiA6Iis77yM6YOo5YiG5a2m5ZGY5YG25bCU6LWw56WeXCIgfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLni6znq4vnu4PkuaBcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5aW9XCIsIHRleHQ6IFwi5pW05L2T54us56uL57uD5Lmg5pWI546H6auY77yM5q2j56Gu546H5ZKM6YCf5bqm6YO95aW9XCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5pyJ6L+b5q2lXCIsIHRleHQ6IFwi5pW05L2T54us56uL57uD5Lmg5pWI546H5pyJ6L+b5q2l77yM5q+U5LmL5YmN5pu05LiT5rOoXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi6ZyA5o+Q5Y2HXCIsIHRleHQ6IFwi5pW05L2T54us56uL57uD5Lmg5pWI546H6ZyA6KaB5o+Q5Y2H77yM57K+56We54q25oCB5LiN5aSf6aWx5ruhXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi6ZmQ5pe26K6t57uD5beuXCIsIHRleHQ6IFwi5pW05L2T6ZmQ5pe26K6t57uD5q2j56Gu546H5p6B5L2OXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5pW05L2T6YCf5bqm5oWiXCIsIHRleHQ6IFwi5pW05L2T6ZiF6K+76YCf5bqm5YGP5oWi77yM6ZyA6KaB5Yqg5by66ZmQ5pe26K6t57uDXCIgfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLkvZzkuJrmg4XlhrVcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5aSn6YOo5YiG5oyJ5pe2XCIsIHRleHQ6IFwi5aSn6YOo5YiG5a2m5ZGY5oyJ5pe25o+Q5Lqk5L2c5LiaXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5aSn6YOo5YiG5pyq5LqkXCIsIHRleHQ6IFwi5aSn6YOo5YiG5a2m5ZGY5L2c5Lia5YaZ5LqG5L2G5piv5rKh5LqkXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5pW05L2T5oCB5bqm5aW9XCIsIHRleHQ6IFwi5pW05L2T5L2c5Lia5oCB5bqm5aW977yM6K6k55yf5oyJ5pe25a6M5oiQXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5oCB5bqm6ZyA56uv5q2jXCIsIHRleHQ6IFwi5pW05L2T5a2m5Lmg5oCB5bqm6ZyA6KaB56uv5q2j77yM5L2c5Lia5a6M5oiQ5bqm5LiN5aSfXCIgfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcImNsYXNzLWltcHJvdmVcIixcbiAgICAgICAgbGFiZWw6IFwi6ZyA5Yqg5by6XCIsXG4gICAgICAgIGdyb3VwczogW1xuICAgICAgICAgIHsgaGVhZGVyOiBcIuiuree7g1wiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLpmZDml7borq3nu4NcIiwgdGV4dDogXCLmlbTkvZPpmZDml7borq3nu4PmraPnoa7njofkvY7vvIznvLrlsJHpq5jljovorq3nu4NcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLpq5jljovorq3nu4NcIiwgdGV4dDogXCLnvLrlsJHpq5jljovorq3nu4PvvIzpmZDml7bnjq/looPkuIvooajnjrDkuI3kvbNcIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICAgIHsgaGVhZGVyOiBcIuWFtuS7llwiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLliqDlvLrpu5jlhplcIiwgdGV4dDogXCLpnIDopoHorqTnnJ/lr7nlvoXor43msYfpu5jlhplcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLnq6/mraPmgIHluqZcIiwgdGV4dDogXCLnq6/mraPlrabkuaDmgIHluqbvvIzkvZzkuJropoHmjInml7blrozmiJBcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLmj5DljYfkuJPms6hcIiwgdGV4dDogXCLpnIDopoHlnKjnu4PkuaDml7bkv53mjIHkuJPms6jvvIzmj5Dpq5jmlYjnjodcIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwic3R1ZGVudFwiLFxuICAgIGxhYmVsOiBcIuWtpuWRmFwiLFxuICAgIHNlY3Rpb25zOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiBcInN0dS1hdHRlbmRhbmNlXCIsXG4gICAgICAgIGxhYmVsOiBcIuWHuuWLpFwiLFxuICAgICAgICBncm91cHM6IFtcbiAgICAgICAgICB7IGhlYWRlcjogXCLlh7rli6TnirbmgIFcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi6L+f5YiwXCIsIHRleHQ6IFwi5a2m5ZGY6L+f5YiwXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5pep6YCAXCIsIHRleHQ6IFwi5a2m5ZGY5pep6YCAXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi6K+35YGHXCIsIHRleHQ6IFwi5a2m5ZGY6K+35YGHXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5q2j5bi4XCIsIHRleHQ6IFwi5q2j5bi45Ye65YukXCIgfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcInN0dS1wZXJmb3JtYW5jZVwiLFxuICAgICAgICBsYWJlbDogXCLor77loILooajnjrBcIixcbiAgICAgICAgZ3JvdXBzOiBbXG4gICAgICAgICAgeyBoZWFkZXI6IFwi5Y+C5LiO5bqmXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIumrmFwiLCB0ZXh0OiBcIuWPguS4juW6pumrmO+8jOenr+aegeWbnuetlOmXrumimO+8jOS4u+WKqOS6kuWKqFwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuS4rVwiLCB0ZXh0OiBcIuWPguS4juW6puS4gOiIrO+8jOeCueWQjeaXtuiDveWbnuetlFwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuS9jlwiLCB0ZXh0OiBcIuWPguS4juW6puWBj+S9ju+8jOi+g+WwkeS4u+WKqOWPkeiogFwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuaYjuaYvuaPkOWNh1wiLCB0ZXh0OiBcIuWPguS4juW6puaYjuaYvuaPkOWNh++8jOWAvOW+l+iCr+WumlwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuaciei/m+atpVwiLCB0ZXh0OiBcIuWPguS4juW6puaciei/m+atpe+8jOavlOS5i+WJjeabtOenr+aegVwiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi6K6k55yf56iL5bqmXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIumdnuW4uOiupOecn1wiLCB0ZXh0OiBcIumdnuW4uOiupOecn++8jOWFqOeoi+i3n+maj+ivvuWgguiKguWlj1wiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuiupOecn1wiLCB0ZXh0OiBcIuaAgeW6puiupOecn++8jOiDvei3n+S4iuivvuWggui/m+W6plwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuS4gOiIrFwiLCB0ZXh0OiBcIuiupOecn+eoi+W6puS4gOiIrO+8jOWBtuWwlOi1sOelnlwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIumcgOWKoOW8ulwiLCB0ZXh0OiBcIuiupOecn+eoi+W6puS4jeWkn++8jOmcgOimgeaPkOmGklwiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi54us56uL57uD5LmgXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIumrmFwiLCB0ZXh0OiBcIueLrOeri+e7g+S5oOaViOeOh+mrmO+8jOato+ehrueOh+WSjOmAn+W6pumDveWlvVwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuiJr+WlvVwiLCB0ZXh0OiBcIueLrOeri+e7g+S5oOaViOeOh+iJr+Wlve+8jOato+ehrueOh+S4jemUmeS9humAn+W6puWBj+aFolwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuS9jlwiLCB0ZXh0OiBcIueLrOeri+e7g+S5oOaViOeOh+S9ju+8jOWtmOWcqOWPkeWRhui1sOelnueahOaDheWGtVwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuaciei/m+atpVwiLCB0ZXh0OiBcIueLrOeri+e7g+S5oOaViOeOh+aciei/m+atpe+8jOavlOS5i+WJjeabtOS4k+azqFwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIumcgOaPkOWNh1wiLCB0ZXh0OiBcIueLrOeri+e7g+S5oOaViOeOh+mcgOimgeaPkOWNh++8jOeyvuelnueKtuaAgeS4jeWkn+mlsea7oVwiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCJzdHUtaG9tZXdvcmtcIixcbiAgICAgICAgbGFiZWw6IFwi5L2c5LiaXCIsXG4gICAgICAgIGdyb3VwczogW1xuICAgICAgICAgIHsgaGVhZGVyOiBcIuaPkOS6pOeKtuaAgVwiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLmjInml7borqTnnJ9cIiwgdGV4dDogXCLmjInml7bmj5DkuqTvvIzorqTnnJ9cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLmgIHluqblpb1cIiwgdGV4dDogXCLmjInml7bmj5DkuqTvvIzmgIHluqbpnZ7luLjlpb3vvIzpnZ7luLjorqTnnJ9cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLlhYjlpI3kuaBcIiwgdGV4dDogXCLmjInml7bmj5DkuqTvvIzmgIHluqbpnZ7luLjlpb3vvIzlhYjlpI3kuaDlho3lgZrnmoTkvZzkuJpcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLlrozmiJDmsqHkuqRcIiwgdGV4dDogXCLmjInml7blrozmiJDvvIzkvYbmnKrmjInml7bmj5DkuqRcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLmsqHmjInml7bkuqRcIiwgdGV4dDogXCLmsqHmjInml7bkuqRcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLlhpnkuobmsqHkuqRcIiwgdGV4dDogXCLlhpnkuobmsqHmjInml7bkuqRcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLnvLrkuqRcIiwgdGV4dDogXCLkvZzkuJrnvLrkuqRcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLpg6jliIblrozmiJBcIiwgdGV4dDogXCLpg6jliIblrozmiJDvvIzmnKrlhajpg6jlrozmiJBcIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICAgIHsgaGVhZGVyOiBcIuWBmumimOS5oOaDr1wiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLmnInnl5Xov7lcIiwgdGV4dDogXCLmnInlgZrpopjnl5Xov7nvvIzkuaDmg6/lpb1cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLnvLrnl5Xov7lcIiwgdGV4dDogXCLnvLrlsJHlgZrpopjnl5Xov7nvvIzkuaDmg6/ov5jmmK/opoHlhbvmiJDnmoRcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLnl5Xov7nmuIXmmbBcIiwgdGV4dDogXCLlgZrpopjnl5Xov7nmuIXmmbDvvIzlhbPplK7or43liJLliIbmmI7noa5cIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICAgIHsgaGVhZGVyOiBcIuS9nOS4muaAgeW6plwiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLnq6/mraNcIiwgdGV4dDogXCLlrabkuaDmgIHluqbnq6/mraPvvIzkvZzkuJrorqTnnJ9cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLpnIDnq6/mraNcIiwgdGV4dDogXCLlrabkuaDmgIHluqbpnIDopoHnq6/mraPvvIzkvZzkuJrlrozmiJDluqbkuI3lpJ9cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLlhYjlpI3kuaBcIiwgdGV4dDogXCLlhYjlpI3kuaDnrJTorrDlho3lhpnkvZzkuJrvvIzkuaDmg6/lpb1cIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwic3R1LXF1ZXN0aW9uc1wiLFxuICAgICAgICBsYWJlbDogXCLpopjlnotcIixcbiAgICAgICAgZ3JvdXBzOiBbXG4gICAgICAgICAgeyBoZWFkZXI6IFwi5aGr56m66YCa55SoXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuazqOaEj+ivjeaVsFwiLCB0ZXh0OiBcIuazqOaEj+ivjeaVsOmZkOWItlwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuivjeaVsOWBmuW+l+WlvVwiLCB0ZXh0OiBcIuS4peagvOmBteW+quivjeaVsOmZkOWItlwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIui/neWPjeivjeaVsFwiLCB0ZXh0OiBcIuWHuueOsOivjeaVsOmZkOWItui/neWPjeeahOaDheWGtVwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuivjeaAp+mihOa1i+WlvVwiLCB0ZXh0OiBcIuivjeaAp+mihOa1i+WQiOeQhu+8jOacieaEj+ivhlwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuivjeaAp+aciemUmeivr1wiLCB0ZXh0OiBcIuWHuueOsOivjeaAp+mUmeivr1wiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi6KGo5qC8L+WNleWPpS/nrJTorrBcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi6KGo5aS05a6a5L2N5aW9XCIsIHRleHQ6IFwi6KGo5aS05a6a5L2N6IO95Yqb5by6XCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi6KGo5aS05a6a5L2N5byxXCIsIHRleHQ6IFwi6KGo5aS05a6a5L2N6IO95Yqb5byx77yM5a655piT5re35reGXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi6K+t5rOV5o6M5o+h5aW9XCIsIHRleHQ6IFwi566A5Y2V5Y+l6K+t5rOV5o6M5o+h5aW9XCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi6K+t5rOV5o6M5o+h5byxXCIsIHRleHQ6IFwi6K+t5rOV5Z+656GA6JaE5byx77yM6ZyA6KaB5Yqg5by6XCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi56yU6K6w5aW9XCIsIHRleHQ6IFwi56yU6K6w5aGr56m65a6M5oiQ5aW977yM5L+h5oGv5o2V5o2J5YeG56GuXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi56yU6K6w5byxXCIsIHRleHQ6IFwi56yU6K6w5aGr56m65a6M5oiQ5bqm5LiN6auY77yM5L+h5oGv6YGX5ryP5aSaXCIgfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLmkZjopoHloavnqbpcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5YWo5a+5XCIsIHRleHQ6IFwi5pGY6KaB5aGr56m65YWo5a+577yM5q616JC955CG6Kej6IO95Yqb5by6XCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5q2j56Gu546H5aW9XCIsIHRleHQ6IFwi5pGY6KaB5aGr56m65q2j56Gu546H5aW977yM5o6M5o+h5bqm5aW9XCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5Yqb5LiN5LuO5b+DXCIsIHRleHQ6IFwi5a+56auY5bqm5pS55YaZ55qE5pGY6KaB5aGr56m65Yqb5LiN5LuO5b+D77yM5q2j56Gu546H5LiN55CG5oOzXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5o6S6Zmk5rOV6L+Q55SoXCIsIHRleHQ6IFwi5ZCI55CG6L+Q55So5o6S6Zmk5rOVXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5q616JC957uT5p6E5aW9XCIsIHRleHQ6IFwi5q616JC957uT5p6E6K+G5Yir5a6a5L2N6IO95Yqb5by6XCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5q616JC957uT5p6E5byxXCIsIHRleHQ6IFwi5q616JC957uT5p6E6K+G5Yir5a6a5L2N6IO95Yqb5byxXCIgfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLlnLDlm74v5rWB56iL5Zu+XCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuaWueS9jeivjeaOjOaPoeWlvVwiLCB0ZXh0OiBcIuaWueS9jeivjeaOjOaPoeWlvVwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuaWueS9jeivjeiWhOW8sVwiLCB0ZXh0OiBcIuaWueS9jeivjeiWhOW8se+8jOmcgOimgeWKoOW8ulwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIua1geeoi+WbvuWlvVwiLCB0ZXh0OiBcIua1geeoi+WbvueQhuino+iDveWKm+W8ulwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIua1geeoi+WbvuW8sVwiLCB0ZXh0OiBcIua1geeoi+WbvueQhuino+acieWbsOmavlwiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi5Yik5patXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuiAg+eCuea4heaZsFwiLCB0ZXh0OiBcIuiAg+eCueivhuWIq+a4heaZsO+8jOiDveWHhuehruWIpOaWrVwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuiAg+eCueS4jea4hVwiLCB0ZXh0OiBcIuiAg+eCueivhuWIq+S4jea4heaZsFwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuacieWfuuehgFwiLCB0ZXh0OiBcIuWFt+Wkh+S4gOWumuivhuWIq+iAg+eCueeahOiDveWKm1wiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIk5vL05H5Yy65YiG5aW9XCIsIHRleHQ6IFwiTm/lkoxOR+WMuuWIhuiDveWKm+W8ulwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIk5vL05H5re35reGXCIsIHRleHQ6IFwiTm/lkoxOR+WMuuWIhuaciemXrumimO+8jOato+ehrueOh+W+heaPkOWNh1wiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuS+neaNruWFheWIhlwiLCB0ZXh0OiBcIuWIpOaWreS+neaNruWFheWIhu+8jOWumuS9jeWHhuehrlwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuS+neaNruS4jei2s1wiLCB0ZXh0OiBcIuWIpOaWreS+neaNruS4jei2s++8jOWumuS9jeiDveWKm+acieW+heaPkOmrmFwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuWumuS9jeWlvVwiLCB0ZXh0OiBcIuWumuS9jeiDveWKm+W8ulwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuWumuS9jeS4jei2s1wiLCB0ZXh0OiBcIuWumuS9jeiDveWKm+S4jei2s+WvvOiHtOmUmeivr1wiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuaXoOeXlei/ueWFqOWvuVwiLCB0ZXh0OiBcIuayoeacieWBmumimOeXlei/ueS9huWFqOWvueS6hu+8jOimgeazqOaEj+WFu+aIkOS5oOaDr1wiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi6YCJ5oupXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIue7huiKguWlvVwiLCB0ZXh0OiBcIue7huiKgumimOWBmuW+l+Wlve+8jOiDveaKk+S9j+WFs+mUruS/oeaBr1wiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuS4u+aXqOWlvVwiLCB0ZXh0OiBcIuS4u+aXqOmimOWBmuW+l+Wlve+8jOiDveaKiuaPoeaWh+eroOS4reW/g1wiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuWMuuWIhuWlvVwiLCB0ZXh0OiBcIuiDveWMuuWIhue7huiKgumimOWSjOS4u+aXqOmimFwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuWMuuWIhua3t+a3hlwiLCB0ZXh0OiBcIue7huiKgumimOWSjOS4u+aXqOmimOWuueaYk+a3t+a3hlwiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi5Lq65ZCN5Yy56YWNXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuWlvVwiLCB0ZXh0OiBcIuS6uuWQjemFjeS/oeaBr+WujOaIkOWlve+8jOe7huiKguS/oeaBr+ivhuWIq+WHhuehrlwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuW8sVwiLCB0ZXh0OiBcIuS6uuWQjemFjeS/oeaBr+WujOaIkOW6puS4jemrmFwiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi5q616JC95Yy56YWNXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuWFs+mUruivjeWlvVwiLCB0ZXh0OiBcIuWFs+mUruivjeWIkuWIhua4heaZsO+8jOato+ehrueOh+Wlve+8jOiDveivhuWIq+WQjOS5ieabv+aNolwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuWFs+mUruivjeW+heaPkOWNh1wiLCB0ZXh0OiBcIuWFs+mUruivjemAieeahOS4jeWlve+8jOS4jeWFt+aciemZkOWumuaEj+S5ie+8jOato+ehrueOh+WBj+S9jlwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuWQjOS5ieabv+aNouW8sVwiLCB0ZXh0OiBcIuivhuWIq+WQjOS5ieabv+aNoueahOiDveWKm+iDveaPkOmrmFwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIue7huiKguivhuWIq+WlvVwiLCB0ZXh0OiBcIue7huiKguS/oeaBr+ivhuWIq+WHhuehru+8jOmimOWei+eJueeCueaOjOaPoeWlvVwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuS4quWIq+mimOS8mOWMllwiLCB0ZXh0OiBcIuS4quWIq+mimOebruWFs+mUruivjeWIkuWIhui/mOacieS8mOWMluepuumXtO+8jOaAu+S9k+ihqOeOsOWlvVwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuWujOaIkOWlvVwiLCB0ZXh0OiBcIuauteiQvemFjeS/oeaBr+WujOaIkOWlve+8jOato+ehrueOh+iJr+WlvVwiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi5Y2K5Y+lL+agh+mimOWMuemFjVwiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLljYrlj6Xlpb1cIiwgdGV4dDogXCLljYrlj6XljLnphY3lrozmiJDlpb3vvIzpgLvovpHlhbPns7vnkIbop6Plh4bnoa5cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLljYrlj6XlvLFcIiwgdGV4dDogXCLljYrlj6XljLnphY3lrozmiJDluqbkuI3pq5jvvIzpgLvovpHlhbPns7vnkIbop6PmnInlm7Dpmr5cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLmoIfpopjlpb1cIiwgdGV4dDogXCLmrrXokL3phY3moIfpopjlrozmiJDlpb3vvIzmpoLmi6zog73lipvlvLpcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLmoIfpopjlvLFcIiwgdGV4dDogXCLmrrXokL3phY3moIfpopjlrozmiJDluqbkuI3pq5jvvIzmpoLmi6zog73lipvmnInlvoXmj5Dpq5hcIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwic3R1LXNraWxsc1wiLFxuICAgICAgICBsYWJlbDogXCLmioDlt6dcIixcbiAgICAgICAgZ3JvdXBzOiBbXG4gICAgICAgICAgeyBoZWFkZXI6IFwi5a6a5L2N6K+N5YiS5YiGXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIueJueauiuivjeWlvVwiLCB0ZXh0OiBcIueJueauiuivjeivhuWIq+WIqeeUqOiDveWKm+W8ulwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIueJueauiuivjeW8sVwiLCB0ZXh0OiBcIueJueauiuivjeivhuWIq+WIqeeUqOiDveWKm+W8sVwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIumAieivjeWQiOeQhlwiLCB0ZXh0OiBcIumAieivjeWQiOeQhu+8jOWumuS9jeWHhuehrlwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIumAieivjeS4jeWQiOeQhlwiLCB0ZXh0OiBcIumAieivjeS4jeWQiOeQhu+8jOWumuS9jeaViOaenOS4jeWlvVwiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi5YWz6ZSu6K+N5YiS5YiGXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuWlvVwiLCB0ZXh0OiBcIuWFs+mUruivjeWIkuWIhuWQiOeQhua4heaZsFwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuaooeezilwiLCB0ZXh0OiBcIuWFs+mUruivjeWIkuWIhuaooeeziu+8jOS4jeWkn+eyvuWHhlwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuaJvuWPgueFp+eJqeWlvVwiLCB0ZXh0OiBcIuaJvuWPgueFp+eJqeiDveWKm+W8ulwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuaJvuWPgueFp+eJqeW8sVwiLCB0ZXh0OiBcIuaJvuWPgueFp+eJqeiDveWKm+W8sVwiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi5omr6K+7XCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIumAn+W6puW/q1wiLCB0ZXh0OiBcIuaJq+ivu+mAn+W6puW/q++8jOaJvuWFs+mUruivjeiDveWKm+W8ulwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIumAn+W6puaFolwiLCB0ZXh0OiBcIuaJq+ivu+mAn+W6puaFou+8jOmcgOimgeaPkOWNh1wiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuaJvuivjeW8ulwiLCB0ZXh0OiBcIuaJq+ivu+aJvuWFs+mUruivjeiDveWKm+W8ulwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuaJvuivjeW8sVwiLCB0ZXh0OiBcIuaJq+ivu+aJvuWFs+mUruivjeiDveWKm+W8sVwiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi55Wl6K+7L+amguaLrFwiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLmjozmj6Hlpb1cIiwgdGV4dDogXCLnlaXor7vmlrnms5Xmjozmj6Hlpb3vvIzog73lv6vpgJ/miormj6HkuLvml6hcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLlvoXmj5DljYdcIiwgdGV4dDogXCLnlaXor7vmlrnms5XlvoXmj5DljYfvvIzpmIXor7vmlYjnjofkuI3lpJ9cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLmpoLmi6zlvLpcIiwgdGV4dDogXCLmgLvnu5PmpoLmi6zog73lipvlvLpcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLmpoLmi6zlvLFcIiwgdGV4dDogXCLmgLvnu5PmpoLmi6zog73lipvlvLHvvIzpnIDopoHliqDlvLpcIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICAgIHsgaGVhZGVyOiBcIuWQjOS5ieabv+aNolwiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLnroDljZXlpb1cIiwgdGV4dDogXCLnroDljZXmm7/mjaLor4bliKvog73lipvlvLpcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLnroDljZXlvLFcIiwgdGV4dDogXCLnroDljZXmm7/mjaLor4bliKvog73lipvlvLFcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLmlLnlhpnlpb1cIiwgdGV4dDogXCLmlLnlhpnnsbvmm7/mjaLor4bliKvog73lipvlvLpcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLmlLnlhpnlvLFcIiwgdGV4dDogXCLmlLnlhpnnsbvmm7/mjaLor4bliKvog73lipvlvLHvvIzlr7npq5jluqbmlLnlhpnmlY/mhJ9cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLpooTmtYvlvLpcIiwgdGV4dDogXCLlkIzkuYnmm7/mjaLpooTmtYvog73lipvlvLpcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLpooTmtYvlvLFcIiwgdGV4dDogXCLlkIzkuYnmm7/mjaLpooTmtYvog73lipvlvLFcIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICAgIHsgaGVhZGVyOiBcIumVv+mavuWPpVwiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLkuLvlubLlpb1cIiwgdGV4dDogXCLog73or4bliKvplb/pmr7lj6XkuLvlubJcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLkuLvlubLlvLFcIiwgdGV4dDogXCLkuI3lpKrnkIbop6PkuLvlubLmpoLlv7VcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLnkIbop6PlvLpcIiwgdGV4dDogXCLplb/pmr7lj6XnkIbop6Pog73lipvlvLpcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLnkIbop6PlkIPliptcIiwgdGV4dDogXCLplb/pmr7lj6XnkIbop6PlkIPlipvvvIzpmIXor7vmnInlm7Dpmr5cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLmnInov5vmraVcIiwgdGV4dDogXCLplb/pmr7lj6XnkIbop6PmnInov5vmraVcIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwic3R1LW1hc3RlcnlcIixcbiAgICAgICAgbGFiZWw6IFwi5o6M5o+hXCIsXG4gICAgICAgIGdyb3VwczogW1xuICAgICAgICAgIHsgaGVhZGVyOiBcIuivreazlVwiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLov4fnoaxcIiwgdGV4dDogXCLor63ms5XpnZ7luLjov4fnoaxcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLnroDljZXlj6Xlpb1cIiwgdGV4dDogXCLnroDljZXlj6XnmoTor63ms5Xmjozmj6Hlvpflvojlpb1cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLln7rnoYDoloTlvLFcIiwgdGV4dDogXCLor63ms5Xln7rnoYDoloTlvLHvvIzpnIDopoHliqDlvLpcIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICAgIHsgaGVhZGVyOiBcIueLrOeri+e7g+S5oFwiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLlh7roibJcIiwgdGV4dDogXCLni6znq4vnu4PkuaDlrozmiJDlh7roibLvvIzml7bpl7TlkozmraPnoa7njofpg73lvojmo5JcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLmnInov5vmraVcIiwgdGV4dDogXCLni6znq4vnu4PkuaDmnInlvojlpKfov5vmraXvvIzmraPnoa7njofkv53mjIHpq5jmsLTlubNcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLoia/lpb1cIiwgdGV4dDogXCLni6znq4vnu4PkuaDmraPnoa7njofoia/lpb3vvIzkvYbpgJ/luqbkuI3lpJ/lv6tcIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICAgIHsgaGVhZGVyOiBcIue/u+ivkVwiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLlkIPliptcIiwgdGV4dDogXCLnv7vor5HotbfmnaXlkIPliptcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLmhaJcIiwgdGV4dDogXCLljZXlj6Xnv7vor5HpnIDopoHml7bpl7TmgJ3ogIPvvIzogIPlnLrkuIrml7bpl7TkuI3lpJ/nlKhcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLmnInov5vmraVcIiwgdGV4dDogXCLnv7vor5Hog73lipvmnInov5vmraVcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLngrnlkI3lpb1cIiwgdGV4dDogXCLngrnlkI3nmoTnv7vor5HlgZrlvpflvojlpb1cIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICAgIHsgaGVhZGVyOiBcIuivjeaxh+ivreaEn1wiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLor63mhJ/lpb1cIiwgdGV4dDogXCLnjJzor43lgZrlvpflvojlpb3vvIzmnInngrnor63mhJ9cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLln7rnoYDlvLFcIiwgdGV4dDogXCLor43msYfln7rnoYDkuI3lpJ/miY7lrp5cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLmnInov5vmraVcIiwgdGV4dDogXCLor43msYfmjozmj6HmnInov5vmraVcIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICAgIHsgaGVhZGVyOiBcIuWFpemXqOa1i1wiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLlrprkvY3msqHpl67pophcIiwgdGV4dDogXCLloavnqbrpopjlrprkvY3og73lipvmsqHmnInpl67pophcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLor43msYfoia/lpb1cIiwgdGV4dDogXCLor43msYfmjozmj6Hoia/lpb1cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLmraPnoa7njofpq5hcIiwgdGV4dDogXCLooajnjrDoia/lpb3vvIzmraPnoa7njofpq5hcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLkuIDoiKxcIiwgdGV4dDogXCLlhaXpl6jmtYvooajnjrDkuIDoiKxcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLlvoXmj5DljYdcIiwgdGV4dDogXCLlhaXpl6jmtYvooajnjrDpnIDopoHmj5DljYdcIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwic3R1LWltcHJvdmVcIixcbiAgICAgICAgbGFiZWw6IFwi6ZyA5Yqg5by6XCIsXG4gICAgICAgIGdyb3VwczogW1xuICAgICAgICAgIHsgaGVhZGVyOiBcIuivjeaxh1wiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLliqDlvLrog4zor7VcIiwgdGV4dDogXCLor43msYfln7rnoYDkuI3lpJ/miY7lrp7vvIzlu7rorq7liqDlvLrln7rnoYDor43msYfog4zor7Xlt6nlm7pcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLliqDlvLrpu5jlhplcIiwgdGV4dDogXCLpnIDopoHorqTnnJ/lr7nlvoXor43msYfpu5jlhplcIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICAgIHsgaGVhZGVyOiBcIuiuree7g1wiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLpmZDml7borq3nu4NcIiwgdGV4dDogXCLpmZDml7borq3nu4PmraPnoa7njofkvY7vvIznvLrlsJHpq5jljovorq3nu4NcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLpmIXor7vpgJ/luqZcIiwgdGV4dDogXCLpmIXor7vpgJ/luqblgY/mhaLvvIzpnIDopoHliqDlvLrpmZDml7borq3nu4NcIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICAgIHsgaGVhZGVyOiBcIuS5oOaDr1wiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLlgZrpopjnl5Xov7lcIiwgdGV4dDogXCLlhbvmiJDlgZrpopjnl5Xov7nnmoTkuaDmg69cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLnq6/mraPmgIHluqZcIiwgdGV4dDogXCLnq6/mraPlrabkuaDmgIHluqbvvIzkvZzkuJropoHmjInml7blrozmiJBcIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICAgIHsgaGVhZGVyOiBcIuaKgOW3p1wiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLlrprkvY3og73liptcIiwgdGV4dDogXCLlrprkvY3og73lipvpnIDopoHliqDlvLpcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLlkIzkuYnmm7/mjaJcIiwgdGV4dDogXCLlkIzkuYnmm7/mjaLor4bliKvog73lipvpnIDopoHliqDlvLpcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLplb/pmr7lj6VcIiwgdGV4dDogXCLplb/pmr7lj6XnkIbop6Pog73lipvpnIDopoHliqDlvLpcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLmo4Dmn6XmraXpqqRcIiwgdGV4dDogXCLpnIDopoHmnInmo4Dmn6XmraXpqqTvvIzpgb/lhY3nspflv4PplJnor69cIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICAgIHsgaGVhZGVyOiBcIuS4k+azqFwiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLkv53mjIHkuJPms6hcIiwgdGV4dDogXCLpnIDopoHlnKjnu4PkuaDml7bkv53mjIHkuJPms6jvvIzmj5Dpq5jmlYjnjodcIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbEl0ZW1zKCk6IFRlbXBsYXRlSXRlbVtdIHtcbiAgY29uc3QgaXRlbXM6IFRlbXBsYXRlSXRlbVtdID0gW107XG4gIGZlZWRiYWNrVGVtcGxhdGVzLmZvckVhY2goKGNhdCkgPT4ge1xuICAgIGNhdC5zZWN0aW9ucy5mb3JFYWNoKChzZWMpID0+IHtcbiAgICAgIHNlYy5ncm91cHMuZm9yRWFjaCgoZ3JwKSA9PiB7XG4gICAgICAgIGdycC5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBpdGVtcztcbn1cbiIsImltcG9ydCB7IEl0ZW1WaWV3LCBNYXJrZG93blZpZXcsIFdvcmtzcGFjZUxlYWYgfSBmcm9tICdvYnNpZGlhbic7XG5pbXBvcnQgVGV4dEluc2VydFBsdWdpbiBmcm9tICcuL21haW4nO1xuaW1wb3J0IHsgZmVlZGJhY2tUZW1wbGF0ZXMsIENhdGVnb3J5LCBTZWN0aW9uIH0gZnJvbSAnLi90ZW1wbGF0ZXMnO1xuXG5leHBvcnQgY29uc3QgU2lkZVBhbmVsQ29udHJvbFZpZXdUeXBlID0gJ2ZlZWRiYWNrLWFzc2lzdGFudC12aWV3JztcblxudHlwZSBBY3RpdmVWaWV3ID0ge1xuICBjYXRlZ29yeUlkeDogbnVtYmVyO1xuICBzZWN0aW9uSWR4OiBudW1iZXIgfCBudWxsO1xufTtcblxuZXhwb3J0IGNsYXNzIFNpZGVQYW5lbENvbnRyb2xWaWV3IGV4dGVuZHMgSXRlbVZpZXcge1xuICBwcml2YXRlIHBsdWdpbjogVGV4dEluc2VydFBsdWdpbjtcbiAgcHJpdmF0ZSBhY3RpdmU6IEFjdGl2ZVZpZXcgPSB7IGNhdGVnb3J5SWR4OiAwLCBzZWN0aW9uSWR4OiBudWxsIH07XG5cbiAgY29uc3RydWN0b3IobGVhZjogV29ya3NwYWNlTGVhZiwgcGx1Z2luOiBUZXh0SW5zZXJ0UGx1Z2luKSB7XG4gICAgc3VwZXIobGVhZik7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICBwdWJsaWMgZ2V0Vmlld1R5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gU2lkZVBhbmVsQ29udHJvbFZpZXdUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldERpc3BsYXlUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdGZWVkYmFjayBBc3Npc3RhbnQnO1xuICB9XG5cbiAgcHVibGljIGdldEljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ3ZpZXdJY29uJztcbiAgfVxuXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xuICAgIHN1cGVyLmxvYWQoKTtcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhdygpOiB2b2lkIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lckVsLmNoaWxkcmVuWzFdO1xuICAgIGNvbnN0IHJvb3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvb3RFbC5pZCA9ICdTaWRlUGFuZVJvb3RFbGVtZW50JztcbiAgICByb290RWwuc3R5bGUubWF4V2lkdGggPSAnMzAwcHgnO1xuICAgIHJvb3RFbC5zdHlsZS5taW5XaWR0aCA9ICczMDBweCc7XG4gICAgcm9vdEVsLnN0eWxlLnBhZGRpbmcgPSAnOHB4JztcblxuICAgIHRoaXMuZHJhd1RvcFRhYnMocm9vdEVsKTtcblxuICAgIGNvbnRhaW5lci5lbXB0eSgpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyb290RWwpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3VG9wVGFicyhyb290RWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgdGFiUm93ID0gcm9vdEVsLmNyZWF0ZURpdigpO1xuICAgIHRhYlJvdy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHRhYlJvdy5zdHlsZS5nYXAgPSAnNHB4JztcbiAgICB0YWJSb3cuc3R5bGUubWFyZ2luQm90dG9tID0gJzhweCc7XG5cbiAgICBmZWVkYmFja1RlbXBsYXRlcy5mb3JFYWNoKChjYXQsIGlkeCkgPT4ge1xuICAgICAgY29uc3QgYnRuID0gdGFiUm93LmNyZWF0ZURpdigpO1xuICAgICAgYnRuLnN0eWxlLmZsZXggPSAnMSc7XG4gICAgICBidG4uc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICBidG4uc3R5bGUucGFkZGluZyA9ICc4cHggMCc7XG4gICAgICBidG4uc3R5bGUuZm9udFNpemUgPSAnMTVweCc7XG4gICAgICBidG4uc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgIGJ0bi5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICBidG4uc3R5bGUuYm9yZGVyUmFkaXVzID0gJzZweCc7XG4gICAgICBidG4uc2V0VGV4dChjYXQubGFiZWwpO1xuXG4gICAgICBpZiAodGhpcy5hY3RpdmUuY2F0ZWdvcnlJZHggPT09IGlkeCkge1xuICAgICAgICBidG4uc3R5bGUuYmFja2dyb3VuZCA9ICd2YXIoLS1pbnRlcmFjdGl2ZS1hY2NlbnQpJztcbiAgICAgICAgYnRuLnN0eWxlLmNvbG9yID0gJ3ZhcigtLXRleHQtb24tYWNjZW50KSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidG4uc3R5bGUuYmFja2dyb3VuZCA9ICd2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWNvdmVyKSc7XG4gICAgICAgIGJ0bi5zdHlsZS5jb2xvciA9ICd2YXIoLS10ZXh0LW11dGVkKSc7XG4gICAgICB9XG5cbiAgICAgIGJ0bi5vbkNsaWNrRXZlbnQoKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZS5jYXRlZ29yeUlkeCA9IGlkeDtcbiAgICAgICAgdGhpcy5hY3RpdmUuc2VjdGlvbklkeCA9IG51bGw7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRyYXdTdWJUYWJzKHJvb3RFbCk7XG4gICAgdGhpcy5kcmF3Q29udGVudChyb290RWwpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3U3ViVGFicyhyb290RWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgY2F0ID0gZmVlZGJhY2tUZW1wbGF0ZXNbdGhpcy5hY3RpdmUuY2F0ZWdvcnlJZHhdO1xuICAgIGlmICghY2F0KSByZXR1cm47XG5cbiAgICBjb25zdCBzdWJSb3cgPSByb290RWwuY3JlYXRlRGl2KCk7XG4gICAgc3ViUm93LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgc3ViUm93LnN0eWxlLmZsZXhXcmFwID0gJ3dyYXAnO1xuICAgIHN1YlJvdy5zdHlsZS5nYXAgPSAnNHB4JztcbiAgICBzdWJSb3cuc3R5bGUubWFyZ2luQm90dG9tID0gJzEwcHgnO1xuXG4gICAgY2F0LnNlY3Rpb25zLmZvckVhY2goKHNlYywgaWR4KSA9PiB7XG4gICAgICBjb25zdCBidG4gPSBzdWJSb3cuY3JlYXRlRGl2KCk7XG4gICAgICBidG4uc3R5bGUucGFkZGluZyA9ICc0cHggMTBweCc7XG4gICAgICBidG4uc3R5bGUuZm9udFNpemUgPSAnMTJweCc7XG4gICAgICBidG4uc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgYnRuLnN0eWxlLmJvcmRlclJhZGl1cyA9ICc0cHgnO1xuICAgICAgYnRuLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpJztcbiAgICAgIGJ0bi5zZXRUZXh0KHNlYy5sYWJlbCk7XG5cbiAgICAgIGlmICh0aGlzLmFjdGl2ZS5zZWN0aW9uSWR4ID09PSBpZHgpIHtcbiAgICAgICAgYnRuLnN0eWxlLmJhY2tncm91bmQgPSAndmFyKC0taW50ZXJhY3RpdmUtYWNjZW50LWhvdmVyKSc7XG4gICAgICAgIGJ0bi5zdHlsZS5jb2xvciA9ICd2YXIoLS10ZXh0LW9uLWFjY2VudCknO1xuICAgICAgICBidG4uc3R5bGUuZm9udFdlaWdodCA9ICc2MDAnO1xuICAgICAgICBidG4uc3R5bGUuYm9yZGVyQ29sb3IgPSAndmFyKC0taW50ZXJhY3RpdmUtYWNjZW50KSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidG4uc3R5bGUuYmFja2dyb3VuZCA9ICd2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSknO1xuICAgICAgICBidG4uc3R5bGUuY29sb3IgPSAndmFyKC0tdGV4dC1tdXRlZCknO1xuICAgICAgfVxuXG4gICAgICBidG4ub25DbGlja0V2ZW50KCgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmUuc2VjdGlvbklkeCA9IHRoaXMuYWN0aXZlLnNlY3Rpb25JZHggPT09IGlkeCA/IG51bGwgOiBpZHg7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGRyYXdDb250ZW50KHJvb3RFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjYXQgPSBmZWVkYmFja1RlbXBsYXRlc1t0aGlzLmFjdGl2ZS5jYXRlZ29yeUlkeF07XG4gICAgaWYgKCFjYXQpIHJldHVybjtcblxuICAgIGNvbnN0IHNlY3Rpb25zVG9TaG93ID0gdGhpcy5hY3RpdmUuc2VjdGlvbklkeCAhPT0gbnVsbFxuICAgICAgPyBbY2F0LnNlY3Rpb25zW3RoaXMuYWN0aXZlLnNlY3Rpb25JZHhdXVxuICAgICAgOiBjYXQuc2VjdGlvbnM7XG5cbiAgICBzZWN0aW9uc1RvU2hvdy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICBzZWN0aW9uLmdyb3Vwcy5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgICAgICB0aGlzLmRyYXdHcm91cChyb290RWwsIHNlY3Rpb24ubGFiZWwsIGdyb3VwKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3R3JvdXAocm9vdEVsOiBIVE1MRWxlbWVudCwgc2VjdGlvbkxhYmVsOiBzdHJpbmcsIGdyb3VwOiB7IGhlYWRlcjogc3RyaW5nOyBpdGVtczogeyBsYWJlbDogc3RyaW5nOyB0ZXh0OiBzdHJpbmcgfVtdIH0pOiB2b2lkIHtcbiAgICBjb25zdCBoZWFkZXJSb3cgPSByb290RWwuY3JlYXRlRGl2KCk7XG4gICAgaGVhZGVyUm93LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgaGVhZGVyUm93LnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcbiAgICBoZWFkZXJSb3cuc3R5bGUucGFkZGluZyA9ICc2cHggNHB4IDJweCc7XG4gICAgaGVhZGVyUm93LnN0eWxlLmJvcmRlckJvdHRvbSA9ICcxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpJztcbiAgICBoZWFkZXJSb3cuc3R5bGUubWFyZ2luQm90dG9tID0gJzRweCc7XG5cbiAgICBjb25zdCB0YWcgPSBoZWFkZXJSb3cuY3JlYXRlRGl2KCk7XG4gICAgdGFnLnN0eWxlLmJhY2tncm91bmQgPSAndmFyKC0taW50ZXJhY3RpdmUtYWNjZW50KSc7XG4gICAgdGFnLnN0eWxlLmNvbG9yID0gJ3ZhcigtLXRleHQtb24tYWNjZW50KSc7XG4gICAgdGFnLnN0eWxlLmZvbnRTaXplID0gJzExcHgnO1xuICAgIHRhZy5zdHlsZS5mb250V2VpZ2h0ID0gJzYwMCc7XG4gICAgdGFnLnN0eWxlLnBhZGRpbmcgPSAnMXB4IDZweCc7XG4gICAgdGFnLnN0eWxlLmJvcmRlclJhZGl1cyA9ICczcHgnO1xuICAgIHRhZy5zdHlsZS5tYXJnaW5SaWdodCA9ICc2cHgnO1xuICAgIHRhZy5zZXRUZXh0KGdyb3VwLmhlYWRlcik7XG5cbiAgICBjb25zdCBzZWNUYWcgPSBoZWFkZXJSb3cuY3JlYXRlRGl2KCk7XG4gICAgc2VjVGFnLnN0eWxlLmNvbG9yID0gJ3ZhcigtLXRleHQtbXV0ZWQpJztcbiAgICBzZWNUYWcuc3R5bGUuZm9udFNpemUgPSAnMTBweCc7XG4gICAgc2VjVGFnLnNldFRleHQoc2VjdGlvbkxhYmVsKTtcblxuICAgIGNvbnN0IGl0ZW1zUGVyUm93ID0gMztcbiAgICBsZXQgcm93OiBIVE1MRWxlbWVudCA9IG51bGw7XG5cbiAgICBncm91cC5pdGVtcy5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHtcbiAgICAgIGlmIChpZHggJSBpdGVtc1BlclJvdyA9PT0gMCkge1xuICAgICAgICByb3cgPSByb290RWwuY3JlYXRlRGl2KHsgY2xzOiAnbmF2LWJ1dHRvbnMtY29udGFpbmVyJyB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYnRuID0gcm93LmNyZWF0ZURpdih7IGNsczogJ25hdi1hY3Rpb24tYnV0dG9uJyB9KTtcbiAgICAgIGJ0bi5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgIGJ0bi5zdHlsZS5wYWRkaW5nID0gJzZweCAzcHgnO1xuICAgICAgYnRuLnN0eWxlLmZvbnRTaXplID0gJzEzcHgnO1xuICAgICAgYnRuLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgIGJ0bi5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNHB4JztcbiAgICAgIGJ0bi5zdHlsZS53aGl0ZVNwYWNlID0gJ25vd3JhcCc7XG4gICAgICBidG4uc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgIGJ0bi5zdHlsZS50ZXh0T3ZlcmZsb3cgPSAnZWxsaXBzaXMnO1xuICAgICAgYnRuLmFwcGVuZFRleHQoaXRlbS5sYWJlbCk7XG5cbiAgICAgIGJ0bi5vbkNsaWNrRXZlbnQoKCkgPT4ge1xuICAgICAgICB0aGlzLmluc2VydFRleHQoaXRlbS50ZXh0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcm9vdEVsLmNyZWF0ZURpdigpLnN0eWxlLmhlaWdodCA9ICc2cHgnO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnNlcnRUZXh0KHRleHQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGxlYWYgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TW9zdFJlY2VudExlYWYoKTtcbiAgICBpZiAobGVhZiAmJiBsZWFmLnZpZXcgaW5zdGFuY2VvZiBNYXJrZG93blZpZXcpIHtcbiAgICAgIGNvbnN0IGVkaXRvciA9IGxlYWYudmlldy5lZGl0b3I7XG4gICAgICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbih0ZXh0KTtcbiAgICAgIGVkaXRvci5mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQXBwLCBFZGl0b3IsIFN1Z2dlc3RNb2RhbCB9IGZyb20gJ29ic2lkaWFuJztcbmltcG9ydCB7IGdldEFsbEl0ZW1zLCBUZW1wbGF0ZUl0ZW0gfSBmcm9tICcuL3RlbXBsYXRlcyc7XG5cbmV4cG9ydCBjbGFzcyBDb2RlU3VnZ2VzdGlvbk1vZGFsIGV4dGVuZHMgU3VnZ2VzdE1vZGFsPFRlbXBsYXRlSXRlbT4ge1xuICBwcml2YXRlIGVkaXRvcjogRWRpdG9yO1xuXG4gIHB1YmxpYyBzZXRFZGl0b3IgPSAoZWRpdG9yOiBFZGl0b3IpID0+IHtcbiAgICB0aGlzLmVkaXRvciA9IGVkaXRvcjtcbiAgfTtcblxuICBnZXRTdWdnZXN0aW9ucyhxdWVyeTogc3RyaW5nKTogVGVtcGxhdGVJdGVtW10ge1xuICAgIGNvbnN0IGFsbEl0ZW1zID0gZ2V0QWxsSXRlbXMoKTtcbiAgICBjb25zdCBmaWx0ZXJGdW5jdGlvbiA9IChpdGVtOiBUZW1wbGF0ZUl0ZW0pID0+XG4gICAgICBpdGVtLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgIGl0ZW0udGV4dC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xuICAgIHJldHVybiBhbGxJdGVtcy5maWx0ZXIoZmlsdGVyRnVuY3Rpb24pO1xuICB9XG5cbiAgcmVuZGVyU3VnZ2VzdGlvbihpdGVtOiBUZW1wbGF0ZUl0ZW0sIGVsOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IHJvdyA9IGVsLmNyZWF0ZUVsKCdkaXYnKTtcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgnY29tbWFuZC1saXN0LXZpZXctcm93Jyk7XG5cbiAgICBjb25zdCBsYWJlbERpdiA9IHJvdy5jcmVhdGVEaXYoKTtcbiAgICBsYWJlbERpdi5jbGFzc0xpc3QuYWRkKCdjb21tYW5kLWxpc3Qtdmlldy10ZXh0Jyk7XG4gICAgbGFiZWxEaXYuc3R5bGUuZm9udFdlaWdodCA9ICc2MDAnO1xuICAgIGxhYmVsRGl2LnNldFRleHQoaXRlbS5sYWJlbCk7XG5cbiAgICBjb25zdCB0ZXh0RGl2ID0gcm93LmNyZWF0ZURpdigpO1xuICAgIHRleHREaXYuc3R5bGUuZm9udFNpemUgPSAnMTJweCc7XG4gICAgdGV4dERpdi5zdHlsZS5jb2xvciA9ICd2YXIoLS10ZXh0LW11dGVkKSc7XG4gICAgdGV4dERpdi5zdHlsZS5wYWRkaW5nVG9wID0gJzJweCc7XG4gICAgdGV4dERpdi5zZXRUZXh0KGl0ZW0udGV4dCk7XG4gIH1cblxuICBvbkNob29zZVN1Z2dlc3Rpb24oaXRlbTogVGVtcGxhdGVJdGVtLCBldnQ6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KSB7XG4gICAgdGhpcy5lZGl0b3IucmVwbGFjZVNlbGVjdGlvbihpdGVtLnRleHQpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkaXNwbGF5ID0gKGFwcDogQXBwLCBlZGl0b3I6IEVkaXRvcik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gbmV3IENvZGVTdWdnZXN0aW9uTW9kYWwoYXBwKTtcbiAgICBtb2RhbC5zZXRFZGl0b3IoZWRpdG9yKTtcbiAgICBtb2RhbC5vcGVuKCk7XG4gIH07XG59XG4iLCJpbXBvcnQge1xyXG4gIEFwcCxcclxuICBFZGl0b3IsXHJcbiAgTWFya2Rvd25WaWV3LFxyXG4gIFBsdWdpbixcclxuICBQbHVnaW5TZXR0aW5nVGFiLFxyXG4gIFNldHRpbmcsXHJcbn0gZnJvbSAnb2JzaWRpYW4nO1xyXG5cclxuaW1wb3J0IHsgYWRkSWNvbnMgfSBmcm9tICcuL2ljb25zJztcclxuXHJcbmltcG9ydCB7XHJcbiAgU2lkZVBhbmVsQ29udHJvbFZpZXcsXHJcbiAgU2lkZVBhbmVsQ29udHJvbFZpZXdUeXBlLFxyXG59IGZyb20gJy4vU2lkZVBhbmVsQ29udHJvbFZpZXcnO1xyXG5pbXBvcnQgeyBDb2RlU3VnZ2VzdGlvbk1vZGFsIH0gZnJvbSAnLi9Db21tYW5kTGlzdFZpZXcnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQbHVnaW5TZXR0aW5ncyB7XHJcbiAgc2lkZVBhbmVTaWRlTGVmdDogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgREVGQVVMVF9TRVRUSU5HUzogUGx1Z2luU2V0dGluZ3MgPSB7XHJcbiAgc2lkZVBhbmVTaWRlTGVmdDogZmFsc2UsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0SW5zZXJ0UGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcclxuICBzZXR0aW5nczogUGx1Z2luU2V0dGluZ3M7XHJcbiAgcHJpdmF0ZSBzaWRlUGFuZWxDb250cm9sVmlldzogU2lkZVBhbmVsQ29udHJvbFZpZXc7XHJcblxyXG4gIGFzeW5jIG9ubG9hZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdsb2FkaW5nIHRleHQtaW5zZXJ0LXBsdWdpbicpO1xyXG5cclxuICAgIGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XHJcbiAgICBhZGRJY29ucygpO1xyXG5cclxuICAgIHRoaXMucmVnaXN0ZXJWaWV3KFNpZGVQYW5lbENvbnRyb2xWaWV3VHlwZSwgKGxlYWYpID0+IHtcclxuICAgICAgdGhpcy5zaWRlUGFuZWxDb250cm9sVmlldyA9IG5ldyBTaWRlUGFuZWxDb250cm9sVmlldyhsZWFmLCB0aGlzKTtcclxuICAgICAgcmV0dXJuIHRoaXMuc2lkZVBhbmVsQ29udHJvbFZpZXc7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmFkZFJpYmJvbkljb24oJ3ZpZXdJY29uJywgJ09wZW4gVGV4dCBJbnNlcnQgUGFuZWwnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudG9nZ2xlU2lkZVBhbmVsQ29udHJvbFZpZXcoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgIGlkOiAnb3Blbi1jb21tYW5kLXNlbGVjdG9yJyxcclxuICAgICAgbmFtZTogJ09wZW4gQ29tbWFuZCBTZWxlY3RvcicsXHJcbiAgICAgIGhvdGtleXM6IFt7IG1vZGlmaWVyczogWydBbHQnXSwga2V5OiAncScgfV0sXHJcbiAgICAgIGVkaXRvckNhbGxiYWNrOiAoZWRpdG9yOiBFZGl0b3IsIHZpZXc6IE1hcmtkb3duVmlldykgPT4ge1xyXG4gICAgICAgIENvZGVTdWdnZXN0aW9uTW9kYWwuZGlzcGxheSh0aGlzLmFwcCwgZWRpdG9yKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgU2V0dGluZ3NUYWIodGhpcy5hcHAsIHRoaXMpKTtcclxuICB9XHJcblxyXG4gIG9udW5sb2FkKCkge31cclxuXHJcbiAgYXN5bmMgbG9hZFNldHRpbmdzKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oREVGQVVMVF9TRVRUSU5HUywgYXdhaXQgdGhpcy5sb2FkRGF0YSgpKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcclxuICAgIGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IHRvZ2dsZVNpZGVQYW5lbENvbnRyb2xWaWV3ID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgdGhpcy5hcHAud29ya3NwYWNlLmRldGFjaExlYXZlc09mVHlwZShTaWRlUGFuZWxDb250cm9sVmlld1R5cGUpO1xyXG5cclxuICAgIGlmICh0aGlzLnNldHRpbmdzLnNpZGVQYW5lU2lkZUxlZnQpIHtcclxuICAgICAgYXdhaXQgdGhpcy5hcHAud29ya3NwYWNlLmdldExlZnRMZWFmKGZhbHNlKS5zZXRWaWV3U3RhdGUoe1xyXG4gICAgICAgIHR5cGU6IFNpZGVQYW5lbENvbnRyb2xWaWV3VHlwZSxcclxuICAgICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXdhaXQgdGhpcy5hcHAud29ya3NwYWNlLmdldFJpZ2h0TGVhZihmYWxzZSkuc2V0Vmlld1N0YXRlKHtcclxuICAgICAgICB0eXBlOiBTaWRlUGFuZWxDb250cm9sVmlld1R5cGUsXHJcbiAgICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFwcC53b3Jrc3BhY2UucmV2ZWFsTGVhZihcclxuICAgICAgdGhpcy5hcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZShTaWRlUGFuZWxDb250cm9sVmlld1R5cGUpWzBdLFxyXG4gICAgKTtcclxuICB9O1xyXG59XHJcblxyXG5jbGFzcyBTZXR0aW5nc1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xyXG4gIHBsdWdpbjogVGV4dEluc2VydFBsdWdpbjtcclxuXHJcbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogVGV4dEluc2VydFBsdWdpbikge1xyXG4gICAgc3VwZXIoYXBwLCBwbHVnaW4pO1xyXG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XHJcbiAgfVxyXG5cclxuICBhc3luYyBkaXNwbGF5KCkge1xyXG4gICAgbGV0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XHJcblxyXG4gICAgY29udGFpbmVyRWwuZW1wdHkoKTtcclxuXHJcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDInLCB7XHJcbiAgICAgIHRleHQ6ICdUZXh0IEluc2VydCBQbHVnaW4gU2V0dGluZ3MnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgIC5zZXROYW1lKCdTaWRlIFBhbmUgU2lkZScpXHJcbiAgICAgIC5zZXREZXNjKCdDaG9vc2Ugb24gd2hpY2ggc2lkZSB0aGUgU2lkZSBQYW5lIGFwcGVhcnMuJylcclxuICAgICAgLmFkZFRleHQoKHRleHQpID0+XHJcbiAgICAgICAgdGV4dFxyXG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKCdFbnRlciBsZWZ0IG9yIHJpZ2h0JylcclxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaWRlUGFuZVNpZGVMZWZ0ID8gJ2xlZnQnIDogJ3JpZ2h0JylcclxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2lkZVBhbmVTaWRlTGVmdCA9XHJcbiAgICAgICAgICAgICAgdmFsdWUgPT09ICdsZWZ0JyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImFkZEljb24iLCJNYXJrZG93blZpZXciLCJJdGVtVmlldyIsIlN1Z2dlc3RNb2RhbCIsIlBsdWdpbiIsIlNldHRpbmciLCJQbHVnaW5TZXR0aW5nVGFiIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbkMsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7QUFDekMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3BGLFFBQVEsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzFHLElBQUksT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUNGO0FBQ08sU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNoQyxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssVUFBVSxJQUFJLENBQUMsS0FBSyxJQUFJO0FBQzdDLFFBQVEsTUFBTSxJQUFJLFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsK0JBQStCLENBQUMsQ0FBQztBQUNsRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEIsSUFBSSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDM0MsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pGLENBQUM7QUF1Q0Q7QUFDTyxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7QUFDN0QsSUFBSSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEtBQUssWUFBWSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDaEgsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDL0QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ25HLFFBQVEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3RHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3RILFFBQVEsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLEtBQUssQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUNEO0FBQ08sU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUMzQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDckgsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3SixJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3RFLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRSxFQUFFO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0FBQ3RFLFFBQVEsT0FBTyxDQUFDLEVBQUUsSUFBSTtBQUN0QixZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pLLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QixnQkFBZ0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTTtBQUM5QyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQ3hFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQjtBQUNoQixvQkFBb0IsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtBQUNoSSxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUMxRyxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQ3pGLG9CQUFvQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7QUFDdkYsb0JBQW9CLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDMUMsb0JBQW9CLENBQUMs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
