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
                id: "class-attendance",
                label: "出勤",
                groups: [
                    { header: "出勤", items: [
                            { label: "全到", text: "全员按时出勤，无迟到早退" },
                            { label: "个别迟到", text: "个别学员迟到" },
                            { label: "大量迟到", text: "大量学员迟到，需要注意" },
                            { label: "个别请假", text: "个别学员请假" },
                            { label: "大量请假", text: "大量学员请假，需要注意出勤率" },
                            { label: "个别早退", text: "个别学员早退" },
                            { label: "大量早退", text: "大量学员早退，需要注意课堂纪律" },
                        ] },
                ],
            },
            {
                id: "class-discipline",
                label: "纪律",
                groups: [
                    { header: "纪律", typeName: "纪律", dimensions: [
                            { name: "整体", items: [
                                    { label: "好", text: "整体纪律良好，课堂秩序井然" },
                                    { label: "一般", text: "整体纪律一般，偶有走神" },
                                    { label: "差", text: "整体纪律较差，需要整顿" },
                                    { label: "有进步", text: "纪律有进步，比之前好" },
                                ] },
                            { name: "个人", items: [
                                    { label: "电子产品", text: "个别同学纪律有问题，上课使用电子产品" },
                                    { label: "偏离课堂", text: "个别学员纪律有问题，课上干无关的事" },
                                    { label: "有进步", text: "个人纪律有进步，表现改善" },
                                ] },
                        ] },
                ],
            },
            {
                id: "class-atmosphere",
                label: "课堂氛围",
                groups: [
                    { header: "课堂氛围", typeName: "课堂氛围", dimensions: [
                            { name: "整体", items: [
                                    { label: "活跃", text: "课堂气氛活跃，学员互动积极，课堂气氛很好，学习氛围浓厚" },
                                    { label: "一般", text: "课堂气氛一般，比较平淡，整体积极性一般，需要老师带动" },
                                    { label: "沉闷", text: "课堂气氛较沉闷，学员反应不积极，学习氛围需要改善，学员配合度不够" },
                                ] },
                            { name: "个人", items: [
                                    { label: "沉闷", text: "个别学员状态低迷，参与度低，需要调整学习状态" },
                                    { label: "活跃", text: "个别学员非常积极活跃，表现突出" },
                                ] },
                        ] },
                ],
            },
            {
                id: "class-performance",
                label: "课堂表现",
                groups: [
                    { header: "课堂表现", typeName: "课堂表现", dimensions: [
                            { name: "整体", items: [
                                    { label: "好", text: "整体态度认真，能跟上课堂进度" },
                                    { label: "一般", text: "整体认真程度一般，部分学员偶尔走神" },
                                ] },
                            { name: "个人", items: [
                                    { label: "好", text: "个别学员课堂表现突出，学习效率高" },
                                    { label: "一般", text: "个别学员学习效率偏低，需要注意" },
                                ] },
                        ] },
                ],
            },
            {
                id: "class-homework",
                label: "作业情况",
                groups: [
                    { header: "作业情况", items: [
                            { label: "大部分按时", text: "大部分学员按时提交作业" },
                            { label: "大部分未交", text: "大部分学员作业写了但是没交" },
                            { label: "整体态度好", text: "整体作业态度好，大部分学员认真按时完成" },
                            { label: "态度需端正", text: "整体对待作业的态度需要端正" },
                        ] },
                ],
            },
            {
                id: "class-practice",
                label: "当堂练习",
                groups: [
                    { header: "当堂练习", items: [
                            { label: "好", text: "整体独立练习效率高，正确率和速度都好" },
                            { label: "有进步", text: "整体独立练习效率有进步，比之前更专注" },
                            { label: "需提升", text: "整体独立练习效率需要提升，精神状态不够饱满" },
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
                    { header: "出勤", items: [
                            { label: "迟到", text: "学员迟到，无早退，正常出勤" },
                            { label: "早退", text: "学员早退，正常出勤" },
                            { label: "请假", text: "学员请假" },
                            { label: "正常", text: "学员正常出勤，无迟到早退" },
                        ] },
                ],
            },
            {
                id: "stu-entrance-test",
                label: "入门测",
                groups: [
                    { header: "入门测", typeName: "入门测", dimensions: [
                            { name: "速度", items: [
                                    { label: "快", text: "入门测速度快，完成及时" },
                                    { label: "良好", text: "入门测速度良好" },
                                    { label: "慢", text: "入门测速度偏慢" },
                                ] },
                            { name: "质量", items: [
                                    { label: "高", text: "有复习动作，上节课生词语法掌握好，正确率很高" },
                                    { label: "中", text: "表现良好，有少量错误，上节课总体吸收度良好" },
                                    { label: "低", text: "缺少课后复习动作，完成度有待提高" },
                                ] },
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
                            { label: "非常认真", text: "听课和笔记非常认真，全程跟随课堂节奏" },
                            { label: "认真", text: "态度认真，能跟上课堂进度" },
                            { label: "一般", text: "认真程度一般，偶尔走神" },
                            { label: "需加强", text: "认真程度不够，需要提醒" },
                            { label: "明显提升", text: "专注度有很大进步" },
                            { label: "有进步", text: "专注度有进步" },
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
                    { header: "提交状态", typeName: "提交状态", subgroups: [
                            { header: "按时提交", dimensions: [
                                    { name: "", items: [
                                            { label: "认真", text: "按时提交，认真" },
                                            { label: "态度非常好", text: "按时提交，态度非常好，非常认真" },
                                            { label: "复习", text: "按时提交，态度非常好，先复习再做的作业" },
                                            { label: "糊弄", text: "按时提交，但是缺少做题勾画痕迹" },
                                        ] },
                                ] },
                            { header: "未按时交", dimensions: [
                                    { name: "", items: [
                                            { label: "写了没交", text: "按时完成，但未按时提交" },
                                            { label: "没按时交", text: "没按时交" },
                                        ] },
                                ] },
                            { header: "缺交/部分", dimensions: [
                                    { name: "", items: [
                                            { label: "缺交", text: "作业缺交" },
                                            { label: "部分完成", text: "部分完成，未全部完成" },
                                        ] },
                                ] },
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
                    { header: "填空题", typeName: "填空题", subgroups: [
                            { header: "词性", dimensions: [
                                    { name: "", items: [
                                            { label: "良好", text: "无词性错误，有预测和检查动作" },
                                            { label: "待提高", text: "有词性错误，缺少预测和检查步骤" },
                                        ] },
                                ] },
                            { header: "词数", dimensions: [
                                    { name: "", items: [
                                            { label: "待提高", text: "没注意到词数限制的规定" },
                                        ] },
                                ] },
                            { header: "精确预测", dimensions: [
                                    { name: "", items: [
                                            { label: "良好", text: "能利用关键词做出精确预测" },
                                            { label: "待提高", text: "无法做出精确预测帮助缩小范围" },
                                        ] },
                                ] },
                            { header: "表格填空", dimensions: [
                                    { name: "表头定位", items: [
                                            { label: "好", text: "表头定位能力强" },
                                            { label: "弱", text: "没有利用表头定位的意识" },
                                        ] },
                                ] },
                            { header: "笔记填空", dimensions: [
                                    { name: "", items: [
                                            { label: "好", text: "笔记填空完成好，信息捕捉准确" },
                                            { label: "弱", text: "笔记填空完成度不高，信息遗漏多" },
                                        ] },
                                ] },
                            { header: "摘要填空", dimensions: [
                                    { name: "整体表现", items: [
                                            { label: "全对", text: "摘要填空正确率高，段落理解能力强" },
                                            { label: "正确率好", text: "摘要填空正确率好，掌握度好" },
                                            { label: "待提高", text: "对高度改写的摘要填空力不从心，正确率不理想" },
                                        ] },
                                    { name: "排除法", items: [
                                            { label: "运用", text: "合理运用排除法" },
                                            { label: "未运用", text: "排除法运用不够" },
                                        ] },
                                    { name: "段落结构", items: [
                                            { label: "好", text: "段落结构识别定位能力强" },
                                            { label: "弱", text: "段落结构识别定位能力弱" },
                                        ] },
                                ] },
                            { header: "地图填空", dimensions: [
                                    { name: "方位词", items: [
                                            { label: "好", text: "方位词掌握好" },
                                            { label: "薄弱", text: "方位词薄弱，需要加强" },
                                        ] },
                                ] },
                        ] },
                    { header: "判断题", typeName: "判断题", dimensions: [
                            { name: "考点识别", items: [
                                    { label: "清晰", text: "考点识别清晰，能准确判断" },
                                    { label: "不清", text: "考点识别不清晰" },
                                    { label: "有基础", text: "具备一定识别考点的能力" },
                                ] },
                            { name: "No/NG区分", items: [
                                    { label: "好", text: "No和NG区分能力强" },
                                    { label: "混淆", text: "No和NG区分有问题，正确率待提升" },
                                ] },
                            { name: "判断依据", items: [
                                    { label: "充分", text: "判断依据充分，定位准确" },
                                    { label: "不足", text: "判断依据不足，定位能力有待提高" },
                                ] },
                            { name: "定位能力", items: [
                                    { label: "好", text: "定位能力强" },
                                    { label: "不足", text: "定位能力不足导致错误" },
                                ] },
                            { name: "做题痕迹", items: [
                                    { label: "无痕迹全对", text: "没有做题痕迹但全对了，要注意养成习惯" },
                                ] },
                        ] },
                    { header: "选择题", typeName: "选择题", dimensions: [
                            { name: "细节题", items: [
                                    { label: "好", text: "细节题做得好，能抓住关键信息" },
                                    { label: "弱", text: "细节题正确率偏低，需要加强" },
                                ] },
                            { name: "主旨题", items: [
                                    { label: "好", text: "主旨题做得好，略读方法掌握好" },
                                    { label: "弱", text: "主旨题正确率偏低，需要加强" },
                                ] },
                            { name: "题型区分", items: [
                                    { label: "清晰", text: "能区分细节题和主旨题" },
                                    { label: "混淆", text: "细节题和主旨题容易混淆" },
                                ] },
                        ] },
                    { header: "人名配信息", typeName: "人名配信息", items: [
                            { label: "好", text: "人名配信息完成好，细节信息识别准确" },
                            { label: "弱", text: "人名配信息完成度不高，题型特点未掌握" },
                        ] },
                    { header: "段落配信息", typeName: "段落配信息", dimensions: [
                            { name: "关键词划分", items: [
                                    { label: "好", text: "关键词划分清晰，正确率好，能识别同义替换" },
                                    { label: "待提升", text: "关键词划分不合理，不具有限定意义，正确率偏低" },
                                ] },
                            { name: "同义替换", items: [
                                    { label: "好", text: "识别同义替换的能力强" },
                                    { label: "弱", text: "识别同义替换的能力能提高" },
                                ] },
                            { name: "细节识别", items: [
                                    { label: "好", text: "细节信息识别准确，题型特点掌握好" },
                                    { label: "待提升", text: "细节信息识别能力需要提高" },
                                ] },
                            { name: "完成度", items: [
                                    { label: "好", text: "段落配信息完成好，正确率良好" },
                                    { label: "差", text: "段落配信息完成度不高" },
                                ] },
                        ] },
                    { header: "半句匹配", typeName: "半句匹配", items: [
                            { label: "好", text: "半句匹配完成好，逻辑关系理解准确" },
                            { label: "弱", text: "半句匹配完成度不高，逻辑关系理解有困难" },
                        ] },
                    { header: "段落标题匹配", typeName: "段落标题匹配", items: [
                            { label: "好", text: "段落配标题完成好，略读能力强" },
                            { label: "弱", text: "段落配标题完成度不高，略读概括主旨概括能力有待提高" },
                        ] },
                ],
            },
            {
                id: "stu-skills",
                label: "技巧",
                groups: [
                    { header: "定位词划分", typeName: "定位词划分", dimensions: [
                            { name: "特殊词识别", items: [
                                    { label: "好", text: "特殊词识别利用能力强" },
                                    { label: "弱", text: "特殊词识别利用能力弱" },
                                ] },
                            { name: "选词合理性", items: [
                                    { label: "合理", text: "选词合理，定位准确" },
                                    { label: "不合理", text: "选词不合理，定位效果不好" },
                                ] },
                        ] },
                    { header: "关键词划分", typeName: "关键词划分", dimensions: [
                            { name: "划分质量", items: [
                                    { label: "好", text: "关键词划分合理清晰" },
                                    { label: "模糊", text: "关键词划分模糊，不够精准" },
                                ] },
                            { name: "找参照物", items: [
                                    { label: "好", text: "找参照物能力强" },
                                    { label: "弱", text: "找参照物能力弱" },
                                ] },
                        ] },
                    { header: "扫读技巧", typeName: "扫读技巧", dimensions: [
                            { name: "速度", items: [
                                    { label: "快", text: "扫读速度快，找关键词能力强" },
                                    { label: "慢", text: "扫读速度慢，需要提升" },
                                ] },
                            { name: "找关键词", items: [
                                    { label: "强", text: "扫读找关键词能力强" },
                                    { label: "弱", text: "扫读找关键词能力弱" },
                                ] },
                        ] },
                    { header: "略读技巧", typeName: "略读技巧", dimensions: [
                            { name: "方法掌握", items: [
                                    { label: "掌握好", text: "略读方法掌握好，能快速把握主旨" },
                                    { label: "待提升", text: "略读方法待提升，阅读效率不够" },
                                ] },
                            { name: "总结概括", items: [
                                    { label: "强", text: "总结概括能力强" },
                                    { label: "弱", text: "总结概括能力弱，需要加强" },
                                ] },
                        ] },
                    { header: "同义替换", typeName: "同义替换", dimensions: [
                            { name: "简单替换", items: [
                                    { label: "好", text: "简单替换识别能力强" },
                                    { label: "弱", text: "简单替换识别能力弱" },
                                ] },
                            { name: "改写类替换", items: [
                                    { label: "好", text: "改写类替换识别能力强" },
                                    { label: "弱", text: "改写类替换识别能力弱，对高度改写敏感" },
                                ] },
                            { name: "预测能力", items: [
                                    { label: "强", text: "同义替换预测能力强" },
                                    { label: "弱", text: "同义替换预测能力弱" },
                                ] },
                        ] },
                    { header: "长难句分析", typeName: "长难句分析", dimensions: [
                            { name: "主干识别", items: [
                                    { label: "好", text: "能识别长难句主干" },
                                    { label: "弱", text: "不太理解主干概念" },
                                ] },
                            { name: "整体理解", items: [
                                    { label: "强", text: "长难句理解能力强" },
                                    { label: "吃力", text: "长难句理解吃力，阅读有困难" },
                                    { label: "有进步", text: "长难句理解有进步" },
                                ] },
                        ] },
                ],
            },
            {
                id: "stu-mastery",
                label: "掌握",
                groups: [
                    { header: "语法基础", typeName: "语法基础", items: [
                            { label: "过硬", text: "语法非常过硬" },
                            { label: "简单句好", text: "简单句的语法掌握得很好" },
                            { label: "基础薄弱", text: "语法基础薄弱，需要加强" },
                        ] },
                    { header: "翻译能力", typeName: "翻译能力", items: [
                            { label: "吃力", text: "翻译起来吃力" },
                            { label: "慢", text: "单句翻译需要时间思考，考场上时间不够用" },
                            { label: "有进步", text: "翻译能力有进步" },
                            { label: "点名好", text: "点名的翻译做得很好" },
                        ] },
                    { header: "词汇语感", typeName: "词汇语感", dimensions: [
                            { name: "猜词能力", items: [
                                    { label: "好", text: "猜词做得很好，有点语感" },
                                    { label: "弱", text: "猜词能力弱，语感不够" },
                                ] },
                            { name: "词汇基础", items: [
                                    { label: "扎实", text: "词汇基础扎实" },
                                    { label: "薄弱", text: "词汇基础不够扎实" },
                                    { label: "有进步", text: "词汇掌握有进步" },
                                ] },
                        ] },
                    { header: "独立练习表现", typeName: "独立练习表现", dimensions: [
                            { name: "速度", items: [
                                    { label: "快", text: "独立练习速度快" },
                                    { label: "良好", text: "独立练习速度良好" },
                                    { label: "慢", text: "独立练习速度偏慢" },
                                ] },
                            { name: "质量", items: [
                                    { label: "高", text: "独立练习质量高" },
                                    { label: "中", text: "独立练习质量中等" },
                                    { label: "低", text: "独立练习质量偏低" },
                                ] },
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
                    { header: "专注力", items: [
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
                if (grp.items) {
                    grp.items.forEach(function (item) { return items.push(item); });
                }
                if (grp.dimensions) {
                    grp.dimensions.forEach(function (dim) {
                        dim.items.forEach(function (item) { return items.push(item); });
                    });
                }
                if (grp.subgroups) {
                    grp.subgroups.forEach(function (sub) {
                        if (sub.dimensions) {
                            sub.dimensions.forEach(function (dim) {
                                dim.items.forEach(function (item) { return items.push(item); });
                            });
                        }
                        if (sub.items) {
                            sub.items.forEach(function (item) { return items.push(item); });
                        }
                    });
                }
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
            btn.style.fontSize = '17px';
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
            btn.style.fontSize = '14px';
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
                _this.drawGroup(rootEl, group);
            });
        });
    };
    SidePanelControlView.prototype.drawGroup = function (rootEl, group) {
        var _this = this;
        var headerRow = rootEl.createDiv();
        headerRow.style.display = 'flex';
        headerRow.style.alignItems = 'center';
        headerRow.style.padding = '6px 4px 4px';
        headerRow.style.borderBottom = '1px solid var(--background-modifier-border)';
        headerRow.style.marginBottom = '4px';
        var tag = headerRow.createDiv();
        tag.style.background = 'var(--interactive-accent)';
        tag.style.color = 'var(--text-on-accent)';
        tag.style.fontSize = '16px';
        tag.style.fontWeight = '700';
        tag.style.padding = '3px 10px';
        tag.style.borderRadius = '4px';
        tag.style.cursor = 'pointer';
        tag.setText(group.header);
        tag.onClickEvent(function () {
            var insertText = group.typeName || group.header;
            _this.insertText(insertText);
        });
        if (group.subgroups) {
            group.subgroups.forEach(function (sub, idx) {
                if (idx > 0) {
                    var sep = rootEl.createDiv();
                    sep.style.borderTop = '1px dashed var(--background-modifier-border)';
                    sep.style.margin = '6px 0';
                }
                _this.drawSubGroup(rootEl, sub);
            });
        }
        if (group.dimensions) {
            var first_1 = true;
            group.dimensions.forEach(function (dim) {
                if (!first_1) {
                    var sep = rootEl.createDiv();
                    sep.style.borderTop = '1px dashed var(--background-modifier-border)';
                    sep.style.margin = '4px 0';
                }
                first_1 = false;
                _this.drawDimension(rootEl, dim);
            });
        }
        if (group.items) {
            group.items.forEach(function (item) {
                _this.drawItemButton(rootEl, item);
            });
        }
        rootEl.createDiv().style.height = '6px';
    };
    SidePanelControlView.prototype.drawSubGroup = function (rootEl, sub) {
        var _this = this;
        var subHeader = rootEl.createDiv();
        subHeader.style.display = 'flex';
        subHeader.style.alignItems = 'center';
        subHeader.style.padding = '4px 4px 2px 8px';
        var subTag = subHeader.createDiv();
        subTag.style.background = 'var(--interactive-accent)';
        subTag.style.color = 'var(--text-on-accent)';
        subTag.style.fontSize = '15px';
        subTag.style.fontWeight = '600';
        subTag.style.padding = '3px 10px';
        subTag.style.borderRadius = '4px';
        subTag.style.display = 'inline-block';
        subTag.style.cursor = 'pointer';
        subTag.setText(sub.header);
        subTag.onClickEvent(function () {
            _this.insertText(sub.header);
        });
        if (sub.dimensions) {
            sub.dimensions.forEach(function (dim) {
                _this.drawDimension(rootEl, dim);
            });
        }
        if (sub.items) {
            sub.items.forEach(function (item) {
                _this.drawItemButton(rootEl, item);
            });
        }
    };
    SidePanelControlView.prototype.drawDimension = function (rootEl, dim) {
        var _this = this;
        var dimRow = rootEl.createDiv();
        dimRow.style.display = 'flex';
        dimRow.style.alignItems = 'center';
        dimRow.style.padding = '2px 4px';
        dimRow.style.gap = '6px';
        var dimLabel = dimRow.createDiv();
        dimLabel.style.fontSize = '14px';
        dimLabel.style.fontWeight = '500';
        dimLabel.style.color = 'var(--text-normal)';
        dimLabel.style.minWidth = dim.name ? '70px' : '0';
        dimLabel.style.flexShrink = '0';
        if (dim.name) {
            dimLabel.setText(dim.name + ':');
        }
        var btnContainer = dimRow.createDiv();
        btnContainer.style.display = 'flex';
        btnContainer.style.flexWrap = 'wrap';
        btnContainer.style.gap = '3px';
        btnContainer.style.flex = '1';
        dim.items.forEach(function (item) {
            var btn = btnContainer.createDiv({ cls: 'nav-action-button' });
            btn.style.textAlign = 'center';
            btn.style.padding = '4px 8px';
            btn.style.fontSize = '14px';
            btn.style.cursor = 'pointer';
            btn.style.borderRadius = '4px';
            btn.style.whiteSpace = 'nowrap';
            btn.appendText(item.label);
            btn.onClickEvent(function () {
                _this.insertText(item.text);
            });
        });
    };
    SidePanelControlView.prototype.drawItemButton = function (rootEl, item) {
        var _this = this;
        var containers = Array.from(rootEl.querySelectorAll('.nav-buttons-container'));
        var row = containers.length > 0
            ? containers[containers.length - 1]
            : null;
        if (!row || row.querySelectorAll('.nav-action-button').length >= 4) {
            row = rootEl.createDiv({ cls: 'nav-buttons-container' });
            row.style.display = 'flex';
            row.style.flexWrap = 'wrap';
            row.style.gap = '3px';
        }
        var btn = row.createDiv({ cls: 'nav-action-button' });
        btn.style.textAlign = 'center';
        btn.style.padding = '5px 8px';
        btn.style.fontSize = '15px';
        btn.style.cursor = 'pointer';
        btn.style.borderRadius = '4px';
        btn.style.flex = '1 1 auto';
        btn.style.minWidth = '0';
        btn.style.whiteSpace = 'nowrap';
        btn.appendText(item.label);
        btn.onClickEvent(function () {
            _this.insertText(item.text);
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uL3NyYy9pY29ucy50cyIsIi4uL3NyYy90ZW1wbGF0ZXMudHMiLCIuLi9zcmMvU2lkZVBhbmVsQ29udHJvbFZpZXcudHMiLCIuLi9zcmMvQ29tbWFuZExpc3RWaWV3LnRzIiwiLi4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XHJcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xyXG4gICAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xyXG4gICAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XHJcbiAgICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xyXG59XHJcbiIsImltcG9ydCB7IGFkZEljb24gfSBmcm9tICdvYnNpZGlhbic7XG5cbmNvbnN0IHZpZXdJY29uID0gYFxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+XG4gICAgPHBhdGggZD1cIk0xNyAzYTIuODI4IDIuODI4IDAgMSAxIDQgNEw3LjUgMjAuNSAyIDIybDEuNS01LjVMMTcgM3pcIj48L3BhdGg+XG4gIDwvc3ZnPmA7XG5cbmV4cG9ydCBjb25zdCBpY29uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgdmlld0ljb24sXG59O1xuXG5leHBvcnQgY29uc3QgYWRkSWNvbnMgPSAoKTogdm9pZCA9PiB7XG4gIE9iamVjdC5rZXlzKGljb25zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBhZGRJY29uKGtleSwgaWNvbnNba2V5XSk7XG4gIH0pO1xufTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgVGVtcGxhdGVJdGVtIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2YWxEaW1lbnNpb24ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGl0ZW1zOiBUZW1wbGF0ZUl0ZW1bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaXNwbGF5R3JvdXAge1xuICBoZWFkZXI6IHN0cmluZztcbiAgdHlwZU5hbWU/OiBzdHJpbmc7XG4gIGRpbWVuc2lvbnM/OiBFdmFsRGltZW5zaW9uW107XG4gIGl0ZW1zPzogVGVtcGxhdGVJdGVtW107XG4gIHN1Ymdyb3Vwcz86IFN1Ykdyb3VwW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3ViR3JvdXAge1xuICBoZWFkZXI6IHN0cmluZztcbiAgdHlwZU5hbWU/OiBzdHJpbmc7XG4gIGRpbWVuc2lvbnM/OiBFdmFsRGltZW5zaW9uW107XG4gIGl0ZW1zPzogVGVtcGxhdGVJdGVtW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdGlvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGdyb3VwczogRGlzcGxheUdyb3VwW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2F0ZWdvcnkge1xuICBpZDogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBzZWN0aW9uczogU2VjdGlvbltdO1xufVxuXG5leHBvcnQgY29uc3QgZmVlZGJhY2tUZW1wbGF0ZXM6IENhdGVnb3J5W10gPSBbXG4gIHtcbiAgICBpZDogXCJjbGFzc1wiLFxuICAgIGxhYmVsOiBcIuePree6p1wiLFxuICAgIHNlY3Rpb25zOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiBcImNsYXNzLWF0dGVuZGFuY2VcIixcbiAgICAgICAgbGFiZWw6IFwi5Ye65YukXCIsXG4gICAgICAgIGdyb3VwczogW1xuICAgICAgICAgIHsgaGVhZGVyOiBcIuWHuuWLpFwiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLlhajliLBcIiwgdGV4dDogXCLlhajlkZjmjInml7blh7rli6TvvIzml6Dov5/liLDml6npgIBcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLkuKrliKvov5/liLBcIiwgdGV4dDogXCLkuKrliKvlrablkZjov5/liLBcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLlpKfph4/ov5/liLBcIiwgdGV4dDogXCLlpKfph4/lrablkZjov5/liLDvvIzpnIDopoHms6jmhI9cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLkuKrliKvor7flgYdcIiwgdGV4dDogXCLkuKrliKvlrablkZjor7flgYdcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLlpKfph4/or7flgYdcIiwgdGV4dDogXCLlpKfph4/lrablkZjor7flgYfvvIzpnIDopoHms6jmhI/lh7rli6TnjodcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLkuKrliKvml6npgIBcIiwgdGV4dDogXCLkuKrliKvlrablkZjml6npgIBcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLlpKfph4/ml6npgIBcIiwgdGV4dDogXCLlpKfph4/lrablkZjml6npgIDvvIzpnIDopoHms6jmhI/or77loILnuqrlvotcIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiY2xhc3MtZGlzY2lwbGluZVwiLFxuICAgICAgICBsYWJlbDogXCLnuqrlvotcIixcbiAgICAgICAgZ3JvdXBzOiBbXG4gICAgICAgICAgeyBoZWFkZXI6IFwi57qq5b6LXCIsIHR5cGVOYW1lOiBcIue6quW+i1wiLCBkaW1lbnNpb25zOiBbXG4gICAgICAgICAgICB7IG5hbWU6IFwi5pW05L2TXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5aW9XCIsIHRleHQ6IFwi5pW05L2T57qq5b6L6Imv5aW977yM6K++5aCC56ep5bqP5LqV54S2XCIgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLkuIDoiKxcIiwgdGV4dDogXCLmlbTkvZPnuqrlvovkuIDoiKzvvIzlgbbmnInotbDnpZ5cIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuW3rlwiLCB0ZXh0OiBcIuaVtOS9k+e6quW+i+i+g+W3ru+8jOmcgOimgeaVtOmhv1wiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5pyJ6L+b5q2lXCIsIHRleHQ6IFwi57qq5b6L5pyJ6L+b5q2l77yM5q+U5LmL5YmN5aW9XCIgfSxcbiAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgeyBuYW1lOiBcIuS4quS6ulwiLCBpdGVtczogW1xuICAgICAgICAgICAgICB7IGxhYmVsOiBcIueUteWtkOS6p+WTgVwiLCB0ZXh0OiBcIuS4quWIq+WQjOWtpue6quW+i+aciemXrumimO+8jOS4iuivvuS9v+eUqOeUteWtkOS6p+WTgVwiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5YGP56a76K++5aCCXCIsIHRleHQ6IFwi5Liq5Yir5a2m5ZGY57qq5b6L5pyJ6Zeu6aKY77yM6K++5LiK5bmy5peg5YWz55qE5LqLXCIgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLmnInov5vmraVcIiwgdGV4dDogXCLkuKrkurrnuqrlvovmnInov5vmraXvvIzooajnjrDmlLnlloRcIiB9LFxuICAgICAgICAgICAgXX0sXG4gICAgICAgICAgXX0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCJjbGFzcy1hdG1vc3BoZXJlXCIsXG4gICAgICAgIGxhYmVsOiBcIuivvuWgguawm+WbtFwiLFxuICAgICAgICBncm91cHM6IFtcbiAgICAgICAgICB7IGhlYWRlcjogXCLor77loILmsJvlm7RcIiwgdHlwZU5hbWU6IFwi6K++5aCC5rCb5Zu0XCIsIGRpbWVuc2lvbnM6IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCLmlbTkvZNcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLmtLvot4NcIiwgdGV4dDogXCLor77loILmsJTmsJvmtLvot4PvvIzlrablkZjkupLliqjnp6/mnoHvvIzor77loILmsJTmsJvlvojlpb3vvIzlrabkuaDmsJvlm7TmtZPljppcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuS4gOiIrFwiLCB0ZXh0OiBcIuivvuWgguawlOawm+S4gOiIrO+8jOavlOi+g+W5s+a3oe+8jOaVtOS9k+enr+aegeaAp+S4gOiIrO+8jOmcgOimgeiAgeW4iOW4puWKqFwiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5rKJ6Ze3XCIsIHRleHQ6IFwi6K++5aCC5rCU5rCb6L6D5rKJ6Ze377yM5a2m5ZGY5Y+N5bqU5LiN56ev5p6B77yM5a2m5Lmg5rCb5Zu06ZyA6KaB5pS55ZaE77yM5a2m5ZGY6YWN5ZCI5bqm5LiN5aSfXCIgfSxcbiAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgeyBuYW1lOiBcIuS4quS6ulwiLCBpdGVtczogW1xuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuayiemXt1wiLCB0ZXh0OiBcIuS4quWIq+WtpuWRmOeKtuaAgeS9jui/t++8jOWPguS4juW6puS9ju+8jOmcgOimgeiwg+aVtOWtpuS5oOeKtuaAgVwiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5rS76LeDXCIsIHRleHQ6IFwi5Liq5Yir5a2m5ZGY6Z2e5bi456ev5p6B5rS76LeD77yM6KGo546w56qB5Ye6XCIgfSxcbiAgICAgICAgICAgIF19LFxuICAgICAgICAgIF19LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiY2xhc3MtcGVyZm9ybWFuY2VcIixcbiAgICAgICAgbGFiZWw6IFwi6K++5aCC6KGo546wXCIsXG4gICAgICAgIGdyb3VwczogW1xuICAgICAgICAgIHsgaGVhZGVyOiBcIuivvuWgguihqOeOsFwiLCB0eXBlTmFtZTogXCLor77loILooajnjrBcIiwgZGltZW5zaW9uczogW1xuICAgICAgICAgICAgeyBuYW1lOiBcIuaVtOS9k1wiLCBpdGVtczogW1xuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuWlvVwiLCB0ZXh0OiBcIuaVtOS9k+aAgeW6puiupOecn++8jOiDvei3n+S4iuivvuWggui/m+W6plwiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5LiA6IisXCIsIHRleHQ6IFwi5pW05L2T6K6k55yf56iL5bqm5LiA6Iis77yM6YOo5YiG5a2m5ZGY5YG25bCU6LWw56WeXCIgfSxcbiAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgeyBuYW1lOiBcIuS4quS6ulwiLCBpdGVtczogW1xuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuWlvVwiLCB0ZXh0OiBcIuS4quWIq+WtpuWRmOivvuWgguihqOeOsOeqgeWHuu+8jOWtpuS5oOaViOeOh+mrmFwiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5LiA6IisXCIsIHRleHQ6IFwi5Liq5Yir5a2m5ZGY5a2m5Lmg5pWI546H5YGP5L2O77yM6ZyA6KaB5rOo5oSPXCIgfSxcbiAgICAgICAgICAgIF19LFxuICAgICAgICAgIF19LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiY2xhc3MtaG9tZXdvcmtcIixcbiAgICAgICAgbGFiZWw6IFwi5L2c5Lia5oOF5Ya1XCIsXG4gICAgICAgIGdyb3VwczogW1xuICAgICAgICAgIHsgaGVhZGVyOiBcIuS9nOS4muaDheWGtVwiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLlpKfpg6jliIbmjInml7ZcIiwgdGV4dDogXCLlpKfpg6jliIblrablkZjmjInml7bmj5DkuqTkvZzkuJpcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLlpKfpg6jliIbmnKrkuqRcIiwgdGV4dDogXCLlpKfpg6jliIblrablkZjkvZzkuJrlhpnkuobkvYbmmK/msqHkuqRcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLmlbTkvZPmgIHluqblpb1cIiwgdGV4dDogXCLmlbTkvZPkvZzkuJrmgIHluqblpb3vvIzlpKfpg6jliIblrablkZjorqTnnJ/mjInml7blrozmiJBcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLmgIHluqbpnIDnq6/mraNcIiwgdGV4dDogXCLmlbTkvZPlr7nlvoXkvZzkuJrnmoTmgIHluqbpnIDopoHnq6/mraNcIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiY2xhc3MtcHJhY3RpY2VcIixcbiAgICAgICAgbGFiZWw6IFwi5b2T5aCC57uD5LmgXCIsXG4gICAgICAgIGdyb3VwczogW1xuICAgICAgICAgIHsgaGVhZGVyOiBcIuW9k+Wggue7g+S5oFwiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLlpb1cIiwgdGV4dDogXCLmlbTkvZPni6znq4vnu4PkuaDmlYjnjofpq5jvvIzmraPnoa7njoflkozpgJ/luqbpg73lpb1cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLmnInov5vmraVcIiwgdGV4dDogXCLmlbTkvZPni6znq4vnu4PkuaDmlYjnjofmnInov5vmraXvvIzmr5TkuYvliY3mm7TkuJPms6hcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLpnIDmj5DljYdcIiwgdGV4dDogXCLmlbTkvZPni6znq4vnu4PkuaDmlYjnjofpnIDopoHmj5DljYfvvIznsr7npZ7nirbmgIHkuI3lpJ/ppbHmu6FcIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwic3R1ZGVudFwiLFxuICAgIGxhYmVsOiBcIuWtpuWRmFwiLFxuICAgIHNlY3Rpb25zOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiBcInN0dS1hdHRlbmRhbmNlXCIsXG4gICAgICAgIGxhYmVsOiBcIuWHuuWLpFwiLFxuICAgICAgICBncm91cHM6IFtcbiAgICAgICAgICB7IGhlYWRlcjogXCLlh7rli6RcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi6L+f5YiwXCIsIHRleHQ6IFwi5a2m5ZGY6L+f5Yiw77yM5peg5pep6YCA77yM5q2j5bi45Ye65YukXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5pep6YCAXCIsIHRleHQ6IFwi5a2m5ZGY5pep6YCA77yM5q2j5bi45Ye65YukXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi6K+35YGHXCIsIHRleHQ6IFwi5a2m5ZGY6K+35YGHXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5q2j5bi4XCIsIHRleHQ6IFwi5a2m5ZGY5q2j5bi45Ye65Yuk77yM5peg6L+f5Yiw5pep6YCAXCIgfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcInN0dS1lbnRyYW5jZS10ZXN0XCIsXG4gICAgICAgIGxhYmVsOiBcIuWFpemXqOa1i1wiLFxuICAgICAgICBncm91cHM6IFtcbiAgICAgICAgICB7IGhlYWRlcjogXCLlhaXpl6jmtYtcIiwgdHlwZU5hbWU6IFwi5YWl6Zeo5rWLXCIsIGRpbWVuc2lvbnM6IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCLpgJ/luqZcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlv6tcIiwgdGV4dDogXCLlhaXpl6jmtYvpgJ/luqblv6vvvIzlrozmiJDlj4rml7ZcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuiJr+WlvVwiLCB0ZXh0OiBcIuWFpemXqOa1i+mAn+W6puiJr+WlvVwiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5oWiXCIsIHRleHQ6IFwi5YWl6Zeo5rWL6YCf5bqm5YGP5oWiXCIgfSxcbiAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgeyBuYW1lOiBcIui0qOmHj1wiLCBpdGVtczogW1xuICAgICAgICAgICAgICB7IGxhYmVsOiBcIumrmFwiLCB0ZXh0OiBcIuacieWkjeS5oOWKqOS9nO+8jOS4iuiKguivvueUn+ivjeivreazleaOjOaPoeWlve+8jOato+ehrueOh+W+iOmrmFwiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5LitXCIsIHRleHQ6IFwi6KGo546w6Imv5aW977yM5pyJ5bCR6YeP6ZSZ6K+v77yM5LiK6IqC6K++5oC75L2T5ZC45pS25bqm6Imv5aW9XCIgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLkvY5cIiwgdGV4dDogXCLnvLrlsJHor77lkI7lpI3kuaDliqjkvZzvvIzlrozmiJDluqbmnInlvoXmj5Dpq5hcIiB9LFxuICAgICAgICAgICAgXX0sXG4gICAgICAgICAgXX0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCJzdHUtcGVyZm9ybWFuY2VcIixcbiAgICAgICAgbGFiZWw6IFwi6K++5aCC6KGo546wXCIsXG4gICAgICAgIGdyb3VwczogW1xuICAgICAgICAgIHsgaGVhZGVyOiBcIuWPguS4juW6plwiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLpq5hcIiwgdGV4dDogXCLlj4LkuI7luqbpq5jvvIznp6/mnoHlm57nrZTpl67popjvvIzkuLvliqjkupLliqhcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLkuK1cIiwgdGV4dDogXCLlj4LkuI7luqbkuIDoiKzvvIzngrnlkI3ml7bog73lm57nrZRcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLkvY5cIiwgdGV4dDogXCLlj4LkuI7luqblgY/kvY7vvIzovoPlsJHkuLvliqjlj5HoqIBcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLmmI7mmL7mj5DljYdcIiwgdGV4dDogXCLlj4LkuI7luqbmmI7mmL7mj5DljYfvvIzlgLzlvpfogq/lrppcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLmnInov5vmraVcIiwgdGV4dDogXCLlj4LkuI7luqbmnInov5vmraXvvIzmr5TkuYvliY3mm7Tnp6/mnoFcIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICAgIHsgaGVhZGVyOiBcIuiupOecn+eoi+W6plwiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLpnZ7luLjorqTnnJ9cIiwgdGV4dDogXCLlkKzor77lkoznrJTorrDpnZ7luLjorqTnnJ/vvIzlhajnqIvot5/pmo/or77loILoioLlpY9cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLorqTnnJ9cIiwgdGV4dDogXCLmgIHluqborqTnnJ/vvIzog73ot5/kuIror77loILov5vluqZcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLkuIDoiKxcIiwgdGV4dDogXCLorqTnnJ/nqIvluqbkuIDoiKzvvIzlgbblsJTotbDnpZ5cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLpnIDliqDlvLpcIiwgdGV4dDogXCLorqTnnJ/nqIvluqbkuI3lpJ/vvIzpnIDopoHmj5DphpJcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLmmI7mmL7mj5DljYdcIiwgdGV4dDogXCLkuJPms6jluqbmnInlvojlpKfov5vmraVcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLmnInov5vmraVcIiwgdGV4dDogXCLkuJPms6jluqbmnInov5vmraVcIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICAgIHsgaGVhZGVyOiBcIueLrOeri+e7g+S5oFwiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLpq5hcIiwgdGV4dDogXCLni6znq4vnu4PkuaDmlYjnjofpq5jvvIzmraPnoa7njoflkozpgJ/luqbpg73lpb1cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLoia/lpb1cIiwgdGV4dDogXCLni6znq4vnu4PkuaDmlYjnjofoia/lpb3vvIzmraPnoa7njofkuI3plJnkvYbpgJ/luqblgY/mhaJcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLkvY5cIiwgdGV4dDogXCLni6znq4vnu4PkuaDmlYjnjofkvY7vvIzlrZjlnKjlj5HlkYbotbDnpZ7nmoTmg4XlhrVcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLmnInov5vmraVcIiwgdGV4dDogXCLni6znq4vnu4PkuaDmlYjnjofmnInov5vmraXvvIzmr5TkuYvliY3mm7TkuJPms6hcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLpnIDmj5DljYdcIiwgdGV4dDogXCLni6znq4vnu4PkuaDmlYjnjofpnIDopoHmj5DljYfvvIznsr7npZ7nirbmgIHkuI3lpJ/ppbHmu6FcIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwic3R1LWhvbWV3b3JrXCIsXG4gICAgICAgIGxhYmVsOiBcIuS9nOS4mlwiLFxuICAgICAgICBncm91cHM6IFtcbiAgICAgICAgICB7IGhlYWRlcjogXCLmj5DkuqTnirbmgIFcIiwgdHlwZU5hbWU6IFwi5o+Q5Lqk54q25oCBXCIsIHN1Ymdyb3VwczogW1xuICAgICAgICAgICAgeyBoZWFkZXI6IFwi5oyJ5pe25o+Q5LqkXCIsIGRpbWVuc2lvbnM6IFtcbiAgICAgICAgICAgICAgeyBuYW1lOiBcIlwiLCBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwi6K6k55yfXCIsIHRleHQ6IFwi5oyJ5pe25o+Q5Lqk77yM6K6k55yfXCIgfSxcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiBcIuaAgeW6pumdnuW4uOWlvVwiLCB0ZXh0OiBcIuaMieaXtuaPkOS6pO+8jOaAgeW6pumdnuW4uOWlve+8jOmdnuW4uOiupOecn1wiIH0sXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogXCLlpI3kuaBcIiwgdGV4dDogXCLmjInml7bmj5DkuqTvvIzmgIHluqbpnZ7luLjlpb3vvIzlhYjlpI3kuaDlho3lgZrnmoTkvZzkuJpcIiB9LFxuICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwi57OK5byEXCIsIHRleHQ6IFwi5oyJ5pe25o+Q5Lqk77yM5L2G5piv57y65bCR5YGa6aKY5Yu+55S755eV6L+5XCIgfSxcbiAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHsgaGVhZGVyOiBcIuacquaMieaXtuS6pFwiLCBkaW1lbnNpb25zOiBbXG4gICAgICAgICAgICAgIHsgbmFtZTogXCJcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiBcIuWGmeS6huayoeS6pFwiLCB0ZXh0OiBcIuaMieaXtuWujOaIkO+8jOS9huacquaMieaXtuaPkOS6pFwiIH0sXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogXCLmsqHmjInml7bkuqRcIiwgdGV4dDogXCLmsqHmjInml7bkuqRcIiB9LFxuICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgeyBoZWFkZXI6IFwi57y65LqkL+mDqOWIhlwiLCBkaW1lbnNpb25zOiBbXG4gICAgICAgICAgICAgIHsgbmFtZTogXCJcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiBcIue8uuS6pFwiLCB0ZXh0OiBcIuS9nOS4mue8uuS6pFwiIH0sXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogXCLpg6jliIblrozmiJBcIiwgdGV4dDogXCLpg6jliIblrozmiJDvvIzmnKrlhajpg6jlrozmiJBcIiB9LFxuICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIF19LFxuICAgICAgICAgIF19LFxuICAgICAgICAgIHsgaGVhZGVyOiBcIuWBmumimOS5oOaDr1wiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLmnInnl5Xov7lcIiwgdGV4dDogXCLmnInlgZrpopjnl5Xov7nvvIzkuaDmg6/lpb1cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLnvLrnl5Xov7lcIiwgdGV4dDogXCLnvLrlsJHlgZrpopjnl5Xov7nvvIzkuaDmg6/ov5jmmK/opoHlhbvmiJDnmoRcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLnl5Xov7nmuIXmmbBcIiwgdGV4dDogXCLlgZrpopjnl5Xov7nmuIXmmbDvvIzlhbPplK7or43liJLliIbmmI7noa5cIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICAgIHsgaGVhZGVyOiBcIuS9nOS4muaAgeW6plwiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLnq6/mraNcIiwgdGV4dDogXCLlrabkuaDmgIHluqbnq6/mraPvvIzkvZzkuJrorqTnnJ9cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLpnIDnq6/mraNcIiwgdGV4dDogXCLlrabkuaDmgIHluqbpnIDopoHnq6/mraPvvIzkvZzkuJrlrozmiJDluqbkuI3lpJ9cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLlhYjlpI3kuaBcIiwgdGV4dDogXCLlhYjlpI3kuaDnrJTorrDlho3lhpnkvZzkuJrvvIzkuaDmg6/lpb1cIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwic3R1LXF1ZXN0aW9uc1wiLFxuICAgICAgICBsYWJlbDogXCLpopjlnotcIixcbiAgICAgICAgZ3JvdXBzOiBbXG4gICAgICAgICAgeyBoZWFkZXI6IFwi5aGr56m66aKYXCIsIHR5cGVOYW1lOiBcIuWhq+epuumimFwiLCBzdWJncm91cHM6IFtcbiAgICAgICAgICAgIHsgaGVhZGVyOiBcIuivjeaAp1wiLCBkaW1lbnNpb25zOiBbXG4gICAgICAgICAgICAgIHsgbmFtZTogXCJcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiBcIuiJr+WlvVwiLCB0ZXh0OiBcIuaXoOivjeaAp+mUmeivr++8jOaciemihOa1i+WSjOajgOafpeWKqOS9nFwiIH0sXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogXCLlvoXmj5Dpq5hcIiwgdGV4dDogXCLmnInor43mgKfplJnor6/vvIznvLrlsJHpooTmtYvlkozmo4Dmn6XmraXpqqRcIiB9LFxuICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgeyBoZWFkZXI6IFwi6K+N5pWwXCIsIGRpbWVuc2lvbnM6IFtcbiAgICAgICAgICAgICAgeyBuYW1lOiBcIlwiLCBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwi5b6F5o+Q6auYXCIsIHRleHQ6IFwi5rKh5rOo5oSP5Yiw6K+N5pWw6ZmQ5Yi255qE6KeE5a6aXCIgfSxcbiAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHsgaGVhZGVyOiBcIueyvuehrumihOa1i1wiLCBkaW1lbnNpb25zOiBbXG4gICAgICAgICAgICAgIHsgbmFtZTogXCJcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiBcIuiJr+WlvVwiLCB0ZXh0OiBcIuiDveWIqeeUqOWFs+mUruivjeWBmuWHuueyvuehrumihOa1i1wiIH0sXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogXCLlvoXmj5Dpq5hcIiwgdGV4dDogXCLml6Dms5XlgZrlh7rnsr7noa7pooTmtYvluK7liqnnvKnlsI/ojIPlm7RcIiB9LFxuICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgeyBoZWFkZXI6IFwi6KGo5qC85aGr56m6XCIsIGRpbWVuc2lvbnM6IFtcbiAgICAgICAgICAgICAgeyBuYW1lOiBcIuihqOWktOWumuS9jVwiLCBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwi5aW9XCIsIHRleHQ6IFwi6KGo5aS05a6a5L2N6IO95Yqb5by6XCIgfSxcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiBcIuW8sVwiLCB0ZXh0OiBcIuayoeacieWIqeeUqOihqOWktOWumuS9jeeahOaEj+ivhlwiIH0sXG4gICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICB7IGhlYWRlcjogXCLnrJTorrDloavnqbpcIiwgZGltZW5zaW9uczogW1xuICAgICAgICAgICAgICB7IG5hbWU6IFwiXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogXCLlpb1cIiwgdGV4dDogXCLnrJTorrDloavnqbrlrozmiJDlpb3vvIzkv6Hmga/mjZXmjYnlh4bnoa5cIiB9LFxuICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwi5byxXCIsIHRleHQ6IFwi56yU6K6w5aGr56m65a6M5oiQ5bqm5LiN6auY77yM5L+h5oGv6YGX5ryP5aSaXCIgfSxcbiAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHsgaGVhZGVyOiBcIuaRmOimgeWhq+epulwiLCBkaW1lbnNpb25zOiBbXG4gICAgICAgICAgICAgIHsgbmFtZTogXCLmlbTkvZPooajnjrBcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiBcIuWFqOWvuVwiLCB0ZXh0OiBcIuaRmOimgeWhq+epuuato+ehrueOh+mrmO+8jOauteiQveeQhuino+iDveWKm+W8ulwiIH0sXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogXCLmraPnoa7njoflpb1cIiwgdGV4dDogXCLmkZjopoHloavnqbrmraPnoa7njoflpb3vvIzmjozmj6Hluqblpb1cIiB9LFxuICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwi5b6F5o+Q6auYXCIsIHRleHQ6IFwi5a+56auY5bqm5pS55YaZ55qE5pGY6KaB5aGr56m65Yqb5LiN5LuO5b+D77yM5q2j56Gu546H5LiN55CG5oOzXCIgfSxcbiAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICAgIHsgbmFtZTogXCLmjpLpmaTms5VcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiBcIui/kOeUqFwiLCB0ZXh0OiBcIuWQiOeQhui/kOeUqOaOkumZpOazlVwiIH0sXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogXCLmnKrov5DnlKhcIiwgdGV4dDogXCLmjpLpmaTms5Xov5DnlKjkuI3lpJ9cIiB9LFxuICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgeyBuYW1lOiBcIuauteiQvee7k+aehFwiLCBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwi5aW9XCIsIHRleHQ6IFwi5q616JC957uT5p6E6K+G5Yir5a6a5L2N6IO95Yqb5by6XCIgfSxcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiBcIuW8sVwiLCB0ZXh0OiBcIuauteiQvee7k+aehOivhuWIq+WumuS9jeiDveWKm+W8sVwiIH0sXG4gICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICB7IGhlYWRlcjogXCLlnLDlm77loavnqbpcIiwgZGltZW5zaW9uczogW1xuICAgICAgICAgICAgICB7IG5hbWU6IFwi5pa55L2N6K+NXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogXCLlpb1cIiwgdGV4dDogXCLmlrnkvY3or43mjozmj6Hlpb1cIiB9LFxuICAgICAgICAgICAgICAgIHsgbGFiZWw6IFwi6JaE5byxXCIsIHRleHQ6IFwi5pa55L2N6K+N6JaE5byx77yM6ZyA6KaB5Yqg5by6XCIgfSxcbiAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLliKTmlq3pophcIiwgdHlwZU5hbWU6IFwi5Yik5pat6aKYXCIsIGRpbWVuc2lvbnM6IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCLogIPngrnor4bliKtcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLmuIXmmbBcIiwgdGV4dDogXCLogIPngrnor4bliKvmuIXmmbDvvIzog73lh4bnoa7liKTmlq1cIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuS4jea4hVwiLCB0ZXh0OiBcIuiAg+eCueivhuWIq+S4jea4heaZsFwiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5pyJ5Z+656GAXCIsIHRleHQ6IFwi5YW35aSH5LiA5a6a6K+G5Yir6ICD54K555qE6IO95YqbXCIgfSxcbiAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgeyBuYW1lOiBcIk5vL05H5Yy65YiGXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5aW9XCIsIHRleHQ6IFwiTm/lkoxOR+WMuuWIhuiDveWKm+W8ulwiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5re35reGXCIsIHRleHQ6IFwiTm/lkoxOR+WMuuWIhuaciemXrumimO+8jOato+ehrueOh+W+heaPkOWNh1wiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCLliKTmlq3kvp3mja5cIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlhYXliIZcIiwgdGV4dDogXCLliKTmlq3kvp3mja7lhYXliIbvvIzlrprkvY3lh4bnoa5cIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuS4jei2s1wiLCB0ZXh0OiBcIuWIpOaWreS+neaNruS4jei2s++8jOWumuS9jeiDveWKm+acieW+heaPkOmrmFwiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCLlrprkvY3og73liptcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlpb1cIiwgdGV4dDogXCLlrprkvY3og73lipvlvLpcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuS4jei2s1wiLCB0ZXh0OiBcIuWumuS9jeiDveWKm+S4jei2s+WvvOiHtOmUmeivr1wiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCLlgZrpopjnl5Xov7lcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLml6Dnl5Xov7nlhajlr7lcIiwgdGV4dDogXCLmsqHmnInlgZrpopjnl5Xov7nkvYblhajlr7nkuobvvIzopoHms6jmhI/lhbvmiJDkuaDmg69cIiB9LFxuICAgICAgICAgICAgXX0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi6YCJ5oup6aKYXCIsIHR5cGVOYW1lOiBcIumAieaLqemimFwiLCBkaW1lbnNpb25zOiBbXG4gICAgICAgICAgICB7IG5hbWU6IFwi57uG6IqC6aKYXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5aW9XCIsIHRleHQ6IFwi57uG6IqC6aKY5YGa5b6X5aW977yM6IO95oqT5L2P5YWz6ZSu5L+h5oGvXCIgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlvLFcIiwgdGV4dDogXCLnu4boioLpopjmraPnoa7njoflgY/kvY7vvIzpnIDopoHliqDlvLpcIiB9LFxuICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICB7IG5hbWU6IFwi5Li75peo6aKYXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5aW9XCIsIHRleHQ6IFwi5Li75peo6aKY5YGa5b6X5aW977yM55Wl6K+75pa55rOV5o6M5o+h5aW9XCIgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlvLFcIiwgdGV4dDogXCLkuLvml6jpopjmraPnoa7njoflgY/kvY7vvIzpnIDopoHliqDlvLpcIiB9LFxuICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICB7IG5hbWU6IFwi6aKY5Z6L5Yy65YiGXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5riF5pmwXCIsIHRleHQ6IFwi6IO95Yy65YiG57uG6IqC6aKY5ZKM5Li75peo6aKYXCIgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLmt7fmt4ZcIiwgdGV4dDogXCLnu4boioLpopjlkozkuLvml6jpopjlrrnmmJPmt7fmt4ZcIiB9LFxuICAgICAgICAgICAgXX0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi5Lq65ZCN6YWN5L+h5oGvXCIsIHR5cGVOYW1lOiBcIuS6uuWQjemFjeS/oeaBr1wiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLlpb1cIiwgdGV4dDogXCLkurrlkI3phY3kv6Hmga/lrozmiJDlpb3vvIznu4boioLkv6Hmga/or4bliKvlh4bnoa5cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLlvLFcIiwgdGV4dDogXCLkurrlkI3phY3kv6Hmga/lrozmiJDluqbkuI3pq5jvvIzpopjlnovnibnngrnmnKrmjozmj6FcIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICAgIHsgaGVhZGVyOiBcIuauteiQvemFjeS/oeaBr1wiLCB0eXBlTmFtZTogXCLmrrXokL3phY3kv6Hmga9cIiwgZGltZW5zaW9uczogW1xuICAgICAgICAgICAgeyBuYW1lOiBcIuWFs+mUruivjeWIkuWIhlwiLCBpdGVtczogW1xuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuWlvVwiLCB0ZXh0OiBcIuWFs+mUruivjeWIkuWIhua4heaZsO+8jOato+ehrueOh+Wlve+8jOiDveivhuWIq+WQjOS5ieabv+aNolwiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5b6F5o+Q5Y2HXCIsIHRleHQ6IFwi5YWz6ZSu6K+N5YiS5YiG5LiN5ZCI55CG77yM5LiN5YW35pyJ6ZmQ5a6a5oSP5LmJ77yM5q2j56Gu546H5YGP5L2OXCIgfSxcbiAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgeyBuYW1lOiBcIuWQjOS5ieabv+aNolwiLCBpdGVtczogW1xuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuWlvVwiLCB0ZXh0OiBcIuivhuWIq+WQjOS5ieabv+aNoueahOiDveWKm+W8ulwiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5byxXCIsIHRleHQ6IFwi6K+G5Yir5ZCM5LmJ5pu/5o2i55qE6IO95Yqb6IO95o+Q6auYXCIgfSxcbiAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgeyBuYW1lOiBcIue7huiKguivhuWIq1wiLCBpdGVtczogW1xuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuWlvVwiLCB0ZXh0OiBcIue7huiKguS/oeaBr+ivhuWIq+WHhuehru+8jOmimOWei+eJueeCueaOjOaPoeWlvVwiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5b6F5o+Q5Y2HXCIsIHRleHQ6IFwi57uG6IqC5L+h5oGv6K+G5Yir6IO95Yqb6ZyA6KaB5o+Q6auYXCIgfSxcbiAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgeyBuYW1lOiBcIuWujOaIkOW6plwiLCBpdGVtczogW1xuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuWlvVwiLCB0ZXh0OiBcIuauteiQvemFjeS/oeaBr+WujOaIkOWlve+8jOato+ehrueOh+iJr+WlvVwiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5beuXCIsIHRleHQ6IFwi5q616JC96YWN5L+h5oGv5a6M5oiQ5bqm5LiN6auYXCIgfSxcbiAgICAgICAgICAgIF19LFxuICAgICAgICAgIF19LFxuICAgICAgICAgIHsgaGVhZGVyOiBcIuWNiuWPpeWMuemFjVwiLCB0eXBlTmFtZTogXCLljYrlj6XljLnphY1cIiwgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5aW9XCIsIHRleHQ6IFwi5Y2K5Y+l5Yy56YWN5a6M5oiQ5aW977yM6YC76L6R5YWz57O755CG6Kej5YeG56GuXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5byxXCIsIHRleHQ6IFwi5Y2K5Y+l5Yy56YWN5a6M5oiQ5bqm5LiN6auY77yM6YC76L6R5YWz57O755CG6Kej5pyJ5Zuw6Zq+XCIgfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLmrrXokL3moIfpopjljLnphY1cIiwgdHlwZU5hbWU6IFwi5q616JC95qCH6aKY5Yy56YWNXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuWlvVwiLCB0ZXh0OiBcIuauteiQvemFjeagh+mimOWujOaIkOWlve+8jOeVpeivu+iDveWKm+W8ulwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuW8sVwiLCB0ZXh0OiBcIuauteiQvemFjeagh+mimOWujOaIkOW6puS4jemrmO+8jOeVpeivu+amguaLrOS4u+aXqOamguaLrOiDveWKm+acieW+heaPkOmrmFwiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCJzdHUtc2tpbGxzXCIsXG4gICAgICAgIGxhYmVsOiBcIuaKgOW3p1wiLFxuICAgICAgICBncm91cHM6IFtcbiAgICAgICAgICB7IGhlYWRlcjogXCLlrprkvY3or43liJLliIZcIiwgdHlwZU5hbWU6IFwi5a6a5L2N6K+N5YiS5YiGXCIsIGRpbWVuc2lvbnM6IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCLnibnmroror43or4bliKtcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlpb1cIiwgdGV4dDogXCLnibnmroror43or4bliKvliKnnlKjog73lipvlvLpcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuW8sVwiLCB0ZXh0OiBcIueJueauiuivjeivhuWIq+WIqeeUqOiDveWKm+W8sVwiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCLpgInor43lkIjnkIbmgKdcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlkIjnkIZcIiwgdGV4dDogXCLpgInor43lkIjnkIbvvIzlrprkvY3lh4bnoa5cIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuS4jeWQiOeQhlwiLCB0ZXh0OiBcIumAieivjeS4jeWQiOeQhu+8jOWumuS9jeaViOaenOS4jeWlvVwiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLlhbPplK7or43liJLliIZcIiwgdHlwZU5hbWU6IFwi5YWz6ZSu6K+N5YiS5YiGXCIsIGRpbWVuc2lvbnM6IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCLliJLliIbotKjph49cIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlpb1cIiwgdGV4dDogXCLlhbPplK7or43liJLliIblkIjnkIbmuIXmmbBcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuaooeezilwiLCB0ZXh0OiBcIuWFs+mUruivjeWIkuWIhuaooeeziu+8jOS4jeWkn+eyvuWHhlwiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCLmib7lj4LnhafnialcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlpb1cIiwgdGV4dDogXCLmib7lj4Lnhafnianog73lipvlvLpcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuW8sVwiLCB0ZXh0OiBcIuaJvuWPgueFp+eJqeiDveWKm+W8sVwiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLmiavor7vmioDlt6dcIiwgdHlwZU5hbWU6IFwi5omr6K+75oqA5benXCIsIGRpbWVuc2lvbnM6IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCLpgJ/luqZcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlv6tcIiwgdGV4dDogXCLmiavor7vpgJ/luqblv6vvvIzmib7lhbPplK7or43og73lipvlvLpcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuaFolwiLCB0ZXh0OiBcIuaJq+ivu+mAn+W6puaFou+8jOmcgOimgeaPkOWNh1wiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCLmib7lhbPplK7or41cIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlvLpcIiwgdGV4dDogXCLmiavor7vmib7lhbPplK7or43og73lipvlvLpcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuW8sVwiLCB0ZXh0OiBcIuaJq+ivu+aJvuWFs+mUruivjeiDveWKm+W8sVwiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLnlaXor7vmioDlt6dcIiwgdHlwZU5hbWU6IFwi55Wl6K+75oqA5benXCIsIGRpbWVuc2lvbnM6IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCLmlrnms5Xmjozmj6FcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLmjozmj6Hlpb1cIiwgdGV4dDogXCLnlaXor7vmlrnms5Xmjozmj6Hlpb3vvIzog73lv6vpgJ/miormj6HkuLvml6hcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuW+heaPkOWNh1wiLCB0ZXh0OiBcIueVpeivu+aWueazleW+heaPkOWNh++8jOmYheivu+aViOeOh+S4jeWkn1wiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCLmgLvnu5PmpoLmi6xcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlvLpcIiwgdGV4dDogXCLmgLvnu5PmpoLmi6zog73lipvlvLpcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuW8sVwiLCB0ZXh0OiBcIuaAu+e7k+amguaLrOiDveWKm+W8se+8jOmcgOimgeWKoOW8ulwiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLlkIzkuYnmm7/mjaJcIiwgdHlwZU5hbWU6IFwi5ZCM5LmJ5pu/5o2iXCIsIGRpbWVuc2lvbnM6IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCLnroDljZXmm7/mjaJcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlpb1cIiwgdGV4dDogXCLnroDljZXmm7/mjaLor4bliKvog73lipvlvLpcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuW8sVwiLCB0ZXh0OiBcIueugOWNleabv+aNouivhuWIq+iDveWKm+W8sVwiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCLmlLnlhpnnsbvmm7/mjaJcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlpb1cIiwgdGV4dDogXCLmlLnlhpnnsbvmm7/mjaLor4bliKvog73lipvlvLpcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuW8sVwiLCB0ZXh0OiBcIuaUueWGmeexu+abv+aNouivhuWIq+iDveWKm+W8se+8jOWvuemrmOW6puaUueWGmeaVj+aEn1wiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCLpooTmtYvog73liptcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlvLpcIiwgdGV4dDogXCLlkIzkuYnmm7/mjaLpooTmtYvog73lipvlvLpcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuW8sVwiLCB0ZXh0OiBcIuWQjOS5ieabv+aNoumihOa1i+iDveWKm+W8sVwiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLplb/pmr7lj6XliIbmnpBcIiwgdHlwZU5hbWU6IFwi6ZW/6Zq+5Y+l5YiG5p6QXCIsIGRpbWVuc2lvbnM6IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCLkuLvlubLor4bliKtcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlpb1cIiwgdGV4dDogXCLog73or4bliKvplb/pmr7lj6XkuLvlubJcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuW8sVwiLCB0ZXh0OiBcIuS4jeWkqueQhuino+S4u+W5suamguW/tVwiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCLmlbTkvZPnkIbop6NcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlvLpcIiwgdGV4dDogXCLplb/pmr7lj6XnkIbop6Pog73lipvlvLpcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuWQg+WKm1wiLCB0ZXh0OiBcIumVv+mavuWPpeeQhuino+WQg+WKm++8jOmYheivu+acieWbsOmavlwiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5pyJ6L+b5q2lXCIsIHRleHQ6IFwi6ZW/6Zq+5Y+l55CG6Kej5pyJ6L+b5q2lXCIgfSxcbiAgICAgICAgICAgIF19LFxuICAgICAgICAgIF19LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwic3R1LW1hc3RlcnlcIixcbiAgICAgICAgbGFiZWw6IFwi5o6M5o+hXCIsXG4gICAgICAgIGdyb3VwczogW1xuICAgICAgICAgIHsgaGVhZGVyOiBcIuivreazleWfuuehgFwiLCB0eXBlTmFtZTogXCLor63ms5Xln7rnoYBcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi6L+H56GsXCIsIHRleHQ6IFwi6K+t5rOV6Z2e5bi46L+H56GsXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi566A5Y2V5Y+l5aW9XCIsIHRleHQ6IFwi566A5Y2V5Y+l55qE6K+t5rOV5o6M5o+h5b6X5b6I5aW9XCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5Z+656GA6JaE5byxXCIsIHRleHQ6IFwi6K+t5rOV5Z+656GA6JaE5byx77yM6ZyA6KaB5Yqg5by6XCIgfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLnv7vor5Hog73liptcIiwgdHlwZU5hbWU6IFwi57+76K+R6IO95YqbXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuWQg+WKm1wiLCB0ZXh0OiBcIue/u+ivkei1t+adpeWQg+WKm1wiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuaFolwiLCB0ZXh0OiBcIuWNleWPpee/u+ivkemcgOimgeaXtumXtOaAneiAg++8jOiAg+WcuuS4iuaXtumXtOS4jeWkn+eUqFwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuaciei/m+atpVwiLCB0ZXh0OiBcIue/u+ivkeiDveWKm+aciei/m+atpVwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIueCueWQjeWlvVwiLCB0ZXh0OiBcIueCueWQjeeahOe/u+ivkeWBmuW+l+W+iOWlvVwiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi6K+N5rGH6K+t5oSfXCIsIHR5cGVOYW1lOiBcIuivjeaxh+ivreaEn1wiLCBkaW1lbnNpb25zOiBbXG4gICAgICAgICAgICB7IG5hbWU6IFwi54yc6K+N6IO95YqbXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5aW9XCIsIHRleHQ6IFwi54yc6K+N5YGa5b6X5b6I5aW977yM5pyJ54K56K+t5oSfXCIgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlvLFcIiwgdGV4dDogXCLnjJzor43og73lipvlvLHvvIzor63mhJ/kuI3lpJ9cIiB9LFxuICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICB7IG5hbWU6IFwi6K+N5rGH5Z+656GAXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5omO5a6eXCIsIHRleHQ6IFwi6K+N5rGH5Z+656GA5omO5a6eXCIgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLoloTlvLFcIiwgdGV4dDogXCLor43msYfln7rnoYDkuI3lpJ/miY7lrp5cIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuaciei/m+atpVwiLCB0ZXh0OiBcIuivjeaxh+aOjOaPoeaciei/m+atpVwiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLni6znq4vnu4PkuaDooajnjrBcIiwgdHlwZU5hbWU6IFwi54us56uL57uD5Lmg6KGo546wXCIsIGRpbWVuc2lvbnM6IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCLpgJ/luqZcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlv6tcIiwgdGV4dDogXCLni6znq4vnu4PkuaDpgJ/luqblv6tcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuiJr+WlvVwiLCB0ZXh0OiBcIueLrOeri+e7g+S5oOmAn+W6puiJr+WlvVwiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5oWiXCIsIHRleHQ6IFwi54us56uL57uD5Lmg6YCf5bqm5YGP5oWiXCIgfSxcbiAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgeyBuYW1lOiBcIui0qOmHj1wiLCBpdGVtczogW1xuICAgICAgICAgICAgICB7IGxhYmVsOiBcIumrmFwiLCB0ZXh0OiBcIueLrOeri+e7g+S5oOi0qOmHj+mrmFwiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5LitXCIsIHRleHQ6IFwi54us56uL57uD5Lmg6LSo6YeP5Lit562JXCIgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLkvY5cIiwgdGV4dDogXCLni6znq4vnu4PkuaDotKjph4/lgY/kvY5cIiB9LFxuICAgICAgICAgICAgXX0sXG4gICAgICAgICAgXX0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCJzdHUtaW1wcm92ZVwiLFxuICAgICAgICBsYWJlbDogXCLpnIDliqDlvLpcIixcbiAgICAgICAgZ3JvdXBzOiBbXG4gICAgICAgICAgeyBoZWFkZXI6IFwi6K+N5rGHXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuWKoOW8uuiDjOivtVwiLCB0ZXh0OiBcIuivjeaxh+WfuuehgOS4jeWkn+aJjuWunu+8jOW7uuiuruWKoOW8uuWfuuehgOivjeaxh+iDjOivteW3qeWbulwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuWKoOW8uum7mOWGmVwiLCB0ZXh0OiBcIumcgOimgeiupOecn+WvueW+heivjeaxh+m7mOWGmVwiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi6K6t57uDXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIumZkOaXtuiuree7g1wiLCB0ZXh0OiBcIumZkOaXtuiuree7g+ato+ehrueOh+S9ju+8jOe8uuWwkemrmOWOi+iuree7g1wiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIumYheivu+mAn+W6plwiLCB0ZXh0OiBcIumYheivu+mAn+W6puWBj+aFou+8jOmcgOimgeWKoOW8uumZkOaXtuiuree7g1wiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi5Lmg5oOvXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuWBmumimOeXlei/uVwiLCB0ZXh0OiBcIuWFu+aIkOWBmumimOeXlei/ueeahOS5oOaDr1wiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuerr+ato+aAgeW6plwiLCB0ZXh0OiBcIuerr+ato+WtpuS5oOaAgeW6pu+8jOS9nOS4muimgeaMieaXtuWujOaIkFwiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi5oqA5benXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuWumuS9jeiDveWKm1wiLCB0ZXh0OiBcIuWumuS9jeiDveWKm+mcgOimgeWKoOW8ulwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuWQjOS5ieabv+aNolwiLCB0ZXh0OiBcIuWQjOS5ieabv+aNouivhuWIq+iDveWKm+mcgOimgeWKoOW8ulwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIumVv+mavuWPpVwiLCB0ZXh0OiBcIumVv+mavuWPpeeQhuino+iDveWKm+mcgOimgeWKoOW8ulwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuajgOafpeatpemqpFwiLCB0ZXh0OiBcIumcgOimgeacieajgOafpeatpemqpO+8jOmBv+WFjeeyl+W/g+mUmeivr1wiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi5LiT5rOo5YqbXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuS/neaMgeS4k+azqFwiLCB0ZXh0OiBcIumcgOimgeWcqOe7g+S5oOaXtuS/neaMgeS4k+azqO+8jOaPkOmrmOaViOeOh1wiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsSXRlbXMoKTogVGVtcGxhdGVJdGVtW10ge1xuICBjb25zdCBpdGVtczogVGVtcGxhdGVJdGVtW10gPSBbXTtcbiAgZmVlZGJhY2tUZW1wbGF0ZXMuZm9yRWFjaCgoY2F0KSA9PiB7XG4gICAgY2F0LnNlY3Rpb25zLmZvckVhY2goKHNlYykgPT4ge1xuICAgICAgc2VjLmdyb3Vwcy5mb3JFYWNoKChncnApID0+IHtcbiAgICAgICAgaWYgKGdycC5pdGVtcykge1xuICAgICAgICAgIGdycC5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtcy5wdXNoKGl0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ3JwLmRpbWVuc2lvbnMpIHtcbiAgICAgICAgICBncnAuZGltZW5zaW9ucy5mb3JFYWNoKChkaW0pID0+IHtcbiAgICAgICAgICAgIGRpbS5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtcy5wdXNoKGl0ZW0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ3JwLnN1Ymdyb3Vwcykge1xuICAgICAgICAgIGdycC5zdWJncm91cHMuZm9yRWFjaCgoc3ViKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3ViLmRpbWVuc2lvbnMpIHtcbiAgICAgICAgICAgICAgc3ViLmRpbWVuc2lvbnMuZm9yRWFjaCgoZGltKSA9PiB7XG4gICAgICAgICAgICAgICAgZGltLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW1zLnB1c2goaXRlbSkpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdWIuaXRlbXMpIHtcbiAgICAgICAgICAgICAgc3ViLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW1zLnB1c2goaXRlbSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBpdGVtcztcbn1cbiIsImltcG9ydCB7IEl0ZW1WaWV3LCBNYXJrZG93blZpZXcsIFdvcmtzcGFjZUxlYWYgfSBmcm9tICdvYnNpZGlhbic7XG5pbXBvcnQgVGV4dEluc2VydFBsdWdpbiBmcm9tICcuL21haW4nO1xuaW1wb3J0IHsgZmVlZGJhY2tUZW1wbGF0ZXMsIENhdGVnb3J5LCBTZWN0aW9uLCBEaXNwbGF5R3JvdXAsIEV2YWxEaW1lbnNpb24sIFN1Ykdyb3VwIH0gZnJvbSAnLi90ZW1wbGF0ZXMnO1xuXG5leHBvcnQgY29uc3QgU2lkZVBhbmVsQ29udHJvbFZpZXdUeXBlID0gJ2ZlZWRiYWNrLWFzc2lzdGFudC12aWV3JztcblxudHlwZSBBY3RpdmVWaWV3ID0ge1xuICBjYXRlZ29yeUlkeDogbnVtYmVyO1xuICBzZWN0aW9uSWR4OiBudW1iZXIgfCBudWxsO1xufTtcblxuZXhwb3J0IGNsYXNzIFNpZGVQYW5lbENvbnRyb2xWaWV3IGV4dGVuZHMgSXRlbVZpZXcge1xuICBwcml2YXRlIHBsdWdpbjogVGV4dEluc2VydFBsdWdpbjtcbiAgcHJpdmF0ZSBhY3RpdmU6IEFjdGl2ZVZpZXcgPSB7IGNhdGVnb3J5SWR4OiAwLCBzZWN0aW9uSWR4OiBudWxsIH07XG5cbiAgY29uc3RydWN0b3IobGVhZjogV29ya3NwYWNlTGVhZiwgcGx1Z2luOiBUZXh0SW5zZXJ0UGx1Z2luKSB7XG4gICAgc3VwZXIobGVhZik7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICBwdWJsaWMgZ2V0Vmlld1R5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gU2lkZVBhbmVsQ29udHJvbFZpZXdUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldERpc3BsYXlUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdGZWVkYmFjayBBc3Npc3RhbnQnO1xuICB9XG5cbiAgcHVibGljIGdldEljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ3ZpZXdJY29uJztcbiAgfVxuXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xuICAgIHN1cGVyLmxvYWQoKTtcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhdygpOiB2b2lkIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lckVsLmNoaWxkcmVuWzFdO1xuICAgIGNvbnN0IHJvb3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvb3RFbC5pZCA9ICdTaWRlUGFuZVJvb3RFbGVtZW50JztcbiAgICByb290RWwuc3R5bGUucGFkZGluZyA9ICc4cHgnO1xuXG4gICAgdGhpcy5kcmF3VG9wVGFicyhyb290RWwpO1xuXG4gICAgY29udGFpbmVyLmVtcHR5KCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJvb3RFbCk7XG4gIH1cblxuICBwcml2YXRlIGRyYXdUb3BUYWJzKHJvb3RFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YWJSb3cgPSByb290RWwuY3JlYXRlRGl2KCk7XG4gICAgdGFiUm93LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgdGFiUm93LnN0eWxlLmdhcCA9ICc0cHgnO1xuICAgIHRhYlJvdy5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnOHB4JztcblxuICAgIGZlZWRiYWNrVGVtcGxhdGVzLmZvckVhY2goKGNhdCwgaWR4KSA9PiB7XG4gICAgICBjb25zdCBidG4gPSB0YWJSb3cuY3JlYXRlRGl2KCk7XG4gICAgICBidG4uc3R5bGUuZmxleCA9ICcxJztcbiAgICAgIGJ0bi5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgIGJ0bi5zdHlsZS5wYWRkaW5nID0gJzhweCAwJztcbiAgICAgIGJ0bi5zdHlsZS5mb250U2l6ZSA9ICcxN3B4JztcbiAgICAgIGJ0bi5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgYnRuLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgIGJ0bi5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNnB4JztcbiAgICAgIGJ0bi5zZXRUZXh0KGNhdC5sYWJlbCk7XG5cbiAgICAgIGlmICh0aGlzLmFjdGl2ZS5jYXRlZ29yeUlkeCA9PT0gaWR4KSB7XG4gICAgICAgIGJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gJ3ZhcigtLWludGVyYWN0aXZlLWFjY2VudCknO1xuICAgICAgICBidG4uc3R5bGUuY29sb3IgPSAndmFyKC0tdGV4dC1vbi1hY2NlbnQpJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gJ3ZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItY292ZXIpJztcbiAgICAgICAgYnRuLnN0eWxlLmNvbG9yID0gJ3ZhcigtLXRleHQtbXV0ZWQpJztcbiAgICAgIH1cblxuICAgICAgYnRuLm9uQ2xpY2tFdmVudCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlLmNhdGVnb3J5SWR4ID0gaWR4O1xuICAgICAgICB0aGlzLmFjdGl2ZS5zZWN0aW9uSWR4ID0gbnVsbDtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZHJhd1N1YlRhYnMocm9vdEVsKTtcbiAgICB0aGlzLmRyYXdDb250ZW50KHJvb3RFbCk7XG4gIH1cblxuICBwcml2YXRlIGRyYXdTdWJUYWJzKHJvb3RFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjYXQgPSBmZWVkYmFja1RlbXBsYXRlc1t0aGlzLmFjdGl2ZS5jYXRlZ29yeUlkeF07XG4gICAgaWYgKCFjYXQpIHJldHVybjtcblxuICAgIGNvbnN0IHN1YlJvdyA9IHJvb3RFbC5jcmVhdGVEaXYoKTtcbiAgICBzdWJSb3cuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBzdWJSb3cuc3R5bGUuZmxleFdyYXAgPSAnd3JhcCc7XG4gICAgc3ViUm93LnN0eWxlLmdhcCA9ICc0cHgnO1xuICAgIHN1YlJvdy5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMTBweCc7XG5cbiAgICBjYXQuc2VjdGlvbnMuZm9yRWFjaCgoc2VjLCBpZHgpID0+IHtcbiAgICAgIGNvbnN0IGJ0biA9IHN1YlJvdy5jcmVhdGVEaXYoKTtcbiAgICAgIGJ0bi5zdHlsZS5wYWRkaW5nID0gJzRweCAxMHB4JztcbiAgICAgIGJ0bi5zdHlsZS5mb250U2l6ZSA9ICcxNHB4JztcbiAgICAgIGJ0bi5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICBidG4uc3R5bGUuYm9yZGVyUmFkaXVzID0gJzRweCc7XG4gICAgICBidG4uc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlciknO1xuICAgICAgYnRuLnNldFRleHQoc2VjLmxhYmVsKTtcblxuICAgICAgaWYgKHRoaXMuYWN0aXZlLnNlY3Rpb25JZHggPT09IGlkeCkge1xuICAgICAgICBidG4uc3R5bGUuYmFja2dyb3VuZCA9ICd2YXIoLS1pbnRlcmFjdGl2ZS1hY2NlbnQtaG92ZXIpJztcbiAgICAgICAgYnRuLnN0eWxlLmNvbG9yID0gJ3ZhcigtLXRleHQtb24tYWNjZW50KSc7XG4gICAgICAgIGJ0bi5zdHlsZS5mb250V2VpZ2h0ID0gJzYwMCc7XG4gICAgICAgIGJ0bi5zdHlsZS5ib3JkZXJDb2xvciA9ICd2YXIoLS1pbnRlcmFjdGl2ZS1hY2NlbnQpJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gJ3ZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KSc7XG4gICAgICAgIGJ0bi5zdHlsZS5jb2xvciA9ICd2YXIoLS10ZXh0LW11dGVkKSc7XG4gICAgICB9XG5cbiAgICAgIGJ0bi5vbkNsaWNrRXZlbnQoKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZS5zZWN0aW9uSWR4ID0gdGhpcy5hY3RpdmUuc2VjdGlvbklkeCA9PT0gaWR4ID8gbnVsbCA6IGlkeDtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd0NvbnRlbnQocm9vdEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGNhdCA9IGZlZWRiYWNrVGVtcGxhdGVzW3RoaXMuYWN0aXZlLmNhdGVnb3J5SWR4XTtcbiAgICBpZiAoIWNhdCkgcmV0dXJuO1xuXG4gICAgY29uc3Qgc2VjdGlvbnNUb1Nob3cgPSB0aGlzLmFjdGl2ZS5zZWN0aW9uSWR4ICE9PSBudWxsXG4gICAgICA/IFtjYXQuc2VjdGlvbnNbdGhpcy5hY3RpdmUuc2VjdGlvbklkeF1dXG4gICAgICA6IGNhdC5zZWN0aW9ucztcblxuICAgIHNlY3Rpb25zVG9TaG93LmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgIHNlY3Rpb24uZ3JvdXBzLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhd0dyb3VwKHJvb3RFbCwgZ3JvdXApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGRyYXdHcm91cChyb290RWw6IEhUTUxFbGVtZW50LCBncm91cDogRGlzcGxheUdyb3VwKTogdm9pZCB7XG4gICAgY29uc3QgaGVhZGVyUm93ID0gcm9vdEVsLmNyZWF0ZURpdigpO1xuICAgIGhlYWRlclJvdy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGhlYWRlclJvdy5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XG4gICAgaGVhZGVyUm93LnN0eWxlLnBhZGRpbmcgPSAnNnB4IDRweCA0cHgnO1xuICAgIGhlYWRlclJvdy5zdHlsZS5ib3JkZXJCb3R0b20gPSAnMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKSc7XG4gICAgaGVhZGVyUm93LnN0eWxlLm1hcmdpbkJvdHRvbSA9ICc0cHgnO1xuXG4gICAgY29uc3QgdGFnID0gaGVhZGVyUm93LmNyZWF0ZURpdigpO1xuICAgIHRhZy5zdHlsZS5iYWNrZ3JvdW5kID0gJ3ZhcigtLWludGVyYWN0aXZlLWFjY2VudCknO1xuICAgIHRhZy5zdHlsZS5jb2xvciA9ICd2YXIoLS10ZXh0LW9uLWFjY2VudCknO1xuICAgIHRhZy5zdHlsZS5mb250U2l6ZSA9ICcxNnB4JztcbiAgICB0YWcuc3R5bGUuZm9udFdlaWdodCA9ICc3MDAnO1xuICAgIHRhZy5zdHlsZS5wYWRkaW5nID0gJzNweCAxMHB4JztcbiAgICB0YWcuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzRweCc7XG4gICAgdGFnLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICB0YWcuc2V0VGV4dChncm91cC5oZWFkZXIpO1xuXG4gICAgdGFnLm9uQ2xpY2tFdmVudCgoKSA9PiB7XG4gICAgICBjb25zdCBpbnNlcnRUZXh0ID0gZ3JvdXAudHlwZU5hbWUgfHwgZ3JvdXAuaGVhZGVyO1xuICAgICAgdGhpcy5pbnNlcnRUZXh0KGluc2VydFRleHQpO1xuICAgIH0pO1xuXG4gICAgaWYgKGdyb3VwLnN1Ymdyb3Vwcykge1xuICAgICAgZ3JvdXAuc3ViZ3JvdXBzLmZvckVhY2goKHN1YiwgaWR4KSA9PiB7XG4gICAgICAgIGlmIChpZHggPiAwKSB7XG4gICAgICAgICAgY29uc3Qgc2VwID0gcm9vdEVsLmNyZWF0ZURpdigpO1xuICAgICAgICAgIHNlcC5zdHlsZS5ib3JkZXJUb3AgPSAnMXB4IGRhc2hlZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlciknO1xuICAgICAgICAgIHNlcC5zdHlsZS5tYXJnaW4gPSAnNnB4IDAnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhd1N1Ykdyb3VwKHJvb3RFbCwgc3ViKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChncm91cC5kaW1lbnNpb25zKSB7XG4gICAgICBsZXQgZmlyc3QgPSB0cnVlO1xuICAgICAgZ3JvdXAuZGltZW5zaW9ucy5mb3JFYWNoKChkaW0pID0+IHtcbiAgICAgICAgaWYgKCFmaXJzdCkge1xuICAgICAgICAgIGNvbnN0IHNlcCA9IHJvb3RFbC5jcmVhdGVEaXYoKTtcbiAgICAgICAgICBzZXAuc3R5bGUuYm9yZGVyVG9wID0gJzFweCBkYXNoZWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpJztcbiAgICAgICAgICBzZXAuc3R5bGUubWFyZ2luID0gJzRweCAwJztcbiAgICAgICAgfVxuICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRyYXdEaW1lbnNpb24ocm9vdEVsLCBkaW0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGdyb3VwLml0ZW1zKSB7XG4gICAgICBncm91cC5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhd0l0ZW1CdXR0b24ocm9vdEVsLCBpdGVtKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJvb3RFbC5jcmVhdGVEaXYoKS5zdHlsZS5oZWlnaHQgPSAnNnB4JztcbiAgfVxuXG4gIHByaXZhdGUgZHJhd1N1Ykdyb3VwKHJvb3RFbDogSFRNTEVsZW1lbnQsIHN1YjogU3ViR3JvdXApOiB2b2lkIHtcbiAgICBjb25zdCBzdWJIZWFkZXIgPSByb290RWwuY3JlYXRlRGl2KCk7XG4gICAgc3ViSGVhZGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgc3ViSGVhZGVyLnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcbiAgICBzdWJIZWFkZXIuc3R5bGUucGFkZGluZyA9ICc0cHggNHB4IDJweCA4cHgnO1xuXG4gICAgY29uc3Qgc3ViVGFnID0gc3ViSGVhZGVyLmNyZWF0ZURpdigpO1xuICAgIHN1YlRhZy5zdHlsZS5iYWNrZ3JvdW5kID0gJ3ZhcigtLWludGVyYWN0aXZlLWFjY2VudCknO1xuICAgIHN1YlRhZy5zdHlsZS5jb2xvciA9ICd2YXIoLS10ZXh0LW9uLWFjY2VudCknO1xuICAgIHN1YlRhZy5zdHlsZS5mb250U2l6ZSA9ICcxNXB4JztcbiAgICBzdWJUYWcuc3R5bGUuZm9udFdlaWdodCA9ICc2MDAnO1xuICAgIHN1YlRhZy5zdHlsZS5wYWRkaW5nID0gJzNweCAxMHB4JztcbiAgICBzdWJUYWcuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzRweCc7XG4gICAgc3ViVGFnLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICBzdWJUYWcuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgIHN1YlRhZy5zZXRUZXh0KHN1Yi5oZWFkZXIpO1xuXG4gICAgc3ViVGFnLm9uQ2xpY2tFdmVudCgoKSA9PiB7XG4gICAgICB0aGlzLmluc2VydFRleHQoc3ViLmhlYWRlcik7XG4gICAgfSk7XG5cbiAgICBpZiAoc3ViLmRpbWVuc2lvbnMpIHtcbiAgICAgIHN1Yi5kaW1lbnNpb25zLmZvckVhY2goKGRpbSkgPT4ge1xuICAgICAgICB0aGlzLmRyYXdEaW1lbnNpb24ocm9vdEVsLCBkaW0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN1Yi5pdGVtcykge1xuICAgICAgc3ViLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgdGhpcy5kcmF3SXRlbUJ1dHRvbihyb290RWwsIGl0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkcmF3RGltZW5zaW9uKHJvb3RFbDogSFRNTEVsZW1lbnQsIGRpbTogRXZhbERpbWVuc2lvbik6IHZvaWQge1xuICAgIGNvbnN0IGRpbVJvdyA9IHJvb3RFbC5jcmVhdGVEaXYoKTtcbiAgICBkaW1Sb3cuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBkaW1Sb3cuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xuICAgIGRpbVJvdy5zdHlsZS5wYWRkaW5nID0gJzJweCA0cHgnO1xuICAgIGRpbVJvdy5zdHlsZS5nYXAgPSAnNnB4JztcblxuICAgIGNvbnN0IGRpbUxhYmVsID0gZGltUm93LmNyZWF0ZURpdigpO1xuICAgIGRpbUxhYmVsLnN0eWxlLmZvbnRTaXplID0gJzE0cHgnO1xuICAgIGRpbUxhYmVsLnN0eWxlLmZvbnRXZWlnaHQgPSAnNTAwJztcbiAgICBkaW1MYWJlbC5zdHlsZS5jb2xvciA9ICd2YXIoLS10ZXh0LW5vcm1hbCknO1xuICAgIGRpbUxhYmVsLnN0eWxlLm1pbldpZHRoID0gZGltLm5hbWUgPyAnNzBweCcgOiAnMCc7XG4gICAgZGltTGFiZWwuc3R5bGUuZmxleFNocmluayA9ICcwJztcbiAgICBpZiAoZGltLm5hbWUpIHtcbiAgICAgIGRpbUxhYmVsLnNldFRleHQoZGltLm5hbWUgKyAnOicpO1xuICAgIH1cblxuICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRpbVJvdy5jcmVhdGVEaXYoKTtcbiAgICBidG5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBidG5Db250YWluZXIuc3R5bGUuZmxleFdyYXAgPSAnd3JhcCc7XG4gICAgYnRuQ29udGFpbmVyLnN0eWxlLmdhcCA9ICczcHgnO1xuICAgIGJ0bkNvbnRhaW5lci5zdHlsZS5mbGV4ID0gJzEnO1xuXG4gICAgZGltLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGJ0biA9IGJ0bkNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6ICduYXYtYWN0aW9uLWJ1dHRvbicgfSk7XG4gICAgICBidG4uc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICBidG4uc3R5bGUucGFkZGluZyA9ICc0cHggOHB4JztcbiAgICAgIGJ0bi5zdHlsZS5mb250U2l6ZSA9ICcxNHB4JztcbiAgICAgIGJ0bi5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICBidG4uc3R5bGUuYm9yZGVyUmFkaXVzID0gJzRweCc7XG4gICAgICBidG4uc3R5bGUud2hpdGVTcGFjZSA9ICdub3dyYXAnO1xuICAgICAgYnRuLmFwcGVuZFRleHQoaXRlbS5sYWJlbCk7XG5cbiAgICAgIGJ0bi5vbkNsaWNrRXZlbnQoKCkgPT4ge1xuICAgICAgICB0aGlzLmluc2VydFRleHQoaXRlbS50ZXh0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3SXRlbUJ1dHRvbihyb290RWw6IEhUTUxFbGVtZW50LCBpdGVtOiB7IGxhYmVsOiBzdHJpbmc7IHRleHQ6IHN0cmluZyB9KTogdm9pZCB7XG4gICAgY29uc3QgY29udGFpbmVycyA9IEFycmF5LmZyb20ocm9vdEVsLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcubmF2LWJ1dHRvbnMtY29udGFpbmVyJykpO1xuICAgIGxldCByb3c6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGNvbnRhaW5lcnMubGVuZ3RoID4gMFxuICAgICAgPyBjb250YWluZXJzW2NvbnRhaW5lcnMubGVuZ3RoIC0gMV1cbiAgICAgIDogbnVsbDtcbiAgICBpZiAoIXJvdyB8fCByb3cucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1hY3Rpb24tYnV0dG9uJykubGVuZ3RoID49IDQpIHtcbiAgICAgIHJvdyA9IHJvb3RFbC5jcmVhdGVEaXYoeyBjbHM6ICduYXYtYnV0dG9ucy1jb250YWluZXInIH0pO1xuICAgICAgcm93LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICByb3cuc3R5bGUuZmxleFdyYXAgPSAnd3JhcCc7XG4gICAgICByb3cuc3R5bGUuZ2FwID0gJzNweCc7XG4gICAgfVxuXG4gICAgY29uc3QgYnRuID0gcm93LmNyZWF0ZURpdih7IGNsczogJ25hdi1hY3Rpb24tYnV0dG9uJyB9KTtcbiAgICBidG4uc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgYnRuLnN0eWxlLnBhZGRpbmcgPSAnNXB4IDhweCc7XG4gICAgYnRuLnN0eWxlLmZvbnRTaXplID0gJzE1cHgnO1xuICAgIGJ0bi5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgYnRuLnN0eWxlLmJvcmRlclJhZGl1cyA9ICc0cHgnO1xuICAgIGJ0bi5zdHlsZS5mbGV4ID0gJzEgMSBhdXRvJztcbiAgICBidG4uc3R5bGUubWluV2lkdGggPSAnMCc7XG4gICAgYnRuLnN0eWxlLndoaXRlU3BhY2UgPSAnbm93cmFwJztcbiAgICBidG4uYXBwZW5kVGV4dChpdGVtLmxhYmVsKTtcblxuICAgIGJ0bi5vbkNsaWNrRXZlbnQoKCkgPT4ge1xuICAgICAgdGhpcy5pbnNlcnRUZXh0KGl0ZW0udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGluc2VydFRleHQodGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgbGVhZiA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRNb3N0UmVjZW50TGVhZigpO1xuICAgIGlmIChsZWFmICYmIGxlYWYudmlldyBpbnN0YW5jZW9mIE1hcmtkb3duVmlldykge1xuICAgICAgY29uc3QgZWRpdG9yID0gbGVhZi52aWV3LmVkaXRvcjtcbiAgICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKHRleHQpO1xuICAgICAgZWRpdG9yLmZvY3VzKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBBcHAsIEVkaXRvciwgU3VnZ2VzdE1vZGFsIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IHsgZ2V0QWxsSXRlbXMsIFRlbXBsYXRlSXRlbSB9IGZyb20gJy4vdGVtcGxhdGVzJztcblxuZXhwb3J0IGNsYXNzIENvZGVTdWdnZXN0aW9uTW9kYWwgZXh0ZW5kcyBTdWdnZXN0TW9kYWw8VGVtcGxhdGVJdGVtPiB7XG4gIHByaXZhdGUgZWRpdG9yOiBFZGl0b3I7XG5cbiAgcHVibGljIHNldEVkaXRvciA9IChlZGl0b3I6IEVkaXRvcikgPT4ge1xuICAgIHRoaXMuZWRpdG9yID0gZWRpdG9yO1xuICB9O1xuXG4gIGdldFN1Z2dlc3Rpb25zKHF1ZXJ5OiBzdHJpbmcpOiBUZW1wbGF0ZUl0ZW1bXSB7XG4gICAgY29uc3QgYWxsSXRlbXMgPSBnZXRBbGxJdGVtcygpO1xuICAgIGNvbnN0IGZpbHRlckZ1bmN0aW9uID0gKGl0ZW06IFRlbXBsYXRlSXRlbSkgPT5cbiAgICAgIGl0ZW0ubGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgaXRlbS50ZXh0LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKSk7XG4gICAgcmV0dXJuIGFsbEl0ZW1zLmZpbHRlcihmaWx0ZXJGdW5jdGlvbik7XG4gIH1cblxuICByZW5kZXJTdWdnZXN0aW9uKGl0ZW06IFRlbXBsYXRlSXRlbSwgZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3Qgcm93ID0gZWwuY3JlYXRlRWwoJ2RpdicpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdjb21tYW5kLWxpc3Qtdmlldy1yb3cnKTtcblxuICAgIGNvbnN0IGxhYmVsRGl2ID0gcm93LmNyZWF0ZURpdigpO1xuICAgIGxhYmVsRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbW1hbmQtbGlzdC12aWV3LXRleHQnKTtcbiAgICBsYWJlbERpdi5zdHlsZS5mb250V2VpZ2h0ID0gJzYwMCc7XG4gICAgbGFiZWxEaXYuc2V0VGV4dChpdGVtLmxhYmVsKTtcblxuICAgIGNvbnN0IHRleHREaXYgPSByb3cuY3JlYXRlRGl2KCk7XG4gICAgdGV4dERpdi5zdHlsZS5mb250U2l6ZSA9ICcxMnB4JztcbiAgICB0ZXh0RGl2LnN0eWxlLmNvbG9yID0gJ3ZhcigtLXRleHQtbXV0ZWQpJztcbiAgICB0ZXh0RGl2LnN0eWxlLnBhZGRpbmdUb3AgPSAnMnB4JztcbiAgICB0ZXh0RGl2LnNldFRleHQoaXRlbS50ZXh0KTtcbiAgfVxuXG4gIG9uQ2hvb3NlU3VnZ2VzdGlvbihpdGVtOiBUZW1wbGF0ZUl0ZW0sIGV2dDogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQpIHtcbiAgICB0aGlzLmVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGl0ZW0udGV4dCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRpc3BsYXkgPSAoYXBwOiBBcHAsIGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBuZXcgQ29kZVN1Z2dlc3Rpb25Nb2RhbChhcHApO1xuICAgIG1vZGFsLnNldEVkaXRvcihlZGl0b3IpO1xuICAgIG1vZGFsLm9wZW4oKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7XHJcbiAgQXBwLFxyXG4gIEVkaXRvcixcclxuICBNYXJrZG93blZpZXcsXHJcbiAgUGx1Z2luLFxyXG4gIFBsdWdpblNldHRpbmdUYWIsXHJcbiAgU2V0dGluZyxcclxufSBmcm9tICdvYnNpZGlhbic7XHJcblxyXG5pbXBvcnQgeyBhZGRJY29ucyB9IGZyb20gJy4vaWNvbnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBTaWRlUGFuZWxDb250cm9sVmlldyxcclxuICBTaWRlUGFuZWxDb250cm9sVmlld1R5cGUsXHJcbn0gZnJvbSAnLi9TaWRlUGFuZWxDb250cm9sVmlldyc7XHJcbmltcG9ydCB7IENvZGVTdWdnZXN0aW9uTW9kYWwgfSBmcm9tICcuL0NvbW1hbmRMaXN0Vmlldyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBsdWdpblNldHRpbmdzIHtcclxuICBzaWRlUGFuZVNpZGVMZWZ0OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBQbHVnaW5TZXR0aW5ncyA9IHtcclxuICBzaWRlUGFuZVNpZGVMZWZ0OiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRJbnNlcnRQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xyXG4gIHNldHRpbmdzOiBQbHVnaW5TZXR0aW5ncztcclxuICBwcml2YXRlIHNpZGVQYW5lbENvbnRyb2xWaWV3OiBTaWRlUGFuZWxDb250cm9sVmlldztcclxuXHJcbiAgYXN5bmMgb25sb2FkKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2xvYWRpbmcgdGV4dC1pbnNlcnQtcGx1Z2luJyk7XHJcblxyXG4gICAgYXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcclxuICAgIGFkZEljb25zKCk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlclZpZXcoU2lkZVBhbmVsQ29udHJvbFZpZXdUeXBlLCAobGVhZikgPT4ge1xyXG4gICAgICB0aGlzLnNpZGVQYW5lbENvbnRyb2xWaWV3ID0gbmV3IFNpZGVQYW5lbENvbnRyb2xWaWV3KGxlYWYsIHRoaXMpO1xyXG4gICAgICByZXR1cm4gdGhpcy5zaWRlUGFuZWxDb250cm9sVmlldztcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYWRkUmliYm9uSWNvbigndmlld0ljb24nLCAnT3BlbiBUZXh0IEluc2VydCBQYW5lbCcsICgpID0+IHtcclxuICAgICAgdGhpcy50b2dnbGVTaWRlUGFuZWxDb250cm9sVmlldygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgaWQ6ICdvcGVuLWNvbW1hbmQtc2VsZWN0b3InLFxyXG4gICAgICBuYW1lOiAnT3BlbiBDb21tYW5kIFNlbGVjdG9yJyxcclxuICAgICAgaG90a2V5czogW3sgbW9kaWZpZXJzOiBbJ0FsdCddLCBrZXk6ICdxJyB9XSxcclxuICAgICAgZWRpdG9yQ2FsbGJhY2s6IChlZGl0b3I6IEVkaXRvciwgdmlldzogTWFya2Rvd25WaWV3KSA9PiB7XHJcbiAgICAgICAgQ29kZVN1Z2dlc3Rpb25Nb2RhbC5kaXNwbGF5KHRoaXMuYXBwLCBlZGl0b3IpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBTZXR0aW5nc1RhYih0aGlzLmFwcCwgdGhpcykpO1xyXG4gIH1cclxuXHJcbiAgb251bmxvYWQoKSB7fVxyXG5cclxuICBhc3luYyBsb2FkU2V0dGluZ3MoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbihERUZBVUxUX1NFVFRJTkdTLCBhd2FpdCB0aGlzLmxvYWREYXRhKCkpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgc2F2ZVNldHRpbmdzKCkge1xyXG4gICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgdG9nZ2xlU2lkZVBhbmVsQ29udHJvbFZpZXcgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICB0aGlzLmFwcC53b3Jrc3BhY2UuZGV0YWNoTGVhdmVzT2ZUeXBlKFNpZGVQYW5lbENvbnRyb2xWaWV3VHlwZSk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3Muc2lkZVBhbmVTaWRlTGVmdCkge1xyXG4gICAgICBhd2FpdCB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVmdExlYWYoZmFsc2UpLnNldFZpZXdTdGF0ZSh7XHJcbiAgICAgICAgdHlwZTogU2lkZVBhbmVsQ29udHJvbFZpZXdUeXBlLFxyXG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhd2FpdCB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0UmlnaHRMZWFmKGZhbHNlKS5zZXRWaWV3U3RhdGUoe1xyXG4gICAgICAgIHR5cGU6IFNpZGVQYW5lbENvbnRyb2xWaWV3VHlwZSxcclxuICAgICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXBwLndvcmtzcGFjZS5yZXZlYWxMZWFmKFxyXG4gICAgICB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFNpZGVQYW5lbENvbnRyb2xWaWV3VHlwZSlbMF0sXHJcbiAgICApO1xyXG4gIH07XHJcbn1cclxuXHJcbmNsYXNzIFNldHRpbmdzVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XHJcbiAgcGx1Z2luOiBUZXh0SW5zZXJ0UGx1Z2luO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBUZXh0SW5zZXJ0UGx1Z2luKSB7XHJcbiAgICBzdXBlcihhcHAsIHBsdWdpbik7XHJcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcclxuICB9XHJcblxyXG4gIGFzeW5jIGRpc3BsYXkoKSB7XHJcbiAgICBsZXQgeyBjb250YWluZXJFbCB9ID0gdGhpcztcclxuXHJcbiAgICBjb250YWluZXJFbC5lbXB0eSgpO1xyXG5cclxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMicsIHtcclxuICAgICAgdGV4dDogJ1RleHQgSW5zZXJ0IFBsdWdpbiBTZXR0aW5ncycsXHJcbiAgICB9KTtcclxuXHJcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgLnNldE5hbWUoJ1NpZGUgUGFuZSBTaWRlJylcclxuICAgICAgLnNldERlc2MoJ0Nob29zZSBvbiB3aGljaCBzaWRlIHRoZSBTaWRlIFBhbmUgYXBwZWFycy4nKVxyXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cclxuICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJ0VudGVyIGxlZnQgb3IgcmlnaHQnKVxyXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpZGVQYW5lU2lkZUxlZnQgPyAnbGVmdCcgOiAncmlnaHQnKVxyXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaWRlUGFuZVNpZGVMZWZ0ID1cclxuICAgICAgICAgICAgICB2YWx1ZSA9PT0gJ2xlZnQnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiYWRkSWNvbiIsIk1hcmtkb3duVmlldyIsIkl0ZW1WaWV3IiwiU3VnZ2VzdE1vZGFsIiwiUGx1Z2luIiwiU2V0dGluZyIsIlBsdWdpblNldHRpbmdUYWIiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNuQyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYztBQUN6QyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDcEYsUUFBUSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDMUcsSUFBSSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBQ0Y7QUFDTyxTQUFTLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2hDLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxVQUFVLElBQUksQ0FBQyxLQUFLLElBQUk7QUFDN0MsUUFBUSxNQUFNLElBQUksU0FBUyxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyxDQUFDO0FBQ2xHLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QixJQUFJLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUMzQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekYsQ0FBQztBQXVDRDtBQUNPLFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRTtBQUM3RCxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sS0FBSyxZQUFZLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNoSCxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMvRCxRQUFRLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDbkcsUUFBUSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDdEcsUUFBUSxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDdEgsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUUsS0FBSyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQ0Q7QUFDTyxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzNDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNySCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdKLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDdEUsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDdEIsUUFBUSxJQUFJLENBQUMsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDdEUsUUFBUSxPQUFPLENBQUMsRUFBRSxJQUFJO0FBQ3RCLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekssWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BELFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3pCLGdCQUFnQixLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNO0FBQzlDLGdCQUFnQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFDeEUsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7QUFDakUsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVM7QUFDakUsZ0JBQWdCO0FBQ2hCLG9CQUFvQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFO0FBQ2hJLG9CQUFvQixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQzFHLG9CQUFvQixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUU7QUFDekYsb0JBQW9CLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUN2RixvQkFBb0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVM7QUFDM0MsYUFBYTtBQUNiLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNsRSxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDekYsS0FBSztBQUNMOztBQ3ZHQSxJQUFNLFFBQVEsR0FBRyw2UUFHUixDQUFDO0FBRUgsSUFBTSxLQUFLLEdBQTJCO0FBQzNDLElBQUEsUUFBUSxFQUFBLFFBQUE7Q0FDVCxDQUFDO0FBRUssSUFBTSxRQUFRLEdBQUcsWUFBQTtJQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBQTtRQUM3QkEsZ0JBQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDM0IsS0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDOztBQ3NCTSxJQUFNLGlCQUFpQixHQUFlO0FBQzNDLElBQUE7QUFDRSxRQUFBLEVBQUUsRUFBRSxPQUFPO0FBQ1gsUUFBQSxLQUFLLEVBQUUsSUFBSTtBQUNYLFFBQUEsUUFBUSxFQUFFO0FBQ1IsWUFBQTtBQUNFLGdCQUFBLEVBQUUsRUFBRSxrQkFBa0I7QUFDdEIsZ0JBQUEsS0FBSyxFQUFFLElBQUk7QUFDWCxnQkFBQSxNQUFNLEVBQUU7QUFDTixvQkFBQSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ3JCLDRCQUFBLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO0FBQ3JDLDRCQUFBLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0FBQ2pDLDRCQUFBLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0FBQ3RDLDRCQUFBLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0FBQ2pDLDRCQUFBLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7QUFDekMsNEJBQUEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7QUFDakMsNEJBQUEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRTt5QkFDM0MsRUFBQztBQUNILGlCQUFBO0FBQ0YsYUFBQTtBQUNELFlBQUE7QUFDRSxnQkFBQSxFQUFFLEVBQUUsa0JBQWtCO0FBQ3RCLGdCQUFBLEtBQUssRUFBRSxJQUFJO0FBQ1gsZ0JBQUEsTUFBTSxFQUFFO29CQUNOLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtBQUMxQyw0QkFBQSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ25CLG9DQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO0FBQ3JDLG9DQUFBLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0FBQ3BDLG9DQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0FBQ25DLG9DQUFBLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO2lDQUNyQyxFQUFDO0FBQ0YsNEJBQUEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUNuQixvQ0FBQSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFO0FBQzdDLG9DQUFBLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7QUFDNUMsb0NBQUEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7aUNBQ3ZDLEVBQUM7eUJBQ0gsRUFBQztBQUNILGlCQUFBO0FBQ0YsYUFBQTtBQUNELFlBQUE7QUFDRSxnQkFBQSxFQUFFLEVBQUUsa0JBQWtCO0FBQ3RCLGdCQUFBLEtBQUssRUFBRSxNQUFNO0FBQ2IsZ0JBQUEsTUFBTSxFQUFFO29CQUNOLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRTtBQUM5Qyw0QkFBQSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ25CLG9DQUFBLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsNkJBQTZCLEVBQUU7QUFDcEQsb0NBQUEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSw0QkFBNEIsRUFBRTtBQUNuRCxvQ0FBQSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLGtDQUFrQyxFQUFFO2lDQUMxRCxFQUFDO0FBQ0YsNEJBQUEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUNuQixvQ0FBQSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFO0FBQy9DLG9DQUFBLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7aUNBQ3pDLEVBQUM7eUJBQ0gsRUFBQztBQUNILGlCQUFBO0FBQ0YsYUFBQTtBQUNELFlBQUE7QUFDRSxnQkFBQSxFQUFFLEVBQUUsbUJBQW1CO0FBQ3ZCLGdCQUFBLEtBQUssRUFBRSxNQUFNO0FBQ2IsZ0JBQUEsTUFBTSxFQUFFO29CQUNOLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRTtBQUM5Qyw0QkFBQSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ25CLG9DQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7QUFDdEMsb0NBQUEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRTtpQ0FDM0MsRUFBQztBQUNGLDRCQUFBLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDbkIsb0NBQUEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRTtBQUN4QyxvQ0FBQSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFO2lDQUN6QyxFQUFDO3lCQUNILEVBQUM7QUFDSCxpQkFBQTtBQUNGLGFBQUE7QUFDRCxZQUFBO0FBQ0UsZ0JBQUEsRUFBRSxFQUFFLGdCQUFnQjtBQUNwQixnQkFBQSxLQUFLLEVBQUUsTUFBTTtBQUNiLGdCQUFBLE1BQU0sRUFBRTtBQUNOLG9CQUFBLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7QUFDdkIsNEJBQUEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7QUFDdkMsNEJBQUEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7QUFDekMsNEJBQUEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRTtBQUMvQyw0QkFBQSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTt5QkFDMUMsRUFBQztBQUNILGlCQUFBO0FBQ0YsYUFBQTtBQUNELFlBQUE7QUFDRSxnQkFBQSxFQUFFLEVBQUUsZ0JBQWdCO0FBQ3BCLGdCQUFBLEtBQUssRUFBRSxNQUFNO0FBQ2IsZ0JBQUEsTUFBTSxFQUFFO0FBQ04sb0JBQUEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUN2Qiw0QkFBQSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFO0FBQzFDLDRCQUFBLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7QUFDNUMsNEJBQUEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRTt5QkFDaEQsRUFBQztBQUNILGlCQUFBO0FBQ0YsYUFBQTtBQUNGLFNBQUE7QUFDRixLQUFBO0FBQ0QsSUFBQTtBQUNFLFFBQUEsRUFBRSxFQUFFLFNBQVM7QUFDYixRQUFBLEtBQUssRUFBRSxJQUFJO0FBQ1gsUUFBQSxRQUFRLEVBQUU7QUFDUixZQUFBO0FBQ0UsZ0JBQUEsRUFBRSxFQUFFLGdCQUFnQjtBQUNwQixnQkFBQSxLQUFLLEVBQUUsSUFBSTtBQUNYLGdCQUFBLE1BQU0sRUFBRTtBQUNOLG9CQUFBLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDckIsNEJBQUEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7QUFDdEMsNEJBQUEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7QUFDbEMsNEJBQUEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7QUFDN0IsNEJBQUEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7eUJBQ3RDLEVBQUM7QUFDSCxpQkFBQTtBQUNGLGFBQUE7QUFDRCxZQUFBO0FBQ0UsZ0JBQUEsRUFBRSxFQUFFLG1CQUFtQjtBQUN2QixnQkFBQSxLQUFLLEVBQUUsS0FBSztBQUNaLGdCQUFBLE1BQU0sRUFBRTtvQkFDTixFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7QUFDNUMsNEJBQUEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUNuQixvQ0FBQSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtBQUNuQyxvQ0FBQSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtBQUNoQyxvQ0FBQSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtpQ0FDaEMsRUFBQztBQUNGLDRCQUFBLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDbkIsb0NBQUEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRTtBQUM5QyxvQ0FBQSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFO0FBQzdDLG9DQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7aUNBQ3pDLEVBQUM7eUJBQ0gsRUFBQztBQUNILGlCQUFBO0FBQ0YsYUFBQTtBQUNELFlBQUE7QUFDRSxnQkFBQSxFQUFFLEVBQUUsaUJBQWlCO0FBQ3JCLGdCQUFBLEtBQUssRUFBRSxNQUFNO0FBQ2IsZ0JBQUEsTUFBTSxFQUFFO0FBQ04sb0JBQUEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtBQUN0Qiw0QkFBQSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO0FBQ3hDLDRCQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO0FBQ3BDLDRCQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO0FBQ3BDLDRCQUFBLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO0FBQ3ZDLDRCQUFBLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO3lCQUN4QyxFQUFDO0FBQ0Ysb0JBQUEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUN2Qiw0QkFBQSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFO0FBQzdDLDRCQUFBLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO0FBQ3JDLDRCQUFBLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0FBQ3BDLDRCQUFBLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0FBQ3JDLDRCQUFBLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0FBQ25DLDRCQUFBLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO3lCQUNqQyxFQUFDO0FBQ0Ysb0JBQUEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUN2Qiw0QkFBQSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO0FBQ3hDLDRCQUFBLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUU7QUFDNUMsNEJBQUEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRTtBQUN6Qyw0QkFBQSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO0FBQzFDLDRCQUFBLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUU7eUJBQzlDLEVBQUM7QUFDSCxpQkFBQTtBQUNGLGFBQUE7QUFDRCxZQUFBO0FBQ0UsZ0JBQUEsRUFBRSxFQUFFLGNBQWM7QUFDbEIsZ0JBQUEsS0FBSyxFQUFFLElBQUk7QUFDWCxnQkFBQSxNQUFNLEVBQUU7b0JBQ04sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFO0FBQzdDLDRCQUFBLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7QUFDNUIsb0NBQUEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRTtBQUNqQiw0Q0FBQSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtBQUNoQyw0Q0FBQSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFO0FBQzNDLDRDQUFBLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUU7QUFDNUMsNENBQUEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRTt5Q0FDekMsRUFBQztpQ0FDSCxFQUFDO0FBQ0YsNEJBQUEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRTtBQUM1QixvQ0FBQSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFO0FBQ2pCLDRDQUFBLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0FBQ3RDLDRDQUFBLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO3lDQUNoQyxFQUFDO2lDQUNILEVBQUM7QUFDRiw0QkFBQSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFO0FBQzdCLG9DQUFBLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUU7QUFDakIsNENBQUEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7QUFDN0IsNENBQUEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7eUNBQ3RDLEVBQUM7aUNBQ0gsRUFBQzt5QkFDSCxFQUFDO0FBQ0Ysb0JBQUEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUN2Qiw0QkFBQSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtBQUNuQyw0QkFBQSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFO0FBQ3pDLDRCQUFBLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7eUJBQzFDLEVBQUM7QUFDRixvQkFBQSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQ3ZCLDRCQUFBLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0FBQ3BDLDRCQUFBLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7QUFDMUMsNEJBQUEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7eUJBQ3hDLEVBQUM7QUFDSCxpQkFBQTtBQUNGLGFBQUE7QUFDRCxZQUFBO0FBQ0UsZ0JBQUEsRUFBRSxFQUFFLGVBQWU7QUFDbkIsZ0JBQUEsS0FBSyxFQUFFLElBQUk7QUFDWCxnQkFBQSxNQUFNLEVBQUU7b0JBQ04sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO0FBQzNDLDRCQUFBLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7QUFDMUIsb0NBQUEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRTtBQUNqQiw0Q0FBQSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO0FBQ3ZDLDRDQUFBLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7eUNBQzFDLEVBQUM7aUNBQ0gsRUFBQztBQUNGLDRCQUFBLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7QUFDMUIsb0NBQUEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRTtBQUNqQiw0Q0FBQSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTt5Q0FDdEMsRUFBQztpQ0FDSCxFQUFDO0FBQ0YsNEJBQUEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRTtBQUM1QixvQ0FBQSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFO0FBQ2pCLDRDQUFBLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO0FBQ3JDLDRDQUFBLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7eUNBQ3pDLEVBQUM7aUNBQ0gsRUFBQztBQUNGLDRCQUFBLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7QUFDNUIsb0NBQUEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUNyQiw0Q0FBQSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtBQUMvQiw0Q0FBQSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTt5Q0FDcEMsRUFBQztpQ0FDSCxFQUFDO0FBQ0YsNEJBQUEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRTtBQUM1QixvQ0FBQSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFO0FBQ2pCLDRDQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7QUFDdEMsNENBQUEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRTt5Q0FDeEMsRUFBQztpQ0FDSCxFQUFDO0FBQ0YsNEJBQUEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRTtBQUM1QixvQ0FBQSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQ3JCLDRDQUFBLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7QUFDekMsNENBQUEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7QUFDeEMsNENBQUEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRTt5Q0FDaEQsRUFBQztBQUNGLG9DQUFBLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDcEIsNENBQUEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7QUFDaEMsNENBQUEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7eUNBQ2xDLEVBQUM7QUFDRixvQ0FBQSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQ3JCLDRDQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0FBQ25DLDRDQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO3lDQUNwQyxFQUFDO2lDQUNILEVBQUM7QUFDRiw0QkFBQSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFO0FBQzVCLG9DQUFBLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDcEIsNENBQUEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7QUFDOUIsNENBQUEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7eUNBQ3BDLEVBQUM7aUNBQ0gsRUFBQzt5QkFDSCxFQUFDO29CQUNGLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtBQUM1Qyw0QkFBQSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQ3JCLG9DQUFBLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO0FBQ3JDLG9DQUFBLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0FBQ2hDLG9DQUFBLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO2lDQUN0QyxFQUFDO0FBQ0YsNEJBQUEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRTtBQUN4QixvQ0FBQSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtBQUNsQyxvQ0FBQSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFO2lDQUMzQyxFQUFDO0FBQ0YsNEJBQUEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUNyQixvQ0FBQSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtBQUNwQyxvQ0FBQSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFO2lDQUN6QyxFQUFDO0FBQ0YsNEJBQUEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUNyQixvQ0FBQSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtBQUM3QixvQ0FBQSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtpQ0FDcEMsRUFBQztBQUNGLDRCQUFBLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7QUFDckIsb0NBQUEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRTtpQ0FDL0MsRUFBQzt5QkFDSCxFQUFDO29CQUNGLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtBQUM1Qyw0QkFBQSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQ3BCLG9DQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7QUFDdEMsb0NBQUEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7aUNBQ3RDLEVBQUM7QUFDRiw0QkFBQSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQ3BCLG9DQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7QUFDdEMsb0NBQUEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7aUNBQ3RDLEVBQUM7QUFDRiw0QkFBQSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQ3JCLG9DQUFBLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0FBQ25DLG9DQUFBLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO2lDQUNyQyxFQUFDO3lCQUNILEVBQUM7b0JBQ0YsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQzNDLDRCQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7QUFDekMsNEJBQUEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRTt5QkFDM0MsRUFBQztvQkFDRixFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUU7QUFDaEQsNEJBQUEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUN0QixvQ0FBQSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFO0FBQzVDLG9DQUFBLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUU7aUNBQ2pELEVBQUM7QUFDRiw0QkFBQSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQ3JCLG9DQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0FBQ2xDLG9DQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO2lDQUNyQyxFQUFDO0FBQ0YsNEJBQUEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUNyQixvQ0FBQSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO0FBQ3hDLG9DQUFBLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO2lDQUN2QyxFQUFDO0FBQ0YsNEJBQUEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtBQUNwQixvQ0FBQSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO0FBQ3RDLG9DQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO2lDQUNuQyxFQUFDO3lCQUNILEVBQUM7b0JBQ0YsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQ3pDLDRCQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7QUFDeEMsNEJBQUEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRTt5QkFDNUMsRUFBQztvQkFDRixFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7QUFDN0MsNEJBQUEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtBQUN0Qyw0QkFBQSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLDJCQUEyQixFQUFFO3lCQUNsRCxFQUFDO0FBQ0gsaUJBQUE7QUFDRixhQUFBO0FBQ0QsWUFBQTtBQUNFLGdCQUFBLEVBQUUsRUFBRSxZQUFZO0FBQ2hCLGdCQUFBLEtBQUssRUFBRSxJQUFJO0FBQ1gsZ0JBQUEsTUFBTSxFQUFFO29CQUNOLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRTtBQUNoRCw0QkFBQSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ3RCLG9DQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0FBQ2xDLG9DQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO2lDQUNuQyxFQUFDO0FBQ0YsNEJBQUEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUN0QixvQ0FBQSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtBQUNsQyxvQ0FBQSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTtpQ0FDdkMsRUFBQzt5QkFDSCxFQUFDO29CQUNGLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRTtBQUNoRCw0QkFBQSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQ3JCLG9DQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0FBQ2pDLG9DQUFBLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO2lDQUN0QyxFQUFDO0FBQ0YsNEJBQUEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUNyQixvQ0FBQSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtBQUMvQixvQ0FBQSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtpQ0FDaEMsRUFBQzt5QkFDSCxFQUFDO29CQUNGLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRTtBQUM5Qyw0QkFBQSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ25CLG9DQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO0FBQ3JDLG9DQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO2lDQUNuQyxFQUFDO0FBQ0YsNEJBQUEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUNyQixvQ0FBQSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtBQUNqQyxvQ0FBQSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtpQ0FDbEMsRUFBQzt5QkFDSCxFQUFDO29CQUNGLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRTtBQUM5Qyw0QkFBQSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQ3JCLG9DQUFBLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7QUFDekMsb0NBQUEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtpQ0FDekMsRUFBQztBQUNGLDRCQUFBLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7QUFDckIsb0NBQUEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7QUFDL0Isb0NBQUEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7aUNBQ3JDLEVBQUM7eUJBQ0gsRUFBQztvQkFDRixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7QUFDOUMsNEJBQUEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUNyQixvQ0FBQSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtBQUNqQyxvQ0FBQSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtpQ0FDbEMsRUFBQztBQUNGLDRCQUFBLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFDdEIsb0NBQUEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7QUFDbEMsb0NBQUEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRTtpQ0FDM0MsRUFBQztBQUNGLDRCQUFBLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7QUFDckIsb0NBQUEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7QUFDakMsb0NBQUEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7aUNBQ2xDLEVBQUM7eUJBQ0gsRUFBQztvQkFDRixFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUU7QUFDaEQsNEJBQUEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUNyQixvQ0FBQSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtBQUNoQyxvQ0FBQSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtpQ0FDakMsRUFBQztBQUNGLDRCQUFBLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7QUFDckIsb0NBQUEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7QUFDaEMsb0NBQUEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7QUFDdEMsb0NBQUEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7aUNBQ25DLEVBQUM7eUJBQ0gsRUFBQztBQUNILGlCQUFBO0FBQ0YsYUFBQTtBQUNELFlBQUE7QUFDRSxnQkFBQSxFQUFFLEVBQUUsYUFBYTtBQUNqQixnQkFBQSxLQUFLLEVBQUUsSUFBSTtBQUNYLGdCQUFBLE1BQU0sRUFBRTtvQkFDTixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7QUFDekMsNEJBQUEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7QUFDL0IsNEJBQUEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7QUFDdEMsNEJBQUEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7eUJBQ3ZDLEVBQUM7b0JBQ0YsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQ3pDLDRCQUFBLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0FBQy9CLDRCQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUU7QUFDM0MsNEJBQUEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7QUFDakMsNEJBQUEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7eUJBQ3BDLEVBQUM7b0JBQ0YsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFO0FBQzlDLDRCQUFBLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7QUFDckIsb0NBQUEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7QUFDbkMsb0NBQUEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7aUNBQ25DLEVBQUM7QUFDRiw0QkFBQSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQ3JCLG9DQUFBLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0FBQy9CLG9DQUFBLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0FBQ2pDLG9DQUFBLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO2lDQUNsQyxFQUFDO3lCQUNILEVBQUM7b0JBQ0YsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFO0FBQ2xELDRCQUFBLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDbkIsb0NBQUEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7QUFDL0Isb0NBQUEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7QUFDakMsb0NBQUEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7aUNBQ2pDLEVBQUM7QUFDRiw0QkFBQSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ25CLG9DQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0FBQy9CLG9DQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0FBQ2hDLG9DQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2lDQUNqQyxFQUFDO3lCQUNILEVBQUM7QUFDSCxpQkFBQTtBQUNGLGFBQUE7QUFDRCxZQUFBO0FBQ0UsZ0JBQUEsRUFBRSxFQUFFLGFBQWE7QUFDakIsZ0JBQUEsS0FBSyxFQUFFLEtBQUs7QUFDWixnQkFBQSxNQUFNLEVBQUU7QUFDTixvQkFBQSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ3JCLDRCQUFBLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUU7QUFDaEQsNEJBQUEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7eUJBQ3RDLEVBQUM7QUFDRixvQkFBQSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ3JCLDRCQUFBLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7QUFDMUMsNEJBQUEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRTt5QkFDM0MsRUFBQztBQUNGLG9CQUFBLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDckIsNEJBQUEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7QUFDcEMsNEJBQUEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTt5QkFDMUMsRUFBQztBQUNGLG9CQUFBLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDckIsNEJBQUEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7QUFDbkMsNEJBQUEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7QUFDdkMsNEJBQUEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7QUFDckMsNEJBQUEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTt5QkFDMUMsRUFBQztBQUNGLG9CQUFBLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDdEIsNEJBQUEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRTt5QkFDM0MsRUFBQztBQUNILGlCQUFBO0FBQ0YsYUFBQTtBQUNGLFNBQUE7QUFDRixLQUFBO0NBQ0YsQ0FBQztTQUVjLFdBQVcsR0FBQTtJQUN6QixJQUFNLEtBQUssR0FBbUIsRUFBRSxDQUFDO0FBQ2pDLElBQUEsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFBO0FBQzVCLFFBQUEsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUE7QUFDdkIsWUFBQSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBQTtnQkFDckIsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFO0FBQ2Isb0JBQUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUssRUFBQSxPQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQWhCLEVBQWdCLENBQUMsQ0FBQztBQUMvQyxpQkFBQTtnQkFDRCxJQUFJLEdBQUcsQ0FBQyxVQUFVLEVBQUU7QUFDbEIsb0JBQUEsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUE7QUFDekIsd0JBQUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUssRUFBQSxPQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQWhCLEVBQWdCLENBQUMsQ0FBQztBQUNoRCxxQkFBQyxDQUFDLENBQUM7QUFDSixpQkFBQTtnQkFDRCxJQUFJLEdBQUcsQ0FBQyxTQUFTLEVBQUU7QUFDakIsb0JBQUEsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUE7d0JBQ3hCLElBQUksR0FBRyxDQUFDLFVBQVUsRUFBRTtBQUNsQiw0QkFBQSxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBQTtBQUN6QixnQ0FBQSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBSyxFQUFBLE9BQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBaEIsRUFBZ0IsQ0FBQyxDQUFDO0FBQ2hELDZCQUFDLENBQUMsQ0FBQztBQUNKLHlCQUFBO3dCQUNELElBQUksR0FBRyxDQUFDLEtBQUssRUFBRTtBQUNiLDRCQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFLLEVBQUEsT0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFoQixFQUFnQixDQUFDLENBQUM7QUFDL0MseUJBQUE7QUFDSCxxQkFBQyxDQUFDLENBQUM7QUFDSixpQkFBQTtBQUNILGFBQUMsQ0FBQyxDQUFDO0FBQ0wsU0FBQyxDQUFDLENBQUM7QUFDTCxLQUFDLENBQUMsQ0FBQztBQUNILElBQUEsT0FBTyxLQUFLLENBQUM7QUFDZjs7QUM3Z0JPLElBQU0sd0JBQXdCLEdBQUcseUJBQXlCLENBQUM7QUFPbEUsSUFBQSxvQkFBQSxrQkFBQSxVQUFBLE1BQUEsRUFBQTtJQUEwQyxTQUFRLENBQUEsb0JBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQTtJQUloRCxTQUFZLG9CQUFBLENBQUEsSUFBbUIsRUFBRSxNQUF3QixFQUFBO1FBQXpELElBQ0UsS0FBQSxHQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUEsSUFBQSxFQUFNLElBQUksQ0FBQyxJQUVaLElBQUEsQ0FBQTtRQUxPLEtBQU0sQ0FBQSxNQUFBLEdBQWUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUloRSxRQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztLQUN0QjtBQUVNLElBQUEsb0JBQUEsQ0FBQSxTQUFBLENBQUEsV0FBVyxHQUFsQixZQUFBO0FBQ0UsUUFBQSxPQUFPLHdCQUF3QixDQUFDO0tBQ2pDLENBQUE7QUFFTSxJQUFBLG9CQUFBLENBQUEsU0FBQSxDQUFBLGNBQWMsR0FBckIsWUFBQTtBQUNFLFFBQUEsT0FBTyxvQkFBb0IsQ0FBQztLQUM3QixDQUFBO0FBRU0sSUFBQSxvQkFBQSxDQUFBLFNBQUEsQ0FBQSxPQUFPLEdBQWQsWUFBQTtBQUNFLFFBQUEsT0FBTyxVQUFVLENBQUM7S0FDbkIsQ0FBQTtBQUVNLElBQUEsb0JBQUEsQ0FBQSxTQUFBLENBQUEsSUFBSSxHQUFYLFlBQUE7UUFDRSxNQUFNLENBQUEsU0FBQSxDQUFBLElBQUksV0FBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ2IsQ0FBQTtBQUVPLElBQUEsb0JBQUEsQ0FBQSxTQUFBLENBQUEsSUFBSSxHQUFaLFlBQUE7UUFDRSxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdDLFFBQUEsTUFBTSxDQUFDLEVBQUUsR0FBRyxxQkFBcUIsQ0FBQztBQUNsQyxRQUFBLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUU3QixRQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFekIsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2xCLFFBQUEsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMvQixDQUFBO0lBRU8sb0JBQVcsQ0FBQSxTQUFBLENBQUEsV0FBQSxHQUFuQixVQUFvQixNQUFtQixFQUFBO1FBQXZDLElBa0NDLEtBQUEsR0FBQSxJQUFBLENBQUE7QUFqQ0MsUUFBQSxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDbEMsUUFBQSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDOUIsUUFBQSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDekIsUUFBQSxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7QUFFbEMsUUFBQSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFBO0FBQ2pDLFlBQUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQy9CLFlBQUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ3JCLFlBQUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0FBQy9CLFlBQUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQzVCLFlBQUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO0FBQzVCLFlBQUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO0FBQzlCLFlBQUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO0FBQzdCLFlBQUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0FBQy9CLFlBQUEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFdkIsWUFBQSxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxLQUFLLEdBQUcsRUFBRTtBQUNuQyxnQkFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRywyQkFBMkIsQ0FBQztBQUNuRCxnQkFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyx1QkFBdUIsQ0FBQztBQUMzQyxhQUFBO0FBQU0saUJBQUE7QUFDTCxnQkFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxrQ0FBa0MsQ0FBQztBQUMxRCxnQkFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQztBQUN2QyxhQUFBO1lBRUQsR0FBRyxDQUFDLFlBQVksQ0FBQyxZQUFBO0FBQ2YsZ0JBQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO0FBQzlCLGdCQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDOUIsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2QsYUFBQyxDQUFDLENBQUM7QUFDTCxTQUFDLENBQUMsQ0FBQztBQUVILFFBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN6QixRQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDMUIsQ0FBQTtJQUVPLG9CQUFXLENBQUEsU0FBQSxDQUFBLFdBQUEsR0FBbkIsVUFBb0IsTUFBbUIsRUFBQTtRQUF2QyxJQWtDQyxLQUFBLEdBQUEsSUFBQSxDQUFBO1FBakNDLElBQU0sR0FBRyxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdkQsUUFBQSxJQUFJLENBQUMsR0FBRztZQUFFLE9BQU87QUFFakIsUUFBQSxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDbEMsUUFBQSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDOUIsUUFBQSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7QUFDL0IsUUFBQSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDekIsUUFBQSxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7UUFFbkMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFBO0FBQzVCLFlBQUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQy9CLFlBQUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO0FBQy9CLFlBQUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO0FBQzVCLFlBQUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO0FBQzdCLFlBQUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0FBQy9CLFlBQUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsNkNBQTZDLENBQUM7QUFDakUsWUFBQSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUV2QixZQUFBLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEtBQUssR0FBRyxFQUFFO0FBQ2xDLGdCQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLGlDQUFpQyxDQUFDO0FBQ3pELGdCQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLHVCQUF1QixDQUFDO0FBQzFDLGdCQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztBQUM3QixnQkFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRywyQkFBMkIsQ0FBQztBQUNyRCxhQUFBO0FBQU0saUJBQUE7QUFDTCxnQkFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyw2QkFBNkIsQ0FBQztBQUNyRCxnQkFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQztBQUN2QyxhQUFBO1lBRUQsR0FBRyxDQUFDLFlBQVksQ0FBQyxZQUFBO2dCQUNmLEtBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxLQUFLLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO2dCQUNyRSxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDZCxhQUFDLENBQUMsQ0FBQztBQUNMLFNBQUMsQ0FBQyxDQUFDO0tBQ0osQ0FBQTtJQUVPLG9CQUFXLENBQUEsU0FBQSxDQUFBLFdBQUEsR0FBbkIsVUFBb0IsTUFBbUIsRUFBQTtRQUF2QyxJQWFDLEtBQUEsR0FBQSxJQUFBLENBQUE7UUFaQyxJQUFNLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3ZELFFBQUEsSUFBSSxDQUFDLEdBQUc7WUFBRSxPQUFPO1FBRWpCLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxLQUFLLElBQUk7QUFDcEQsY0FBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN4QyxjQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUM7QUFFakIsUUFBQSxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFBO0FBQzdCLFlBQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLEVBQUE7QUFDM0IsZ0JBQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDaEMsYUFBQyxDQUFDLENBQUM7QUFDTCxTQUFDLENBQUMsQ0FBQztLQUNKLENBQUE7QUFFTyxJQUFBLG9CQUFBLENBQUEsU0FBQSxDQUFBLFNBQVMsR0FBakIsVUFBa0IsTUFBbUIsRUFBRSxLQUFtQixFQUFBO1FBQTFELElBc0RDLEtBQUEsR0FBQSxJQUFBLENBQUE7QUFyREMsUUFBQSxJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDckMsUUFBQSxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDakMsUUFBQSxTQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7QUFDdEMsUUFBQSxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7QUFDeEMsUUFBQSxTQUFTLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyw2Q0FBNkMsQ0FBQztBQUM3RSxRQUFBLFNBQVMsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztBQUVyQyxRQUFBLElBQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNsQyxRQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLDJCQUEyQixDQUFDO0FBQ25ELFFBQUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsdUJBQXVCLENBQUM7QUFDMUMsUUFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7QUFDNUIsUUFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFDN0IsUUFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7QUFDL0IsUUFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7QUFDL0IsUUFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7QUFDN0IsUUFBQSxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUxQixHQUFHLENBQUMsWUFBWSxDQUFDLFlBQUE7WUFDZixJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDbEQsWUFBQSxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzlCLFNBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQ25CLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBQTtnQkFDL0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO0FBQ1gsb0JBQUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQy9CLG9CQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLDhDQUE4QyxDQUFDO0FBQ3JFLG9CQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztBQUM1QixpQkFBQTtBQUNELGdCQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLGFBQUMsQ0FBQyxDQUFDO0FBQ0osU0FBQTtRQUVELElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLE9BQUssR0FBRyxJQUFJLENBQUM7QUFDakIsWUFBQSxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBQTtnQkFDM0IsSUFBSSxDQUFDLE9BQUssRUFBRTtBQUNWLG9CQUFBLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUMvQixvQkFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyw4Q0FBOEMsQ0FBQztBQUNyRSxvQkFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7QUFDNUIsaUJBQUE7Z0JBQ0QsT0FBSyxHQUFHLEtBQUssQ0FBQztBQUNkLGdCQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2xDLGFBQUMsQ0FBQyxDQUFDO0FBQ0osU0FBQTtRQUVELElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtBQUNmLFlBQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUE7QUFDdkIsZ0JBQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDcEMsYUFBQyxDQUFDLENBQUM7QUFDSixTQUFBO1FBRUQsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0tBQ3pDLENBQUE7QUFFTyxJQUFBLG9CQUFBLENBQUEsU0FBQSxDQUFBLFlBQVksR0FBcEIsVUFBcUIsTUFBbUIsRUFBRSxHQUFhLEVBQUE7UUFBdkQsSUFnQ0MsS0FBQSxHQUFBLElBQUEsQ0FBQTtBQS9CQyxRQUFBLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNyQyxRQUFBLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUNqQyxRQUFBLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztBQUN0QyxRQUFBLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLGlCQUFpQixDQUFDO0FBRTVDLFFBQUEsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ3JDLFFBQUEsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsMkJBQTJCLENBQUM7QUFDdEQsUUFBQSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyx1QkFBdUIsQ0FBQztBQUM3QyxRQUFBLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztBQUMvQixRQUFBLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztBQUNoQyxRQUFBLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztBQUNsQyxRQUFBLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztBQUNsQyxRQUFBLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztBQUN0QyxRQUFBLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztBQUNoQyxRQUFBLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTNCLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBQTtBQUNsQixZQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzlCLFNBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxHQUFHLENBQUMsVUFBVSxFQUFFO0FBQ2xCLFlBQUEsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUE7QUFDekIsZ0JBQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDbEMsYUFBQyxDQUFDLENBQUM7QUFDSixTQUFBO1FBRUQsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFO0FBQ2IsWUFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBQTtBQUNyQixnQkFBQSxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNwQyxhQUFDLENBQUMsQ0FBQztBQUNKLFNBQUE7S0FDRixDQUFBO0FBRU8sSUFBQSxvQkFBQSxDQUFBLFNBQUEsQ0FBQSxhQUFhLEdBQXJCLFVBQXNCLE1BQW1CLEVBQUUsR0FBa0IsRUFBQTtRQUE3RCxJQXFDQyxLQUFBLEdBQUEsSUFBQSxDQUFBO0FBcENDLFFBQUEsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ2xDLFFBQUEsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQzlCLFFBQUEsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO0FBQ25DLFFBQUEsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0FBQ2pDLFFBQUEsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBRXpCLFFBQUEsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ3BDLFFBQUEsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO0FBQ2pDLFFBQUEsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0FBQ2xDLFFBQUEsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsb0JBQW9CLENBQUM7QUFDNUMsUUFBQSxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sR0FBRyxHQUFHLENBQUM7QUFDbEQsUUFBQSxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO1lBQ1osUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ2xDLFNBQUE7QUFFRCxRQUFBLElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUN4QyxRQUFBLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUNwQyxRQUFBLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztBQUNyQyxRQUFBLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztBQUMvQixRQUFBLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUU5QixRQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFBO0FBQ3JCLFlBQUEsSUFBTSxHQUFHLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7QUFDakUsWUFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7QUFDL0IsWUFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7QUFDOUIsWUFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7QUFDNUIsWUFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7QUFDN0IsWUFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7QUFDL0IsWUFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7QUFDaEMsWUFBQSxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUzQixHQUFHLENBQUMsWUFBWSxDQUFDLFlBQUE7QUFDZixnQkFBQSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3QixhQUFDLENBQUMsQ0FBQztBQUNMLFNBQUMsQ0FBQyxDQUFDO0tBQ0osQ0FBQTtBQUVPLElBQUEsb0JBQUEsQ0FBQSxTQUFBLENBQUEsY0FBYyxHQUF0QixVQUF1QixNQUFtQixFQUFFLElBQXFDLEVBQUE7UUFBakYsSUEwQkMsS0FBQSxHQUFBLElBQUEsQ0FBQTtBQXpCQyxRQUFBLElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFjLHdCQUF3QixDQUFDLENBQUMsQ0FBQztBQUM5RixRQUFBLElBQUksR0FBRyxHQUF1QixVQUFVLENBQUMsTUFBTSxHQUFHLENBQUM7Y0FDL0MsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2NBQ2pDLElBQUksQ0FBQztBQUNULFFBQUEsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2xFLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLHVCQUF1QixFQUFFLENBQUMsQ0FBQztBQUN6RCxZQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUMzQixZQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztBQUM1QixZQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztBQUN2QixTQUFBO0FBRUQsUUFBQSxJQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQztBQUN4RCxRQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztBQUMvQixRQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztBQUM5QixRQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztBQUM1QixRQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztBQUM3QixRQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztBQUMvQixRQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztBQUM1QixRQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztBQUN6QixRQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztBQUNoQyxRQUFBLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTNCLEdBQUcsQ0FBQyxZQUFZLENBQUMsWUFBQTtBQUNmLFlBQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsU0FBQyxDQUFDLENBQUM7S0FDSixDQUFBO0lBRU8sb0JBQVUsQ0FBQSxTQUFBLENBQUEsVUFBQSxHQUFsQixVQUFtQixJQUFZLEVBQUE7UUFDN0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztBQUNwRCxRQUFBLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLFlBQVlDLHFCQUFZLEVBQUU7QUFDN0MsWUFBQSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUNoQyxZQUFBLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDaEIsU0FBQTtLQUNGLENBQUE7SUFDSCxPQUFDLG9CQUFBLENBQUE7QUFBRCxDQWxTQSxDQUEwQ0MsaUJBQVEsQ0FrU2pELENBQUE7O0FDMVNELElBQUEsbUJBQUEsa0JBQUEsVUFBQSxNQUFBLEVBQUE7SUFBeUMsU0FBMEIsQ0FBQSxtQkFBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBO0FBQW5FLElBQUEsU0FBQSxtQkFBQSxHQUFBO1FBQUEsSUF3Q0MsS0FBQSxHQUFBLE1BQUEsS0FBQSxJQUFBLElBQUEsTUFBQSxDQUFBLEtBQUEsQ0FBQSxJQUFBLEVBQUEsU0FBQSxDQUFBLElBQUEsSUFBQSxDQUFBO1FBckNRLEtBQVMsQ0FBQSxTQUFBLEdBQUcsVUFBQyxNQUFjLEVBQUE7QUFDaEMsWUFBQSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUN2QixTQUFDLENBQUM7O0tBbUNIO0lBakNDLG1CQUFjLENBQUEsU0FBQSxDQUFBLGNBQUEsR0FBZCxVQUFlLEtBQWEsRUFBQTtBQUMxQixRQUFBLElBQU0sUUFBUSxHQUFHLFdBQVcsRUFBRSxDQUFDO1FBQy9CLElBQU0sY0FBYyxHQUFHLFVBQUMsSUFBa0IsRUFBQTtBQUN4QyxZQUFBLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3RELGdCQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFBO0FBRHJELFNBQ3FELENBQUM7QUFDeEQsUUFBQSxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7S0FDeEMsQ0FBQTtBQUVELElBQUEsbUJBQUEsQ0FBQSxTQUFBLENBQUEsZ0JBQWdCLEdBQWhCLFVBQWlCLElBQWtCLEVBQUUsRUFBZSxFQUFBO1FBQ2xELElBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0IsUUFBQSxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBRTNDLFFBQUEsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ2pDLFFBQUEsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUNqRCxRQUFBLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztBQUNsQyxRQUFBLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRTdCLFFBQUEsSUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ2hDLFFBQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO0FBQ2hDLFFBQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUM7QUFDMUMsUUFBQSxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFDakMsUUFBQSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM1QixDQUFBO0FBRUQsSUFBQSxtQkFBQSxDQUFBLFNBQUEsQ0FBQSxrQkFBa0IsR0FBbEIsVUFBbUIsSUFBa0IsRUFBRSxHQUErQixFQUFBO1FBQ3BFLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pDLENBQUE7QUFFYSxJQUFBLG1CQUFBLENBQUEsT0FBTyxHQUFHLFVBQUMsR0FBUSxFQUFFLE1BQWMsRUFBQTtBQUMvQyxRQUFBLElBQU0sS0FBSyxHQUFHLElBQUksbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0MsUUFBQSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNmLEtBQUMsQ0FBQztJQUNKLE9BQUMsbUJBQUEsQ0FBQTtDQUFBLENBeEN3Q0MscUJBQVksQ0F3Q3BELENBQUE7O0FDdEJELElBQU0sZ0JBQWdCLEdBQW1CO0FBQ3ZDLElBQUEsZ0JBQWdCLEVBQUUsS0FBSztDQUN4QixDQUFDO0FBRUYsSUFBQSxnQkFBQSxrQkFBQSxVQUFBLE1BQUEsRUFBQTtJQUE4QyxTQUFNLENBQUEsZ0JBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQTtBQUFwRCxJQUFBLFNBQUEsZ0JBQUEsR0FBQTtRQUFBLElBNERDLEtBQUEsR0FBQSxNQUFBLEtBQUEsSUFBQSxJQUFBLE1BQUEsQ0FBQSxLQUFBLENBQUEsSUFBQSxFQUFBLFNBQUEsQ0FBQSxJQUFBLElBQUEsQ0FBQTtBQW5Ca0IsUUFBQSxLQUFBLENBQUEsMEJBQTBCLEdBQUcsWUFBQSxFQUFBLE9BQUEsU0FBQSxDQUFBLEtBQUEsRUFBQSxLQUFBLENBQUEsRUFBQSxLQUFBLENBQUEsRUFBQSxZQUFBOzs7O3dCQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBRTVELHdCQUFBLElBQUEsQ0FBQSxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUE5QixPQUE4QixDQUFBLENBQUEsWUFBQSxDQUFBLENBQUEsQ0FBQTtBQUNoQyx3QkFBQSxPQUFBLENBQUEsQ0FBQSxZQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUM7QUFDdkQsZ0NBQUEsSUFBSSxFQUFFLHdCQUF3QjtBQUM5QixnQ0FBQSxNQUFNLEVBQUUsSUFBSTtBQUNiLDZCQUFBLENBQUMsQ0FBQSxDQUFBOztBQUhGLHdCQUFBLEVBQUEsQ0FBQSxJQUFBLEVBR0UsQ0FBQzs7QUFFSCxvQkFBQSxLQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsQ0FBQSxZQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUM7QUFDeEQsNEJBQUEsSUFBSSxFQUFFLHdCQUF3QjtBQUM5Qiw0QkFBQSxNQUFNLEVBQUUsSUFBSTtBQUNiLHlCQUFBLENBQUMsQ0FBQSxDQUFBOztBQUhGLHdCQUFBLEVBQUEsQ0FBQSxJQUFBLEVBR0UsQ0FBQzs7O3dCQUdMLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ2hFLENBQUM7Ozs7YUFDSCxDQUFDOztLQUNIO0FBeERPLElBQUEsZ0JBQUEsQ0FBQSxTQUFBLENBQUEsTUFBTSxHQUFaLFlBQUE7Ozs7OztBQUNFLHdCQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztBQUUxQyx3QkFBQSxPQUFBLENBQUEsQ0FBQSxZQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQSxDQUFBOztBQUF6Qix3QkFBQSxFQUFBLENBQUEsSUFBQSxFQUF5QixDQUFDO0FBQzFCLHdCQUFBLFFBQVEsRUFBRSxDQUFDO0FBRVgsd0JBQUEsSUFBSSxDQUFDLFlBQVksQ0FBQyx3QkFBd0IsRUFBRSxVQUFDLElBQUksRUFBQTs0QkFDL0MsS0FBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksb0JBQW9CLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxDQUFDOzRCQUNqRSxPQUFPLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQztBQUNuQyx5QkFBQyxDQUFDLENBQUM7QUFFSCx3QkFBQSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSx3QkFBd0IsRUFBRSxZQUFBOzRCQUN2RCxLQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztBQUNwQyx5QkFBQyxDQUFDLENBQUM7d0JBRUgsSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUNkLDRCQUFBLEVBQUUsRUFBRSx1QkFBdUI7QUFDM0IsNEJBQUEsSUFBSSxFQUFFLHVCQUF1QjtBQUM3Qiw0QkFBQSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUMzQyw0QkFBQSxjQUFjLEVBQUUsVUFBQyxNQUFjLEVBQUUsSUFBa0IsRUFBQTtnQ0FDakQsbUJBQW1CLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7NkJBQy9DO0FBQ0YseUJBQUEsQ0FBQyxDQUFDO0FBRUgsd0JBQUEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7Ozs7O0FBQ3JELEtBQUEsQ0FBQTtJQUVELGdCQUFRLENBQUEsU0FBQSxDQUFBLFFBQUEsR0FBUixlQUFhLENBQUE7QUFFUCxJQUFBLGdCQUFBLENBQUEsU0FBQSxDQUFBLFlBQVksR0FBbEIsWUFBQTs7Ozs7O0FBQ0Usd0JBQUEsRUFBQSxHQUFBLElBQUksQ0FBQTtBQUFZLHdCQUFBLEVBQUEsR0FBQSxDQUFBLEVBQUEsR0FBQSxNQUFNLEVBQUMsTUFBTSxDQUFBOzhCQUFDLGdCQUFnQixDQUFBLENBQUE7QUFBRSx3QkFBQSxPQUFBLENBQUEsQ0FBQSxZQUFNLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQSxDQUFBOztBQUFyRSx3QkFBQSxFQUFBLENBQUssUUFBUSxHQUFHLEVBQWdDLENBQUEsS0FBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsRUFBcUIsR0FBQyxDQUFDOzs7OztBQUN4RSxLQUFBLENBQUE7QUFFSyxJQUFBLGdCQUFBLENBQUEsU0FBQSxDQUFBLFlBQVksR0FBbEIsWUFBQTs7Ozs0QkFDRSxPQUFNLENBQUEsQ0FBQSxZQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUE7O0FBQWxDLHdCQUFBLEVBQUEsQ0FBQSxJQUFBLEVBQWtDLENBQUM7Ozs7O0FBQ3BDLEtBQUEsQ0FBQTtJQXFCSCxPQUFDLGdCQUFBLENBQUE7QUFBRCxDQTVEQSxDQUE4Q0MsZUFBTSxDQTREbkQsRUFBQTtBQUVELElBQUEsV0FBQSxrQkFBQSxVQUFBLE1BQUEsRUFBQTtJQUEwQixTQUFnQixDQUFBLFdBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQTtJQUd4QyxTQUFZLFdBQUEsQ0FBQSxHQUFRLEVBQUUsTUFBd0IsRUFBQTtBQUE5QyxRQUFBLElBQUEsS0FBQSxHQUNFLE1BQU0sQ0FBQSxJQUFBLENBQUEsSUFBQSxFQUFBLEdBQUcsRUFBRSxNQUFNLENBQUMsSUFFbkIsSUFBQSxDQUFBO0FBREMsUUFBQSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs7S0FDdEI7QUFFSyxJQUFBLFdBQUEsQ0FBQSxTQUFBLENBQUEsT0FBTyxHQUFiLFlBQUE7Ozs7O2dCQUNRLFdBQVcsR0FBSyxJQUFJLENBQUEsV0FBVCxDQUFVO2dCQUUzQixXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFcEIsZ0JBQUEsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7QUFDekIsb0JBQUEsSUFBSSxFQUFFLDZCQUE2QjtBQUNwQyxpQkFBQSxDQUFDLENBQUM7Z0JBRUgsSUFBSUMsZ0JBQU8sQ0FBQyxXQUFXLENBQUM7cUJBQ3JCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztxQkFDekIsT0FBTyxDQUFDLDZDQUE2QyxDQUFDO3FCQUN0RCxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUE7QUFDWixvQkFBQSxPQUFBLElBQUk7eUJBQ0QsY0FBYyxDQUFDLHFCQUFxQixDQUFDO0FBQ3JDLHlCQUFBLFFBQVEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLEdBQUcsT0FBTyxDQUFDO3lCQUNsRSxRQUFRLENBQUMsVUFBTyxLQUFLLEVBQUEsRUFBQSxPQUFBLFNBQUEsQ0FBQSxLQUFBLEVBQUEsS0FBQSxDQUFBLEVBQUEsS0FBQSxDQUFBLEVBQUEsWUFBQTs7OztBQUNwQixvQ0FBQSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0I7d0NBQ25DLEtBQUssS0FBSyxNQUFNLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztBQUNsQyxvQ0FBQSxPQUFBLENBQUEsQ0FBQSxZQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUEsQ0FBQTs7QUFBaEMsb0NBQUEsRUFBQSxDQUFBLElBQUEsRUFBZ0MsQ0FBQzs7Ozt5QkFDbEMsQ0FBQyxDQUFBO0FBUEosaUJBT0ksQ0FDTCxDQUFDOzs7O0FBQ0wsS0FBQSxDQUFBO0lBQ0gsT0FBQyxXQUFBLENBQUE7QUFBRCxDQS9CQSxDQUEwQkMseUJBQWdCLENBK0J6QyxDQUFBOzs7OyJ9
