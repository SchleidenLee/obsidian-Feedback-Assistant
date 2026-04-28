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
                    { header: "填空", typeName: "填空", items: [
                            { label: "注意词数", text: "注意词数限制" },
                            { label: "词数好", text: "严格遵循词数限制" },
                            { label: "违反词数", text: "出现词数限制违反的情况" },
                            { label: "词性预测好", text: "词性预测合理，有意识" },
                            { label: "词性错误", text: "出现词性错误" },
                        ] },
                    { header: "表头定位", typeName: "表格填空", items: [
                            { label: "好", text: "表头定位能力强" },
                            { label: "弱", text: "表头定位能力弱，容易混淆" },
                        ] },
                    { header: "单句语法", typeName: "单句填空", items: [
                            { label: "好", text: "简单句语法掌握好" },
                            { label: "弱", text: "语法基础薄弱，需要加强" },
                        ] },
                    { header: "笔记填空", typeName: "笔记填空", items: [
                            { label: "好", text: "笔记填空完成好，信息捕捉准确" },
                            { label: "弱", text: "笔记填空完成度不高，信息遗漏多" },
                        ] },
                    { header: "摘要填空", typeName: "摘要填空", dimensions: [
                            { name: "整体表现", items: [
                                    { label: "全对", text: "摘要填空全对，段落理解能力强" },
                                    { label: "正确率好", text: "摘要填空正确率好，掌握度好" },
                                    { label: "力不从心", text: "对高度改写的摘要填空力不从心，正确率不理想" },
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
                    { header: "地图/流程图", typeName: "地图/流程图填空", dimensions: [
                            { name: "方位词", items: [
                                    { label: "好", text: "方位词掌握好" },
                                    { label: "薄弱", text: "方位词薄弱，需要加强" },
                                ] },
                            { name: "流程图", items: [
                                    { label: "好", text: "流程图理解能力强" },
                                    { label: "有困难", text: "流程图理解有困难" },
                                ] },
                        ] },
                    { header: "判断", typeName: "判断", dimensions: [
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
                            { name: "定位", items: [
                                    { label: "好", text: "定位能力强" },
                                    { label: "不足", text: "定位能力不足导致错误" },
                                ] },
                            { name: "做题痕迹", items: [
                                    { label: "无痕迹全对", text: "没有做题痕迹但全对了，要注意养成习惯" },
                                ] },
                        ] },
                    { header: "选择", typeName: "选择", dimensions: [
                            { name: "细节题", items: [
                                    { label: "好", text: "细节题做得好，能抓住关键信息" },
                                    { label: "弱", text: "细节题正确率偏低，需要加强" },
                                ] },
                            { name: "主旨题", items: [
                                    { label: "好", text: "主旨题做得好，能把握文章中心" },
                                    { label: "弱", text: "主旨题正确率偏低，需要加强" },
                                ] },
                            { name: "题型区分", items: [
                                    { label: "清晰", text: "能区分细节题和主旨题" },
                                    { label: "混淆", text: "细节题和主旨题容易混淆" },
                                ] },
                        ] },
                    { header: "人名配信息", typeName: "人名配信息", items: [
                            { label: "好", text: "人名配信息完成好，细节信息识别准确" },
                            { label: "弱", text: "人名配信息完成度不高" },
                        ] },
                    { header: "段落配信息", typeName: "段落配信息", dimensions: [
                            { name: "关键词划分", items: [
                                    { label: "好", text: "关键词划分清晰，正确率好，能识别同义替换" },
                                    { label: "待提升", text: "关键词选的不好，不具有限定意义，正确率偏低" },
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
                    { header: "标题匹配", typeName: "段落标题匹配", items: [
                            { label: "好", text: "段落配标题完成好，概括能力强" },
                            { label: "弱", text: "段落配标题完成度不高，概括能力有待提高" },
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
                            { name: "选词", items: [
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
                    { header: "扫读", typeName: "扫读", dimensions: [
                            { name: "速度", items: [
                                    { label: "快", text: "扫读速度快，找关键词能力强" },
                                    { label: "慢", text: "扫读速度慢，需要提升" },
                                ] },
                            { name: "找关键词", items: [
                                    { label: "强", text: "扫读找关键词能力强" },
                                    { label: "弱", text: "扫读找关键词能力弱" },
                                ] },
                        ] },
                    { header: "略读", typeName: "略读", dimensions: [
                            { name: "方法", items: [
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
                            { name: "预测", items: [
                                    { label: "强", text: "同义替换预测能力强" },
                                    { label: "弱", text: "同义替换预测能力弱" },
                                ] },
                        ] },
                    { header: "长难句", typeName: "长难句", dimensions: [
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
                    { header: "语法", typeName: "语法", items: [
                            { label: "过硬", text: "语法非常过硬" },
                            { label: "简单句好", text: "简单句的语法掌握得很好" },
                            { label: "基础薄弱", text: "语法基础薄弱，需要加强" },
                        ] },
                    { header: "独立练习", items: [
                            { label: "出色", text: "独立练习完成出色，时间和正确率都很棒" },
                            { label: "有进步", text: "独立练习有很大进步，正确率保持高水平" },
                            { label: "良好", text: "独立练习正确率良好，但速度不够快" },
                        ] },
                    { header: "翻译", typeName: "翻译", items: [
                            { label: "吃力", text: "翻译起来吃力" },
                            { label: "慢", text: "单句翻译需要时间思考，考场上时间不够用" },
                            { label: "有进步", text: "翻译能力有进步" },
                            { label: "点名好", text: "点名的翻译做得很好" },
                        ] },
                    { header: "词汇语感", typeName: "词汇语感", dimensions: [
                            { name: "猜词", items: [
                                    { label: "好", text: "猜词做得很好，有点语感" },
                                    { label: "弱", text: "猜词能力弱，语感不够" },
                                ] },
                            { name: "基础", items: [
                                    { label: "扎实", text: "词汇基础扎实" },
                                    { label: "薄弱", text: "词汇基础不够扎实" },
                                    { label: "有进步", text: "词汇掌握有进步" },
                                ] },
                        ] },
                    { header: "入门测", typeName: "入门测", items: [
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
                if (grp.items) {
                    grp.items.forEach(function (item) { return items.push(item); });
                }
                if (grp.dimensions) {
                    grp.dimensions.forEach(function (dim) {
                        dim.items.forEach(function (item) { return items.push(item); });
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
                _this.drawGroup(rootEl, group);
            });
        });
    };
    SidePanelControlView.prototype.drawGroup = function (rootEl, group) {
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
        tag.style.fontSize = '12px';
        tag.style.fontWeight = '600';
        tag.style.padding = '2px 8px';
        tag.style.borderRadius = '3px';
        tag.style.cursor = 'pointer';
        tag.setText(group.header + ':');
        tag.onClickEvent(function () {
            var insertText = group.typeName || group.header;
            _this.insertText(insertText);
        });
        if (group.dimensions) {
            group.dimensions.forEach(function (dim) {
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
    SidePanelControlView.prototype.drawDimension = function (rootEl, dim) {
        var _this = this;
        var dimRow = rootEl.createDiv();
        dimRow.style.display = 'flex';
        dimRow.style.alignItems = 'center';
        dimRow.style.padding = '2px 4px';
        dimRow.style.gap = '6px';
        var dimLabel = dimRow.createDiv();
        dimLabel.style.fontSize = '13px';
        dimLabel.style.fontWeight = '600';
        dimLabel.style.color = 'var(--text-normal)';
        dimLabel.style.minWidth = '70px';
        dimLabel.style.flexShrink = '0';
        dimLabel.setText(dim.name + ':');
        var btnContainer = dimRow.createDiv();
        btnContainer.style.display = 'flex';
        btnContainer.style.flexWrap = 'wrap';
        btnContainer.style.gap = '3px';
        btnContainer.style.flex = '1';
        dim.items.forEach(function (item) {
            var btn = btnContainer.createDiv({ cls: 'nav-action-button' });
            btn.style.textAlign = 'center';
            btn.style.padding = '4px 8px';
            btn.style.fontSize = '13px';
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
        btn.style.fontSize = '13px';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uL3NyYy9pY29ucy50cyIsIi4uL3NyYy90ZW1wbGF0ZXMudHMiLCIuLi9zcmMvU2lkZVBhbmVsQ29udHJvbFZpZXcudHMiLCIuLi9zcmMvQ29tbWFuZExpc3RWaWV3LnRzIiwiLi4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XHJcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xyXG4gICAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xyXG4gICAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XHJcbiAgICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xyXG59XHJcbiIsImltcG9ydCB7IGFkZEljb24gfSBmcm9tICdvYnNpZGlhbic7XG5cbmNvbnN0IHZpZXdJY29uID0gYFxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+XG4gICAgPHBhdGggZD1cIk0xNyAzYTIuODI4IDIuODI4IDAgMSAxIDQgNEw3LjUgMjAuNSAyIDIybDEuNS01LjVMMTcgM3pcIj48L3BhdGg+XG4gIDwvc3ZnPmA7XG5cbmV4cG9ydCBjb25zdCBpY29uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgdmlld0ljb24sXG59O1xuXG5leHBvcnQgY29uc3QgYWRkSWNvbnMgPSAoKTogdm9pZCA9PiB7XG4gIE9iamVjdC5rZXlzKGljb25zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBhZGRJY29uKGtleSwgaWNvbnNba2V5XSk7XG4gIH0pO1xufTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgVGVtcGxhdGVJdGVtIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2YWxEaW1lbnNpb24ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGl0ZW1zOiBUZW1wbGF0ZUl0ZW1bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaXNwbGF5R3JvdXAge1xuICBoZWFkZXI6IHN0cmluZztcbiAgdHlwZU5hbWU/OiBzdHJpbmc7XG4gIGRpbWVuc2lvbnM/OiBFdmFsRGltZW5zaW9uW107XG4gIGl0ZW1zPzogVGVtcGxhdGVJdGVtW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdGlvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGdyb3VwczogRGlzcGxheUdyb3VwW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2F0ZWdvcnkge1xuICBpZDogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBzZWN0aW9uczogU2VjdGlvbltdO1xufVxuXG5leHBvcnQgY29uc3QgZmVlZGJhY2tUZW1wbGF0ZXM6IENhdGVnb3J5W10gPSBbXG4gIHtcbiAgICBpZDogXCJjbGFzc1wiLFxuICAgIGxhYmVsOiBcIuePree6p1wiLFxuICAgIHNlY3Rpb25zOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiBcImNsYXNzLWF0dC1hdG1cIixcbiAgICAgICAgbGFiZWw6IFwi5Ye65YukL+awm+WbtFwiLFxuICAgICAgICBncm91cHM6IFtcbiAgICAgICAgICB7IGhlYWRlcjogXCLlh7rli6RcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5YWo5YiwXCIsIHRleHQ6IFwi5YWo5ZGY5Ye65YukXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5Liq5Yir6L+f5YiwXCIsIHRleHQ6IFwi5Liq5Yir5a2m5ZGY6L+f5YiwXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5Liq5Yir6K+35YGHXCIsIHRleHQ6IFwi5LiA5Lq66K+35YGHXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5aSa5Lq66K+35YGHXCIsIHRleHQ6IFwi5aSa5Lq66K+35YGHXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5pW05L2T6Imv5aW9XCIsIHRleHQ6IFwi5YWo5ZGY5q2j5bi45Ye65Yuk77yM5peg6L+f5Yiw5pep6YCAXCIgfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLmsJvlm7RcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi56ev5p6B5oCn6auYXCIsIHRleHQ6IFwi5a2m5ZGY5pW05L2T56ev5p6B5oCn6auY77yM5Li75Yqo5Y+C5LiO5LqS5YqoXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi56ev5p6B5oCn5LiA6IisXCIsIHRleHQ6IFwi5pW05L2T56ev5p6B5oCn5LiA6Iis77yM6ZyA6KaB6ICB5biI5bim5YqoXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi56ev5p6B5oCn5L2OXCIsIHRleHQ6IFwi5pW05L2T56ev5p6B5oCn5YGP5L2O77yM6K++5aCC5LqS5Yqo6L6D5bCRXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5rCU5rCb5aW9XCIsIHRleHQ6IFwi6K++5aCC5rCU5rCb5b6I5aW977yM5a2m5Lmg5rCb5Zu05rWT5Y6aXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5rCU5rCb5LiA6IisXCIsIHRleHQ6IFwi6K++5aCC5rCU5rCb5LiA6Iis77yM5q+U6L6D5bmz5rehXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5rCU5rCb5rS76LeDXCIsIHRleHQ6IFwi6K++5aCC5rCU5rCb5rS76LeD77yM5a2m5ZGY5LqS5Yqo56ev5p6BXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5rCU5rCb5rKJ6Ze3XCIsIHRleHQ6IFwi6K++5aCC5rCU5rCb6L6D5rKJ6Ze377yM5a2m5ZGY5Y+N5bqU5LiN56ev5p6BXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5pyJ6L+b5q2lXCIsIHRleHQ6IFwi6K++5aCC5rCb5Zu05pyJ6L+b5q2l77yM5q+U5LmL5YmN5aW9XCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi6ZyA5pS55ZaEXCIsIHRleHQ6IFwi5a2m5Lmg5rCb5Zu06ZyA6KaB5pS55ZaE77yM5a2m5ZGY6YWN5ZCI5bqm5LiN5aSfXCIgfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcImNsYXNzLXBlcmYtaHdcIixcbiAgICAgICAgbGFiZWw6IFwi6KGo546wL+S9nOS4mlwiLFxuICAgICAgICBncm91cHM6IFtcbiAgICAgICAgICB7IGhlYWRlcjogXCLmlbTkvZPlj4LkuI7luqZcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi6auYXCIsIHRleHQ6IFwi5pW05L2T5Y+C5LiO5bqm6auY77yM56ev5p6B5Zue562U6Zeu6aKY77yM5Li75Yqo5LqS5YqoXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5LiA6IisXCIsIHRleHQ6IFwi5pW05L2T5Y+C5LiO5bqm5LiA6Iis77yM54K55ZCN5pe26IO95Zue562UXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5L2OXCIsIHRleHQ6IFwi5pW05L2T5Y+C5LiO5bqm5YGP5L2O77yM6L6D5bCR5Li75Yqo5Y+R6KiAXCIgfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLmlbTkvZPorqTnnJ/nqIvluqZcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5aW9XCIsIHRleHQ6IFwi5pW05L2T5oCB5bqm6K6k55yf77yM6IO96Lef5LiK6K++5aCC6L+b5bqmXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5LiA6IisXCIsIHRleHQ6IFwi5pW05L2T6K6k55yf56iL5bqm5LiA6Iis77yM6YOo5YiG5a2m5ZGY5YG25bCU6LWw56WeXCIgfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLni6znq4vnu4PkuaBcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5aW9XCIsIHRleHQ6IFwi5pW05L2T54us56uL57uD5Lmg5pWI546H6auY77yM5q2j56Gu546H5ZKM6YCf5bqm6YO95aW9XCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5pyJ6L+b5q2lXCIsIHRleHQ6IFwi5pW05L2T54us56uL57uD5Lmg5pWI546H5pyJ6L+b5q2l77yM5q+U5LmL5YmN5pu05LiT5rOoXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi6ZyA5o+Q5Y2HXCIsIHRleHQ6IFwi5pW05L2T54us56uL57uD5Lmg5pWI546H6ZyA6KaB5o+Q5Y2H77yM57K+56We54q25oCB5LiN5aSf6aWx5ruhXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi6ZmQ5pe26K6t57uD5beuXCIsIHRleHQ6IFwi5pW05L2T6ZmQ5pe26K6t57uD5q2j56Gu546H5p6B5L2OXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5pW05L2T6YCf5bqm5oWiXCIsIHRleHQ6IFwi5pW05L2T6ZiF6K+76YCf5bqm5YGP5oWi77yM6ZyA6KaB5Yqg5by66ZmQ5pe26K6t57uDXCIgfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLkvZzkuJrmg4XlhrVcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5aSn6YOo5YiG5oyJ5pe2XCIsIHRleHQ6IFwi5aSn6YOo5YiG5a2m5ZGY5oyJ5pe25o+Q5Lqk5L2c5LiaXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5aSn6YOo5YiG5pyq5LqkXCIsIHRleHQ6IFwi5aSn6YOo5YiG5a2m5ZGY5L2c5Lia5YaZ5LqG5L2G5piv5rKh5LqkXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5pW05L2T5oCB5bqm5aW9XCIsIHRleHQ6IFwi5pW05L2T5L2c5Lia5oCB5bqm5aW977yM6K6k55yf5oyJ5pe25a6M5oiQXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5oCB5bqm6ZyA56uv5q2jXCIsIHRleHQ6IFwi5pW05L2T5a2m5Lmg5oCB5bqm6ZyA6KaB56uv5q2j77yM5L2c5Lia5a6M5oiQ5bqm5LiN5aSfXCIgfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcImNsYXNzLWltcHJvdmVcIixcbiAgICAgICAgbGFiZWw6IFwi6ZyA5Yqg5by6XCIsXG4gICAgICAgIGdyb3VwczogW1xuICAgICAgICAgIHsgaGVhZGVyOiBcIuiuree7g1wiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLpmZDml7borq3nu4NcIiwgdGV4dDogXCLmlbTkvZPpmZDml7borq3nu4PmraPnoa7njofkvY7vvIznvLrlsJHpq5jljovorq3nu4NcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLpq5jljovorq3nu4NcIiwgdGV4dDogXCLnvLrlsJHpq5jljovorq3nu4PvvIzpmZDml7bnjq/looPkuIvooajnjrDkuI3kvbNcIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICAgIHsgaGVhZGVyOiBcIuWFtuS7llwiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLliqDlvLrpu5jlhplcIiwgdGV4dDogXCLpnIDopoHorqTnnJ/lr7nlvoXor43msYfpu5jlhplcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLnq6/mraPmgIHluqZcIiwgdGV4dDogXCLnq6/mraPlrabkuaDmgIHluqbvvIzkvZzkuJropoHmjInml7blrozmiJBcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLmj5DljYfkuJPms6hcIiwgdGV4dDogXCLpnIDopoHlnKjnu4PkuaDml7bkv53mjIHkuJPms6jvvIzmj5Dpq5jmlYjnjodcIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwic3R1ZGVudFwiLFxuICAgIGxhYmVsOiBcIuWtpuWRmFwiLFxuICAgIHNlY3Rpb25zOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiBcInN0dS1hdHRlbmRhbmNlXCIsXG4gICAgICAgIGxhYmVsOiBcIuWHuuWLpFwiLFxuICAgICAgICBncm91cHM6IFtcbiAgICAgICAgICB7IGhlYWRlcjogXCLlh7rli6TnirbmgIFcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi6L+f5YiwXCIsIHRleHQ6IFwi5a2m5ZGY6L+f5YiwXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5pep6YCAXCIsIHRleHQ6IFwi5a2m5ZGY5pep6YCAXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi6K+35YGHXCIsIHRleHQ6IFwi5a2m5ZGY6K+35YGHXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5q2j5bi4XCIsIHRleHQ6IFwi5q2j5bi45Ye65YukXCIgfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcInN0dS1wZXJmb3JtYW5jZVwiLFxuICAgICAgICBsYWJlbDogXCLor77loILooajnjrBcIixcbiAgICAgICAgZ3JvdXBzOiBbXG4gICAgICAgICAgeyBoZWFkZXI6IFwi5Y+C5LiO5bqmXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIumrmFwiLCB0ZXh0OiBcIuWPguS4juW6pumrmO+8jOenr+aegeWbnuetlOmXrumimO+8jOS4u+WKqOS6kuWKqFwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuS4rVwiLCB0ZXh0OiBcIuWPguS4juW6puS4gOiIrO+8jOeCueWQjeaXtuiDveWbnuetlFwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuS9jlwiLCB0ZXh0OiBcIuWPguS4juW6puWBj+S9ju+8jOi+g+WwkeS4u+WKqOWPkeiogFwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuaYjuaYvuaPkOWNh1wiLCB0ZXh0OiBcIuWPguS4juW6puaYjuaYvuaPkOWNh++8jOWAvOW+l+iCr+WumlwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuaciei/m+atpVwiLCB0ZXh0OiBcIuWPguS4juW6puaciei/m+atpe+8jOavlOS5i+WJjeabtOenr+aegVwiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi6K6k55yf56iL5bqmXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIumdnuW4uOiupOecn1wiLCB0ZXh0OiBcIumdnuW4uOiupOecn++8jOWFqOeoi+i3n+maj+ivvuWgguiKguWlj1wiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuiupOecn1wiLCB0ZXh0OiBcIuaAgeW6puiupOecn++8jOiDvei3n+S4iuivvuWggui/m+W6plwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuS4gOiIrFwiLCB0ZXh0OiBcIuiupOecn+eoi+W6puS4gOiIrO+8jOWBtuWwlOi1sOelnlwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIumcgOWKoOW8ulwiLCB0ZXh0OiBcIuiupOecn+eoi+W6puS4jeWkn++8jOmcgOimgeaPkOmGklwiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi54us56uL57uD5LmgXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIumrmFwiLCB0ZXh0OiBcIueLrOeri+e7g+S5oOaViOeOh+mrmO+8jOato+ehrueOh+WSjOmAn+W6pumDveWlvVwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuiJr+WlvVwiLCB0ZXh0OiBcIueLrOeri+e7g+S5oOaViOeOh+iJr+Wlve+8jOato+ehrueOh+S4jemUmeS9humAn+W6puWBj+aFolwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuS9jlwiLCB0ZXh0OiBcIueLrOeri+e7g+S5oOaViOeOh+S9ju+8jOWtmOWcqOWPkeWRhui1sOelnueahOaDheWGtVwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuaciei/m+atpVwiLCB0ZXh0OiBcIueLrOeri+e7g+S5oOaViOeOh+aciei/m+atpe+8jOavlOS5i+WJjeabtOS4k+azqFwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIumcgOaPkOWNh1wiLCB0ZXh0OiBcIueLrOeri+e7g+S5oOaViOeOh+mcgOimgeaPkOWNh++8jOeyvuelnueKtuaAgeS4jeWkn+mlsea7oVwiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCJzdHUtaG9tZXdvcmtcIixcbiAgICAgICAgbGFiZWw6IFwi5L2c5LiaXCIsXG4gICAgICAgIGdyb3VwczogW1xuICAgICAgICAgIHsgaGVhZGVyOiBcIuaPkOS6pOeKtuaAgVwiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLmjInml7borqTnnJ9cIiwgdGV4dDogXCLmjInml7bmj5DkuqTvvIzorqTnnJ9cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLmgIHluqblpb1cIiwgdGV4dDogXCLmjInml7bmj5DkuqTvvIzmgIHluqbpnZ7luLjlpb3vvIzpnZ7luLjorqTnnJ9cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLlhYjlpI3kuaBcIiwgdGV4dDogXCLmjInml7bmj5DkuqTvvIzmgIHluqbpnZ7luLjlpb3vvIzlhYjlpI3kuaDlho3lgZrnmoTkvZzkuJpcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLlrozmiJDmsqHkuqRcIiwgdGV4dDogXCLmjInml7blrozmiJDvvIzkvYbmnKrmjInml7bmj5DkuqRcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLmsqHmjInml7bkuqRcIiwgdGV4dDogXCLmsqHmjInml7bkuqRcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLlhpnkuobmsqHkuqRcIiwgdGV4dDogXCLlhpnkuobmsqHmjInml7bkuqRcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLnvLrkuqRcIiwgdGV4dDogXCLkvZzkuJrnvLrkuqRcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLpg6jliIblrozmiJBcIiwgdGV4dDogXCLpg6jliIblrozmiJDvvIzmnKrlhajpg6jlrozmiJBcIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICAgIHsgaGVhZGVyOiBcIuWBmumimOS5oOaDr1wiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLmnInnl5Xov7lcIiwgdGV4dDogXCLmnInlgZrpopjnl5Xov7nvvIzkuaDmg6/lpb1cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLnvLrnl5Xov7lcIiwgdGV4dDogXCLnvLrlsJHlgZrpopjnl5Xov7nvvIzkuaDmg6/ov5jmmK/opoHlhbvmiJDnmoRcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLnl5Xov7nmuIXmmbBcIiwgdGV4dDogXCLlgZrpopjnl5Xov7nmuIXmmbDvvIzlhbPplK7or43liJLliIbmmI7noa5cIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICAgIHsgaGVhZGVyOiBcIuS9nOS4muaAgeW6plwiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLnq6/mraNcIiwgdGV4dDogXCLlrabkuaDmgIHluqbnq6/mraPvvIzkvZzkuJrorqTnnJ9cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLpnIDnq6/mraNcIiwgdGV4dDogXCLlrabkuaDmgIHluqbpnIDopoHnq6/mraPvvIzkvZzkuJrlrozmiJDluqbkuI3lpJ9cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLlhYjlpI3kuaBcIiwgdGV4dDogXCLlhYjlpI3kuaDnrJTorrDlho3lhpnkvZzkuJrvvIzkuaDmg6/lpb1cIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwic3R1LXF1ZXN0aW9uc1wiLFxuICAgICAgICBsYWJlbDogXCLpopjlnotcIixcbiAgICAgICAgZ3JvdXBzOiBbXG4gICAgICAgICAgeyBoZWFkZXI6IFwi5aGr56m6XCIsIHR5cGVOYW1lOiBcIuWhq+epulwiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLms6jmhI/or43mlbBcIiwgdGV4dDogXCLms6jmhI/or43mlbDpmZDliLZcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLor43mlbDlpb1cIiwgdGV4dDogXCLkuKXmoLzpgbXlvqror43mlbDpmZDliLZcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLov53lj43or43mlbBcIiwgdGV4dDogXCLlh7rnjrDor43mlbDpmZDliLbov53lj43nmoTmg4XlhrVcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLor43mgKfpooTmtYvlpb1cIiwgdGV4dDogXCLor43mgKfpooTmtYvlkIjnkIbvvIzmnInmhI/or4ZcIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLor43mgKfplJnor69cIiwgdGV4dDogXCLlh7rnjrDor43mgKfplJnor69cIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICAgIHsgaGVhZGVyOiBcIuihqOWktOWumuS9jVwiLCB0eXBlTmFtZTogXCLooajmoLzloavnqbpcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5aW9XCIsIHRleHQ6IFwi6KGo5aS05a6a5L2N6IO95Yqb5by6XCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5byxXCIsIHRleHQ6IFwi6KGo5aS05a6a5L2N6IO95Yqb5byx77yM5a655piT5re35reGXCIgfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLljZXlj6Xor63ms5VcIiwgdHlwZU5hbWU6IFwi5Y2V5Y+l5aGr56m6XCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuWlvVwiLCB0ZXh0OiBcIueugOWNleWPpeivreazleaOjOaPoeWlvVwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuW8sVwiLCB0ZXh0OiBcIuivreazleWfuuehgOiWhOW8se+8jOmcgOimgeWKoOW8ulwiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi56yU6K6w5aGr56m6XCIsIHR5cGVOYW1lOiBcIueslOiusOWhq+epulwiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLlpb1cIiwgdGV4dDogXCLnrJTorrDloavnqbrlrozmiJDlpb3vvIzkv6Hmga/mjZXmjYnlh4bnoa5cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLlvLFcIiwgdGV4dDogXCLnrJTorrDloavnqbrlrozmiJDluqbkuI3pq5jvvIzkv6Hmga/pgZfmvI/lpJpcIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICAgIHsgaGVhZGVyOiBcIuaRmOimgeWhq+epulwiLCB0eXBlTmFtZTogXCLmkZjopoHloavnqbpcIiwgZGltZW5zaW9uczogW1xuICAgICAgICAgICAgeyBuYW1lOiBcIuaVtOS9k+ihqOeOsFwiLCBpdGVtczogW1xuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuWFqOWvuVwiLCB0ZXh0OiBcIuaRmOimgeWhq+epuuWFqOWvue+8jOauteiQveeQhuino+iDveWKm+W8ulwiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5q2j56Gu546H5aW9XCIsIHRleHQ6IFwi5pGY6KaB5aGr56m65q2j56Gu546H5aW977yM5o6M5o+h5bqm5aW9XCIgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlipvkuI3ku47lv4NcIiwgdGV4dDogXCLlr7npq5jluqbmlLnlhpnnmoTmkZjopoHloavnqbrlipvkuI3ku47lv4PvvIzmraPnoa7njofkuI3nkIbmg7NcIiB9LFxuICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICB7IG5hbWU6IFwi5o6S6Zmk5rOVXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi6L+Q55SoXCIsIHRleHQ6IFwi5ZCI55CG6L+Q55So5o6S6Zmk5rOVXCIgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLmnKrov5DnlKhcIiwgdGV4dDogXCLmjpLpmaTms5Xov5DnlKjkuI3lpJ9cIiB9LFxuICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICB7IG5hbWU6IFwi5q616JC957uT5p6EXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5aW9XCIsIHRleHQ6IFwi5q616JC957uT5p6E6K+G5Yir5a6a5L2N6IO95Yqb5by6XCIgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlvLFcIiwgdGV4dDogXCLmrrXokL3nu5PmnoTor4bliKvlrprkvY3og73lipvlvLFcIiB9LFxuICAgICAgICAgICAgXX0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi5Zyw5Zu+L+a1geeoi+WbvlwiLCB0eXBlTmFtZTogXCLlnLDlm74v5rWB56iL5Zu+5aGr56m6XCIsIGRpbWVuc2lvbnM6IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCLmlrnkvY3or41cIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlpb1cIiwgdGV4dDogXCLmlrnkvY3or43mjozmj6Hlpb1cIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuiWhOW8sVwiLCB0ZXh0OiBcIuaWueS9jeivjeiWhOW8se+8jOmcgOimgeWKoOW8ulwiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCLmtYHnqIvlm75cIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlpb1cIiwgdGV4dDogXCLmtYHnqIvlm77nkIbop6Pog73lipvlvLpcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuacieWbsOmavlwiLCB0ZXh0OiBcIua1geeoi+WbvueQhuino+acieWbsOmavlwiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLliKTmlq1cIiwgdHlwZU5hbWU6IFwi5Yik5patXCIsIGRpbWVuc2lvbnM6IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCLogIPngrnor4bliKtcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLmuIXmmbBcIiwgdGV4dDogXCLogIPngrnor4bliKvmuIXmmbDvvIzog73lh4bnoa7liKTmlq1cIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuS4jea4hVwiLCB0ZXh0OiBcIuiAg+eCueivhuWIq+S4jea4heaZsFwiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5pyJ5Z+656GAXCIsIHRleHQ6IFwi5YW35aSH5LiA5a6a6K+G5Yir6ICD54K555qE6IO95YqbXCIgfSxcbiAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgeyBuYW1lOiBcIk5vL05H5Yy65YiGXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5aW9XCIsIHRleHQ6IFwiTm/lkoxOR+WMuuWIhuiDveWKm+W8ulwiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5re35reGXCIsIHRleHQ6IFwiTm/lkoxOR+WMuuWIhuaciemXrumimO+8jOato+ehrueOh+W+heaPkOWNh1wiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCLliKTmlq3kvp3mja5cIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlhYXliIZcIiwgdGV4dDogXCLliKTmlq3kvp3mja7lhYXliIbvvIzlrprkvY3lh4bnoa5cIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuS4jei2s1wiLCB0ZXh0OiBcIuWIpOaWreS+neaNruS4jei2s++8jOWumuS9jeiDveWKm+acieW+heaPkOmrmFwiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCLlrprkvY1cIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlpb1cIiwgdGV4dDogXCLlrprkvY3og73lipvlvLpcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuS4jei2s1wiLCB0ZXh0OiBcIuWumuS9jeiDveWKm+S4jei2s+WvvOiHtOmUmeivr1wiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCLlgZrpopjnl5Xov7lcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLml6Dnl5Xov7nlhajlr7lcIiwgdGV4dDogXCLmsqHmnInlgZrpopjnl5Xov7nkvYblhajlr7nkuobvvIzopoHms6jmhI/lhbvmiJDkuaDmg69cIiB9LFxuICAgICAgICAgICAgXX0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi6YCJ5oupXCIsIHR5cGVOYW1lOiBcIumAieaLqVwiLCBkaW1lbnNpb25zOiBbXG4gICAgICAgICAgICB7IG5hbWU6IFwi57uG6IqC6aKYXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5aW9XCIsIHRleHQ6IFwi57uG6IqC6aKY5YGa5b6X5aW977yM6IO95oqT5L2P5YWz6ZSu5L+h5oGvXCIgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlvLFcIiwgdGV4dDogXCLnu4boioLpopjmraPnoa7njoflgY/kvY7vvIzpnIDopoHliqDlvLpcIiB9LFxuICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICB7IG5hbWU6IFwi5Li75peo6aKYXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5aW9XCIsIHRleHQ6IFwi5Li75peo6aKY5YGa5b6X5aW977yM6IO95oqK5o+h5paH56ug5Lit5b+DXCIgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlvLFcIiwgdGV4dDogXCLkuLvml6jpopjmraPnoa7njoflgY/kvY7vvIzpnIDopoHliqDlvLpcIiB9LFxuICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICB7IG5hbWU6IFwi6aKY5Z6L5Yy65YiGXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5riF5pmwXCIsIHRleHQ6IFwi6IO95Yy65YiG57uG6IqC6aKY5ZKM5Li75peo6aKYXCIgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLmt7fmt4ZcIiwgdGV4dDogXCLnu4boioLpopjlkozkuLvml6jpopjlrrnmmJPmt7fmt4ZcIiB9LFxuICAgICAgICAgICAgXX0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi5Lq65ZCN6YWN5L+h5oGvXCIsIHR5cGVOYW1lOiBcIuS6uuWQjemFjeS/oeaBr1wiLCBpdGVtczogW1xuICAgICAgICAgICAgeyBsYWJlbDogXCLlpb1cIiwgdGV4dDogXCLkurrlkI3phY3kv6Hmga/lrozmiJDlpb3vvIznu4boioLkv6Hmga/or4bliKvlh4bnoa5cIiB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCLlvLFcIiwgdGV4dDogXCLkurrlkI3phY3kv6Hmga/lrozmiJDluqbkuI3pq5hcIiB9LFxuICAgICAgICAgIF19LFxuICAgICAgICAgIHsgaGVhZGVyOiBcIuauteiQvemFjeS/oeaBr1wiLCB0eXBlTmFtZTogXCLmrrXokL3phY3kv6Hmga9cIiwgZGltZW5zaW9uczogW1xuICAgICAgICAgICAgeyBuYW1lOiBcIuWFs+mUruivjeWIkuWIhlwiLCBpdGVtczogW1xuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuWlvVwiLCB0ZXh0OiBcIuWFs+mUruivjeWIkuWIhua4heaZsO+8jOato+ehrueOh+Wlve+8jOiDveivhuWIq+WQjOS5ieabv+aNolwiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5b6F5o+Q5Y2HXCIsIHRleHQ6IFwi5YWz6ZSu6K+N6YCJ55qE5LiN5aW977yM5LiN5YW35pyJ6ZmQ5a6a5oSP5LmJ77yM5q2j56Gu546H5YGP5L2OXCIgfSxcbiAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgeyBuYW1lOiBcIuWQjOS5ieabv+aNolwiLCBpdGVtczogW1xuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuWlvVwiLCB0ZXh0OiBcIuivhuWIq+WQjOS5ieabv+aNoueahOiDveWKm+W8ulwiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5byxXCIsIHRleHQ6IFwi6K+G5Yir5ZCM5LmJ5pu/5o2i55qE6IO95Yqb6IO95o+Q6auYXCIgfSxcbiAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgeyBuYW1lOiBcIue7huiKguivhuWIq1wiLCBpdGVtczogW1xuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuWlvVwiLCB0ZXh0OiBcIue7huiKguS/oeaBr+ivhuWIq+WHhuehru+8jOmimOWei+eJueeCueaOjOaPoeWlvVwiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5b6F5o+Q5Y2HXCIsIHRleHQ6IFwi57uG6IqC5L+h5oGv6K+G5Yir6IO95Yqb6ZyA6KaB5o+Q6auYXCIgfSxcbiAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgeyBuYW1lOiBcIuWujOaIkOW6plwiLCBpdGVtczogW1xuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuWlvVwiLCB0ZXh0OiBcIuauteiQvemFjeS/oeaBr+WujOaIkOWlve+8jOato+ehrueOh+iJr+WlvVwiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5beuXCIsIHRleHQ6IFwi5q616JC96YWN5L+h5oGv5a6M5oiQ5bqm5LiN6auYXCIgfSxcbiAgICAgICAgICAgIF19LFxuICAgICAgICAgIF19LFxuICAgICAgICAgIHsgaGVhZGVyOiBcIuWNiuWPpeWMuemFjVwiLCB0eXBlTmFtZTogXCLljYrlj6XljLnphY1cIiwgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5aW9XCIsIHRleHQ6IFwi5Y2K5Y+l5Yy56YWN5a6M5oiQ5aW977yM6YC76L6R5YWz57O755CG6Kej5YeG56GuXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5byxXCIsIHRleHQ6IFwi5Y2K5Y+l5Yy56YWN5a6M5oiQ5bqm5LiN6auY77yM6YC76L6R5YWz57O755CG6Kej5pyJ5Zuw6Zq+XCIgfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLmoIfpopjljLnphY1cIiwgdHlwZU5hbWU6IFwi5q616JC95qCH6aKY5Yy56YWNXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuWlvVwiLCB0ZXh0OiBcIuauteiQvemFjeagh+mimOWujOaIkOWlve+8jOamguaLrOiDveWKm+W8ulwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuW8sVwiLCB0ZXh0OiBcIuauteiQvemFjeagh+mimOWujOaIkOW6puS4jemrmO+8jOamguaLrOiDveWKm+acieW+heaPkOmrmFwiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCJzdHUtc2tpbGxzXCIsXG4gICAgICAgIGxhYmVsOiBcIuaKgOW3p1wiLFxuICAgICAgICBncm91cHM6IFtcbiAgICAgICAgICB7IGhlYWRlcjogXCLlrprkvY3or43liJLliIZcIiwgdHlwZU5hbWU6IFwi5a6a5L2N6K+N5YiS5YiGXCIsIGRpbWVuc2lvbnM6IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCLnibnmroror43or4bliKtcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlpb1cIiwgdGV4dDogXCLnibnmroror43or4bliKvliKnnlKjog73lipvlvLpcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuW8sVwiLCB0ZXh0OiBcIueJueauiuivjeivhuWIq+WIqeeUqOiDveWKm+W8sVwiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCLpgInor41cIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlkIjnkIZcIiwgdGV4dDogXCLpgInor43lkIjnkIbvvIzlrprkvY3lh4bnoa5cIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuS4jeWQiOeQhlwiLCB0ZXh0OiBcIumAieivjeS4jeWQiOeQhu+8jOWumuS9jeaViOaenOS4jeWlvVwiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLlhbPplK7or43liJLliIZcIiwgdHlwZU5hbWU6IFwi5YWz6ZSu6K+N5YiS5YiGXCIsIGRpbWVuc2lvbnM6IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCLliJLliIbotKjph49cIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlpb1cIiwgdGV4dDogXCLlhbPplK7or43liJLliIblkIjnkIbmuIXmmbBcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuaooeezilwiLCB0ZXh0OiBcIuWFs+mUruivjeWIkuWIhuaooeeziu+8jOS4jeWkn+eyvuWHhlwiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCLmib7lj4LnhafnialcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlpb1cIiwgdGV4dDogXCLmib7lj4Lnhafnianog73lipvlvLpcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuW8sVwiLCB0ZXh0OiBcIuaJvuWPgueFp+eJqeiDveWKm+W8sVwiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLmiavor7tcIiwgdHlwZU5hbWU6IFwi5omr6K+7XCIsIGRpbWVuc2lvbnM6IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCLpgJ/luqZcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlv6tcIiwgdGV4dDogXCLmiavor7vpgJ/luqblv6vvvIzmib7lhbPplK7or43og73lipvlvLpcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuaFolwiLCB0ZXh0OiBcIuaJq+ivu+mAn+W6puaFou+8jOmcgOimgeaPkOWNh1wiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCLmib7lhbPplK7or41cIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlvLpcIiwgdGV4dDogXCLmiavor7vmib7lhbPplK7or43og73lipvlvLpcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuW8sVwiLCB0ZXh0OiBcIuaJq+ivu+aJvuWFs+mUruivjeiDveWKm+W8sVwiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLnlaXor7tcIiwgdHlwZU5hbWU6IFwi55Wl6K+7XCIsIGRpbWVuc2lvbnM6IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCLmlrnms5VcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLmjozmj6Hlpb1cIiwgdGV4dDogXCLnlaXor7vmlrnms5Xmjozmj6Hlpb3vvIzog73lv6vpgJ/miormj6HkuLvml6hcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuW+heaPkOWNh1wiLCB0ZXh0OiBcIueVpeivu+aWueazleW+heaPkOWNh++8jOmYheivu+aViOeOh+S4jeWkn1wiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCLmgLvnu5PmpoLmi6xcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlvLpcIiwgdGV4dDogXCLmgLvnu5PmpoLmi6zog73lipvlvLpcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuW8sVwiLCB0ZXh0OiBcIuaAu+e7k+amguaLrOiDveWKm+W8se+8jOmcgOimgeWKoOW8ulwiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLlkIzkuYnmm7/mjaJcIiwgdHlwZU5hbWU6IFwi5ZCM5LmJ5pu/5o2iXCIsIGRpbWVuc2lvbnM6IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCLnroDljZXmm7/mjaJcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlpb1cIiwgdGV4dDogXCLnroDljZXmm7/mjaLor4bliKvog73lipvlvLpcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuW8sVwiLCB0ZXh0OiBcIueugOWNleabv+aNouivhuWIq+iDveWKm+W8sVwiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCLmlLnlhpnnsbvmm7/mjaJcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlpb1cIiwgdGV4dDogXCLmlLnlhpnnsbvmm7/mjaLor4bliKvog73lipvlvLpcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuW8sVwiLCB0ZXh0OiBcIuaUueWGmeexu+abv+aNouivhuWIq+iDveWKm+W8se+8jOWvuemrmOW6puaUueWGmeaVj+aEn1wiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCLpooTmtYtcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlvLpcIiwgdGV4dDogXCLlkIzkuYnmm7/mjaLpooTmtYvog73lipvlvLpcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuW8sVwiLCB0ZXh0OiBcIuWQjOS5ieabv+aNoumihOa1i+iDveWKm+W8sVwiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLplb/pmr7lj6VcIiwgdHlwZU5hbWU6IFwi6ZW/6Zq+5Y+lXCIsIGRpbWVuc2lvbnM6IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCLkuLvlubLor4bliKtcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlpb1cIiwgdGV4dDogXCLog73or4bliKvplb/pmr7lj6XkuLvlubJcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuW8sVwiLCB0ZXh0OiBcIuS4jeWkqueQhuino+S4u+W5suamguW/tVwiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCLmlbTkvZPnkIbop6NcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlvLpcIiwgdGV4dDogXCLplb/pmr7lj6XnkIbop6Pog73lipvlvLpcIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuWQg+WKm1wiLCB0ZXh0OiBcIumVv+mavuWPpeeQhuino+WQg+WKm++8jOmYheivu+acieWbsOmavlwiIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5pyJ6L+b5q2lXCIsIHRleHQ6IFwi6ZW/6Zq+5Y+l55CG6Kej5pyJ6L+b5q2lXCIgfSxcbiAgICAgICAgICAgIF19LFxuICAgICAgICAgIF19LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwic3R1LW1hc3RlcnlcIixcbiAgICAgICAgbGFiZWw6IFwi5o6M5o+hXCIsXG4gICAgICAgIGdyb3VwczogW1xuICAgICAgICAgIHsgaGVhZGVyOiBcIuivreazlVwiLCB0eXBlTmFtZTogXCLor63ms5VcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi6L+H56GsXCIsIHRleHQ6IFwi6K+t5rOV6Z2e5bi46L+H56GsXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi566A5Y2V5Y+l5aW9XCIsIHRleHQ6IFwi566A5Y2V5Y+l55qE6K+t5rOV5o6M5o+h5b6X5b6I5aW9XCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5Z+656GA6JaE5byxXCIsIHRleHQ6IFwi6K+t5rOV5Z+656GA6JaE5byx77yM6ZyA6KaB5Yqg5by6XCIgfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLni6znq4vnu4PkuaBcIiwgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5Ye66ImyXCIsIHRleHQ6IFwi54us56uL57uD5Lmg5a6M5oiQ5Ye66Imy77yM5pe26Ze05ZKM5q2j56Gu546H6YO95b6I5qOSXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi5pyJ6L+b5q2lXCIsIHRleHQ6IFwi54us56uL57uD5Lmg5pyJ5b6I5aSn6L+b5q2l77yM5q2j56Gu546H5L+d5oyB6auY5rC05bmzXCIgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwi6Imv5aW9XCIsIHRleHQ6IFwi54us56uL57uD5Lmg5q2j56Gu546H6Imv5aW977yM5L2G6YCf5bqm5LiN5aSf5b+rXCIgfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLnv7vor5FcIiwgdHlwZU5hbWU6IFwi57+76K+RXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuWQg+WKm1wiLCB0ZXh0OiBcIue/u+ivkei1t+adpeWQg+WKm1wiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuaFolwiLCB0ZXh0OiBcIuWNleWPpee/u+ivkemcgOimgeaXtumXtOaAneiAg++8jOiAg+WcuuS4iuaXtumXtOS4jeWkn+eUqFwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuaciei/m+atpVwiLCB0ZXh0OiBcIue/u+ivkeiDveWKm+aciei/m+atpVwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIueCueWQjeWlvVwiLCB0ZXh0OiBcIueCueWQjeeahOe/u+ivkeWBmuW+l+W+iOWlvVwiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi6K+N5rGH6K+t5oSfXCIsIHR5cGVOYW1lOiBcIuivjeaxh+ivreaEn1wiLCBkaW1lbnNpb25zOiBbXG4gICAgICAgICAgICB7IG5hbWU6IFwi54yc6K+NXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5aW9XCIsIHRleHQ6IFwi54yc6K+N5YGa5b6X5b6I5aW977yM5pyJ54K56K+t5oSfXCIgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLlvLFcIiwgdGV4dDogXCLnjJzor43og73lipvlvLHvvIzor63mhJ/kuI3lpJ9cIiB9LFxuICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICB7IG5hbWU6IFwi5Z+656GAXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHsgbGFiZWw6IFwi5omO5a6eXCIsIHRleHQ6IFwi6K+N5rGH5Z+656GA5omO5a6eXCIgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogXCLoloTlvLFcIiwgdGV4dDogXCLor43msYfln7rnoYDkuI3lpJ/miY7lrp5cIiB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiBcIuaciei/m+atpVwiLCB0ZXh0OiBcIuivjeaxh+aOjOaPoeaciei/m+atpVwiIH0sXG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICBdfSxcbiAgICAgICAgICB7IGhlYWRlcjogXCLlhaXpl6jmtYtcIiwgdHlwZU5hbWU6IFwi5YWl6Zeo5rWLXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuWumuS9jeayoemXrumimFwiLCB0ZXh0OiBcIuWhq+epuumimOWumuS9jeiDveWKm+ayoeaciemXrumimFwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuivjeaxh+iJr+WlvVwiLCB0ZXh0OiBcIuivjeaxh+aOjOaPoeiJr+WlvVwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuato+ehrueOh+mrmFwiLCB0ZXh0OiBcIuihqOeOsOiJr+Wlve+8jOato+ehrueOh+mrmFwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuS4gOiIrFwiLCB0ZXh0OiBcIuWFpemXqOa1i+ihqOeOsOS4gOiIrFwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuW+heaPkOWNh1wiLCB0ZXh0OiBcIuWFpemXqOa1i+ihqOeOsOmcgOimgeaPkOWNh1wiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCJzdHUtaW1wcm92ZVwiLFxuICAgICAgICBsYWJlbDogXCLpnIDliqDlvLpcIixcbiAgICAgICAgZ3JvdXBzOiBbXG4gICAgICAgICAgeyBoZWFkZXI6IFwi6K+N5rGHXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuWKoOW8uuiDjOivtVwiLCB0ZXh0OiBcIuivjeaxh+WfuuehgOS4jeWkn+aJjuWunu+8jOW7uuiuruWKoOW8uuWfuuehgOivjeaxh+iDjOivteW3qeWbulwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuWKoOW8uum7mOWGmVwiLCB0ZXh0OiBcIumcgOimgeiupOecn+WvueW+heivjeaxh+m7mOWGmVwiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi6K6t57uDXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIumZkOaXtuiuree7g1wiLCB0ZXh0OiBcIumZkOaXtuiuree7g+ato+ehrueOh+S9ju+8jOe8uuWwkemrmOWOi+iuree7g1wiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIumYheivu+mAn+W6plwiLCB0ZXh0OiBcIumYheivu+mAn+W6puWBj+aFou+8jOmcgOimgeWKoOW8uumZkOaXtuiuree7g1wiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi5Lmg5oOvXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuWBmumimOeXlei/uVwiLCB0ZXh0OiBcIuWFu+aIkOWBmumimOeXlei/ueeahOS5oOaDr1wiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuerr+ato+aAgeW6plwiLCB0ZXh0OiBcIuerr+ato+WtpuS5oOaAgeW6pu+8jOS9nOS4muimgeaMieaXtuWujOaIkFwiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi5oqA5benXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuWumuS9jeiDveWKm1wiLCB0ZXh0OiBcIuWumuS9jeiDveWKm+mcgOimgeWKoOW8ulwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuWQjOS5ieabv+aNolwiLCB0ZXh0OiBcIuWQjOS5ieabv+aNouivhuWIq+iDveWKm+mcgOimgeWKoOW8ulwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIumVv+mavuWPpVwiLCB0ZXh0OiBcIumVv+mavuWPpeeQhuino+iDveWKm+mcgOimgeWKoOW8ulwiIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuajgOafpeatpemqpFwiLCB0ZXh0OiBcIumcgOimgeacieajgOafpeatpemqpO+8jOmBv+WFjeeyl+W/g+mUmeivr1wiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgICAgeyBoZWFkZXI6IFwi5LiT5rOoXCIsIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIuS/neaMgeS4k+azqFwiLCB0ZXh0OiBcIumcgOimgeWcqOe7g+S5oOaXtuS/neaMgeS4k+azqO+8jOaPkOmrmOaViOeOh1wiIH0sXG4gICAgICAgICAgXX0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsSXRlbXMoKTogVGVtcGxhdGVJdGVtW10ge1xuICBjb25zdCBpdGVtczogVGVtcGxhdGVJdGVtW10gPSBbXTtcbiAgZmVlZGJhY2tUZW1wbGF0ZXMuZm9yRWFjaCgoY2F0KSA9PiB7XG4gICAgY2F0LnNlY3Rpb25zLmZvckVhY2goKHNlYykgPT4ge1xuICAgICAgc2VjLmdyb3Vwcy5mb3JFYWNoKChncnApID0+IHtcbiAgICAgICAgaWYgKGdycC5pdGVtcykge1xuICAgICAgICAgIGdycC5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtcy5wdXNoKGl0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ3JwLmRpbWVuc2lvbnMpIHtcbiAgICAgICAgICBncnAuZGltZW5zaW9ucy5mb3JFYWNoKChkaW0pID0+IHtcbiAgICAgICAgICAgIGRpbS5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtcy5wdXNoKGl0ZW0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gaXRlbXM7XG59XG4iLCJpbXBvcnQgeyBJdGVtVmlldywgTWFya2Rvd25WaWV3LCBXb3Jrc3BhY2VMZWFmIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IFRleHRJbnNlcnRQbHVnaW4gZnJvbSAnLi9tYWluJztcbmltcG9ydCB7IGZlZWRiYWNrVGVtcGxhdGVzLCBDYXRlZ29yeSwgU2VjdGlvbiwgRGlzcGxheUdyb3VwLCBFdmFsRGltZW5zaW9uIH0gZnJvbSAnLi90ZW1wbGF0ZXMnO1xuXG5leHBvcnQgY29uc3QgU2lkZVBhbmVsQ29udHJvbFZpZXdUeXBlID0gJ2ZlZWRiYWNrLWFzc2lzdGFudC12aWV3JztcblxudHlwZSBBY3RpdmVWaWV3ID0ge1xuICBjYXRlZ29yeUlkeDogbnVtYmVyO1xuICBzZWN0aW9uSWR4OiBudW1iZXIgfCBudWxsO1xufTtcblxuZXhwb3J0IGNsYXNzIFNpZGVQYW5lbENvbnRyb2xWaWV3IGV4dGVuZHMgSXRlbVZpZXcge1xuICBwcml2YXRlIHBsdWdpbjogVGV4dEluc2VydFBsdWdpbjtcbiAgcHJpdmF0ZSBhY3RpdmU6IEFjdGl2ZVZpZXcgPSB7IGNhdGVnb3J5SWR4OiAwLCBzZWN0aW9uSWR4OiBudWxsIH07XG5cbiAgY29uc3RydWN0b3IobGVhZjogV29ya3NwYWNlTGVhZiwgcGx1Z2luOiBUZXh0SW5zZXJ0UGx1Z2luKSB7XG4gICAgc3VwZXIobGVhZik7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICBwdWJsaWMgZ2V0Vmlld1R5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gU2lkZVBhbmVsQ29udHJvbFZpZXdUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldERpc3BsYXlUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdGZWVkYmFjayBBc3Npc3RhbnQnO1xuICB9XG5cbiAgcHVibGljIGdldEljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ3ZpZXdJY29uJztcbiAgfVxuXG4gIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xuICAgIHN1cGVyLmxvYWQoKTtcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhdygpOiB2b2lkIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lckVsLmNoaWxkcmVuWzFdO1xuICAgIGNvbnN0IHJvb3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvb3RFbC5pZCA9ICdTaWRlUGFuZVJvb3RFbGVtZW50JztcbiAgICByb290RWwuc3R5bGUucGFkZGluZyA9ICc4cHgnO1xuXG4gICAgdGhpcy5kcmF3VG9wVGFicyhyb290RWwpO1xuXG4gICAgY29udGFpbmVyLmVtcHR5KCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJvb3RFbCk7XG4gIH1cblxuICBwcml2YXRlIGRyYXdUb3BUYWJzKHJvb3RFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YWJSb3cgPSByb290RWwuY3JlYXRlRGl2KCk7XG4gICAgdGFiUm93LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgdGFiUm93LnN0eWxlLmdhcCA9ICc0cHgnO1xuICAgIHRhYlJvdy5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnOHB4JztcblxuICAgIGZlZWRiYWNrVGVtcGxhdGVzLmZvckVhY2goKGNhdCwgaWR4KSA9PiB7XG4gICAgICBjb25zdCBidG4gPSB0YWJSb3cuY3JlYXRlRGl2KCk7XG4gICAgICBidG4uc3R5bGUuZmxleCA9ICcxJztcbiAgICAgIGJ0bi5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgIGJ0bi5zdHlsZS5wYWRkaW5nID0gJzhweCAwJztcbiAgICAgIGJ0bi5zdHlsZS5mb250U2l6ZSA9ICcxNXB4JztcbiAgICAgIGJ0bi5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgYnRuLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgIGJ0bi5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNnB4JztcbiAgICAgIGJ0bi5zZXRUZXh0KGNhdC5sYWJlbCk7XG5cbiAgICAgIGlmICh0aGlzLmFjdGl2ZS5jYXRlZ29yeUlkeCA9PT0gaWR4KSB7XG4gICAgICAgIGJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gJ3ZhcigtLWludGVyYWN0aXZlLWFjY2VudCknO1xuICAgICAgICBidG4uc3R5bGUuY29sb3IgPSAndmFyKC0tdGV4dC1vbi1hY2NlbnQpJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gJ3ZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItY292ZXIpJztcbiAgICAgICAgYnRuLnN0eWxlLmNvbG9yID0gJ3ZhcigtLXRleHQtbXV0ZWQpJztcbiAgICAgIH1cblxuICAgICAgYnRuLm9uQ2xpY2tFdmVudCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlLmNhdGVnb3J5SWR4ID0gaWR4O1xuICAgICAgICB0aGlzLmFjdGl2ZS5zZWN0aW9uSWR4ID0gbnVsbDtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZHJhd1N1YlRhYnMocm9vdEVsKTtcbiAgICB0aGlzLmRyYXdDb250ZW50KHJvb3RFbCk7XG4gIH1cblxuICBwcml2YXRlIGRyYXdTdWJUYWJzKHJvb3RFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjYXQgPSBmZWVkYmFja1RlbXBsYXRlc1t0aGlzLmFjdGl2ZS5jYXRlZ29yeUlkeF07XG4gICAgaWYgKCFjYXQpIHJldHVybjtcblxuICAgIGNvbnN0IHN1YlJvdyA9IHJvb3RFbC5jcmVhdGVEaXYoKTtcbiAgICBzdWJSb3cuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBzdWJSb3cuc3R5bGUuZmxleFdyYXAgPSAnd3JhcCc7XG4gICAgc3ViUm93LnN0eWxlLmdhcCA9ICc0cHgnO1xuICAgIHN1YlJvdy5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMTBweCc7XG5cbiAgICBjYXQuc2VjdGlvbnMuZm9yRWFjaCgoc2VjLCBpZHgpID0+IHtcbiAgICAgIGNvbnN0IGJ0biA9IHN1YlJvdy5jcmVhdGVEaXYoKTtcbiAgICAgIGJ0bi5zdHlsZS5wYWRkaW5nID0gJzRweCAxMHB4JztcbiAgICAgIGJ0bi5zdHlsZS5mb250U2l6ZSA9ICcxMnB4JztcbiAgICAgIGJ0bi5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICBidG4uc3R5bGUuYm9yZGVyUmFkaXVzID0gJzRweCc7XG4gICAgICBidG4uc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlciknO1xuICAgICAgYnRuLnNldFRleHQoc2VjLmxhYmVsKTtcblxuICAgICAgaWYgKHRoaXMuYWN0aXZlLnNlY3Rpb25JZHggPT09IGlkeCkge1xuICAgICAgICBidG4uc3R5bGUuYmFja2dyb3VuZCA9ICd2YXIoLS1pbnRlcmFjdGl2ZS1hY2NlbnQtaG92ZXIpJztcbiAgICAgICAgYnRuLnN0eWxlLmNvbG9yID0gJ3ZhcigtLXRleHQtb24tYWNjZW50KSc7XG4gICAgICAgIGJ0bi5zdHlsZS5mb250V2VpZ2h0ID0gJzYwMCc7XG4gICAgICAgIGJ0bi5zdHlsZS5ib3JkZXJDb2xvciA9ICd2YXIoLS1pbnRlcmFjdGl2ZS1hY2NlbnQpJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gJ3ZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KSc7XG4gICAgICAgIGJ0bi5zdHlsZS5jb2xvciA9ICd2YXIoLS10ZXh0LW11dGVkKSc7XG4gICAgICB9XG5cbiAgICAgIGJ0bi5vbkNsaWNrRXZlbnQoKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZS5zZWN0aW9uSWR4ID0gdGhpcy5hY3RpdmUuc2VjdGlvbklkeCA9PT0gaWR4ID8gbnVsbCA6IGlkeDtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd0NvbnRlbnQocm9vdEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGNhdCA9IGZlZWRiYWNrVGVtcGxhdGVzW3RoaXMuYWN0aXZlLmNhdGVnb3J5SWR4XTtcbiAgICBpZiAoIWNhdCkgcmV0dXJuO1xuXG4gICAgY29uc3Qgc2VjdGlvbnNUb1Nob3cgPSB0aGlzLmFjdGl2ZS5zZWN0aW9uSWR4ICE9PSBudWxsXG4gICAgICA/IFtjYXQuc2VjdGlvbnNbdGhpcy5hY3RpdmUuc2VjdGlvbklkeF1dXG4gICAgICA6IGNhdC5zZWN0aW9ucztcblxuICAgIHNlY3Rpb25zVG9TaG93LmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgIHNlY3Rpb24uZ3JvdXBzLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhd0dyb3VwKHJvb3RFbCwgZ3JvdXApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGRyYXdHcm91cChyb290RWw6IEhUTUxFbGVtZW50LCBncm91cDogRGlzcGxheUdyb3VwKTogdm9pZCB7XG4gICAgY29uc3QgaGVhZGVyUm93ID0gcm9vdEVsLmNyZWF0ZURpdigpO1xuICAgIGhlYWRlclJvdy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGhlYWRlclJvdy5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XG4gICAgaGVhZGVyUm93LnN0eWxlLnBhZGRpbmcgPSAnNnB4IDRweCAycHgnO1xuICAgIGhlYWRlclJvdy5zdHlsZS5ib3JkZXJCb3R0b20gPSAnMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKSc7XG4gICAgaGVhZGVyUm93LnN0eWxlLm1hcmdpbkJvdHRvbSA9ICc0cHgnO1xuXG4gICAgY29uc3QgdGFnID0gaGVhZGVyUm93LmNyZWF0ZURpdigpO1xuICAgIHRhZy5zdHlsZS5iYWNrZ3JvdW5kID0gJ3ZhcigtLWludGVyYWN0aXZlLWFjY2VudCknO1xuICAgIHRhZy5zdHlsZS5jb2xvciA9ICd2YXIoLS10ZXh0LW9uLWFjY2VudCknO1xuICAgIHRhZy5zdHlsZS5mb250U2l6ZSA9ICcxMnB4JztcbiAgICB0YWcuc3R5bGUuZm9udFdlaWdodCA9ICc2MDAnO1xuICAgIHRhZy5zdHlsZS5wYWRkaW5nID0gJzJweCA4cHgnO1xuICAgIHRhZy5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnM3B4JztcbiAgICB0YWcuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgIHRhZy5zZXRUZXh0KGdyb3VwLmhlYWRlciArICc6Jyk7XG5cbiAgICB0YWcub25DbGlja0V2ZW50KCgpID0+IHtcbiAgICAgIGNvbnN0IGluc2VydFRleHQgPSBncm91cC50eXBlTmFtZSB8fCBncm91cC5oZWFkZXI7XG4gICAgICB0aGlzLmluc2VydFRleHQoaW5zZXJ0VGV4dCk7XG4gICAgfSk7XG5cbiAgICBpZiAoZ3JvdXAuZGltZW5zaW9ucykge1xuICAgICAgZ3JvdXAuZGltZW5zaW9ucy5mb3JFYWNoKChkaW0pID0+IHtcbiAgICAgICAgdGhpcy5kcmF3RGltZW5zaW9uKHJvb3RFbCwgZGltKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChncm91cC5pdGVtcykge1xuICAgICAgZ3JvdXAuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICB0aGlzLmRyYXdJdGVtQnV0dG9uKHJvb3RFbCwgaXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByb290RWwuY3JlYXRlRGl2KCkuc3R5bGUuaGVpZ2h0ID0gJzZweCc7XG4gIH1cblxuICBwcml2YXRlIGRyYXdEaW1lbnNpb24ocm9vdEVsOiBIVE1MRWxlbWVudCwgZGltOiBFdmFsRGltZW5zaW9uKTogdm9pZCB7XG4gICAgY29uc3QgZGltUm93ID0gcm9vdEVsLmNyZWF0ZURpdigpO1xuICAgIGRpbVJvdy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGRpbVJvdy5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XG4gICAgZGltUm93LnN0eWxlLnBhZGRpbmcgPSAnMnB4IDRweCc7XG4gICAgZGltUm93LnN0eWxlLmdhcCA9ICc2cHgnO1xuXG4gICAgY29uc3QgZGltTGFiZWwgPSBkaW1Sb3cuY3JlYXRlRGl2KCk7XG4gICAgZGltTGFiZWwuc3R5bGUuZm9udFNpemUgPSAnMTNweCc7XG4gICAgZGltTGFiZWwuc3R5bGUuZm9udFdlaWdodCA9ICc2MDAnO1xuICAgIGRpbUxhYmVsLnN0eWxlLmNvbG9yID0gJ3ZhcigtLXRleHQtbm9ybWFsKSc7XG4gICAgZGltTGFiZWwuc3R5bGUubWluV2lkdGggPSAnNzBweCc7XG4gICAgZGltTGFiZWwuc3R5bGUuZmxleFNocmluayA9ICcwJztcbiAgICBkaW1MYWJlbC5zZXRUZXh0KGRpbS5uYW1lICsgJzonKTtcblxuICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRpbVJvdy5jcmVhdGVEaXYoKTtcbiAgICBidG5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBidG5Db250YWluZXIuc3R5bGUuZmxleFdyYXAgPSAnd3JhcCc7XG4gICAgYnRuQ29udGFpbmVyLnN0eWxlLmdhcCA9ICczcHgnO1xuICAgIGJ0bkNvbnRhaW5lci5zdHlsZS5mbGV4ID0gJzEnO1xuXG4gICAgZGltLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGJ0biA9IGJ0bkNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6ICduYXYtYWN0aW9uLWJ1dHRvbicgfSk7XG4gICAgICBidG4uc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICBidG4uc3R5bGUucGFkZGluZyA9ICc0cHggOHB4JztcbiAgICAgIGJ0bi5zdHlsZS5mb250U2l6ZSA9ICcxM3B4JztcbiAgICAgIGJ0bi5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICBidG4uc3R5bGUuYm9yZGVyUmFkaXVzID0gJzRweCc7XG4gICAgICBidG4uc3R5bGUud2hpdGVTcGFjZSA9ICdub3dyYXAnO1xuICAgICAgYnRuLmFwcGVuZFRleHQoaXRlbS5sYWJlbCk7XG5cbiAgICAgIGJ0bi5vbkNsaWNrRXZlbnQoKCkgPT4ge1xuICAgICAgICB0aGlzLmluc2VydFRleHQoaXRlbS50ZXh0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3SXRlbUJ1dHRvbihyb290RWw6IEhUTUxFbGVtZW50LCBpdGVtOiB7IGxhYmVsOiBzdHJpbmc7IHRleHQ6IHN0cmluZyB9KTogdm9pZCB7XG4gICAgY29uc3QgY29udGFpbmVycyA9IEFycmF5LmZyb20ocm9vdEVsLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcubmF2LWJ1dHRvbnMtY29udGFpbmVyJykpO1xuICAgIGxldCByb3c6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGNvbnRhaW5lcnMubGVuZ3RoID4gMFxuICAgICAgPyBjb250YWluZXJzW2NvbnRhaW5lcnMubGVuZ3RoIC0gMV1cbiAgICAgIDogbnVsbDtcbiAgICBpZiAoIXJvdyB8fCByb3cucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1hY3Rpb24tYnV0dG9uJykubGVuZ3RoID49IDQpIHtcbiAgICAgIHJvdyA9IHJvb3RFbC5jcmVhdGVEaXYoeyBjbHM6ICduYXYtYnV0dG9ucy1jb250YWluZXInIH0pO1xuICAgICAgcm93LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICByb3cuc3R5bGUuZmxleFdyYXAgPSAnd3JhcCc7XG4gICAgICByb3cuc3R5bGUuZ2FwID0gJzNweCc7XG4gICAgfVxuXG4gICAgY29uc3QgYnRuID0gcm93LmNyZWF0ZURpdih7IGNsczogJ25hdi1hY3Rpb24tYnV0dG9uJyB9KTtcbiAgICBidG4uc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgYnRuLnN0eWxlLnBhZGRpbmcgPSAnNXB4IDhweCc7XG4gICAgYnRuLnN0eWxlLmZvbnRTaXplID0gJzEzcHgnO1xuICAgIGJ0bi5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgYnRuLnN0eWxlLmJvcmRlclJhZGl1cyA9ICc0cHgnO1xuICAgIGJ0bi5zdHlsZS5mbGV4ID0gJzEgMSBhdXRvJztcbiAgICBidG4uc3R5bGUubWluV2lkdGggPSAnMCc7XG4gICAgYnRuLnN0eWxlLndoaXRlU3BhY2UgPSAnbm93cmFwJztcbiAgICBidG4uYXBwZW5kVGV4dChpdGVtLmxhYmVsKTtcblxuICAgIGJ0bi5vbkNsaWNrRXZlbnQoKCkgPT4ge1xuICAgICAgdGhpcy5pbnNlcnRUZXh0KGl0ZW0udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGluc2VydFRleHQodGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgbGVhZiA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRNb3N0UmVjZW50TGVhZigpO1xuICAgIGlmIChsZWFmICYmIGxlYWYudmlldyBpbnN0YW5jZW9mIE1hcmtkb3duVmlldykge1xuICAgICAgY29uc3QgZWRpdG9yID0gbGVhZi52aWV3LmVkaXRvcjtcbiAgICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKHRleHQpO1xuICAgICAgZWRpdG9yLmZvY3VzKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBBcHAsIEVkaXRvciwgU3VnZ2VzdE1vZGFsIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IHsgZ2V0QWxsSXRlbXMsIFRlbXBsYXRlSXRlbSB9IGZyb20gJy4vdGVtcGxhdGVzJztcblxuZXhwb3J0IGNsYXNzIENvZGVTdWdnZXN0aW9uTW9kYWwgZXh0ZW5kcyBTdWdnZXN0TW9kYWw8VGVtcGxhdGVJdGVtPiB7XG4gIHByaXZhdGUgZWRpdG9yOiBFZGl0b3I7XG5cbiAgcHVibGljIHNldEVkaXRvciA9IChlZGl0b3I6IEVkaXRvcikgPT4ge1xuICAgIHRoaXMuZWRpdG9yID0gZWRpdG9yO1xuICB9O1xuXG4gIGdldFN1Z2dlc3Rpb25zKHF1ZXJ5OiBzdHJpbmcpOiBUZW1wbGF0ZUl0ZW1bXSB7XG4gICAgY29uc3QgYWxsSXRlbXMgPSBnZXRBbGxJdGVtcygpO1xuICAgIGNvbnN0IGZpbHRlckZ1bmN0aW9uID0gKGl0ZW06IFRlbXBsYXRlSXRlbSkgPT5cbiAgICAgIGl0ZW0ubGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgaXRlbS50ZXh0LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKSk7XG4gICAgcmV0dXJuIGFsbEl0ZW1zLmZpbHRlcihmaWx0ZXJGdW5jdGlvbik7XG4gIH1cblxuICByZW5kZXJTdWdnZXN0aW9uKGl0ZW06IFRlbXBsYXRlSXRlbSwgZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3Qgcm93ID0gZWwuY3JlYXRlRWwoJ2RpdicpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdjb21tYW5kLWxpc3Qtdmlldy1yb3cnKTtcblxuICAgIGNvbnN0IGxhYmVsRGl2ID0gcm93LmNyZWF0ZURpdigpO1xuICAgIGxhYmVsRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbW1hbmQtbGlzdC12aWV3LXRleHQnKTtcbiAgICBsYWJlbERpdi5zdHlsZS5mb250V2VpZ2h0ID0gJzYwMCc7XG4gICAgbGFiZWxEaXYuc2V0VGV4dChpdGVtLmxhYmVsKTtcblxuICAgIGNvbnN0IHRleHREaXYgPSByb3cuY3JlYXRlRGl2KCk7XG4gICAgdGV4dERpdi5zdHlsZS5mb250U2l6ZSA9ICcxMnB4JztcbiAgICB0ZXh0RGl2LnN0eWxlLmNvbG9yID0gJ3ZhcigtLXRleHQtbXV0ZWQpJztcbiAgICB0ZXh0RGl2LnN0eWxlLnBhZGRpbmdUb3AgPSAnMnB4JztcbiAgICB0ZXh0RGl2LnNldFRleHQoaXRlbS50ZXh0KTtcbiAgfVxuXG4gIG9uQ2hvb3NlU3VnZ2VzdGlvbihpdGVtOiBUZW1wbGF0ZUl0ZW0sIGV2dDogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQpIHtcbiAgICB0aGlzLmVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGl0ZW0udGV4dCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRpc3BsYXkgPSAoYXBwOiBBcHAsIGVkaXRvcjogRWRpdG9yKTogdm9pZCA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBuZXcgQ29kZVN1Z2dlc3Rpb25Nb2RhbChhcHApO1xuICAgIG1vZGFsLnNldEVkaXRvcihlZGl0b3IpO1xuICAgIG1vZGFsLm9wZW4oKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7XHJcbiAgQXBwLFxyXG4gIEVkaXRvcixcclxuICBNYXJrZG93blZpZXcsXHJcbiAgUGx1Z2luLFxyXG4gIFBsdWdpblNldHRpbmdUYWIsXHJcbiAgU2V0dGluZyxcclxufSBmcm9tICdvYnNpZGlhbic7XHJcblxyXG5pbXBvcnQgeyBhZGRJY29ucyB9IGZyb20gJy4vaWNvbnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBTaWRlUGFuZWxDb250cm9sVmlldyxcclxuICBTaWRlUGFuZWxDb250cm9sVmlld1R5cGUsXHJcbn0gZnJvbSAnLi9TaWRlUGFuZWxDb250cm9sVmlldyc7XHJcbmltcG9ydCB7IENvZGVTdWdnZXN0aW9uTW9kYWwgfSBmcm9tICcuL0NvbW1hbmRMaXN0Vmlldyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBsdWdpblNldHRpbmdzIHtcclxuICBzaWRlUGFuZVNpZGVMZWZ0OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBQbHVnaW5TZXR0aW5ncyA9IHtcclxuICBzaWRlUGFuZVNpZGVMZWZ0OiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRJbnNlcnRQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xyXG4gIHNldHRpbmdzOiBQbHVnaW5TZXR0aW5ncztcclxuICBwcml2YXRlIHNpZGVQYW5lbENvbnRyb2xWaWV3OiBTaWRlUGFuZWxDb250cm9sVmlldztcclxuXHJcbiAgYXN5bmMgb25sb2FkKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2xvYWRpbmcgdGV4dC1pbnNlcnQtcGx1Z2luJyk7XHJcblxyXG4gICAgYXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcclxuICAgIGFkZEljb25zKCk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlclZpZXcoU2lkZVBhbmVsQ29udHJvbFZpZXdUeXBlLCAobGVhZikgPT4ge1xyXG4gICAgICB0aGlzLnNpZGVQYW5lbENvbnRyb2xWaWV3ID0gbmV3IFNpZGVQYW5lbENvbnRyb2xWaWV3KGxlYWYsIHRoaXMpO1xyXG4gICAgICByZXR1cm4gdGhpcy5zaWRlUGFuZWxDb250cm9sVmlldztcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYWRkUmliYm9uSWNvbigndmlld0ljb24nLCAnT3BlbiBUZXh0IEluc2VydCBQYW5lbCcsICgpID0+IHtcclxuICAgICAgdGhpcy50b2dnbGVTaWRlUGFuZWxDb250cm9sVmlldygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgaWQ6ICdvcGVuLWNvbW1hbmQtc2VsZWN0b3InLFxyXG4gICAgICBuYW1lOiAnT3BlbiBDb21tYW5kIFNlbGVjdG9yJyxcclxuICAgICAgaG90a2V5czogW3sgbW9kaWZpZXJzOiBbJ0FsdCddLCBrZXk6ICdxJyB9XSxcclxuICAgICAgZWRpdG9yQ2FsbGJhY2s6IChlZGl0b3I6IEVkaXRvciwgdmlldzogTWFya2Rvd25WaWV3KSA9PiB7XHJcbiAgICAgICAgQ29kZVN1Z2dlc3Rpb25Nb2RhbC5kaXNwbGF5KHRoaXMuYXBwLCBlZGl0b3IpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBTZXR0aW5nc1RhYih0aGlzLmFwcCwgdGhpcykpO1xyXG4gIH1cclxuXHJcbiAgb251bmxvYWQoKSB7fVxyXG5cclxuICBhc3luYyBsb2FkU2V0dGluZ3MoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbihERUZBVUxUX1NFVFRJTkdTLCBhd2FpdCB0aGlzLmxvYWREYXRhKCkpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgc2F2ZVNldHRpbmdzKCkge1xyXG4gICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgdG9nZ2xlU2lkZVBhbmVsQ29udHJvbFZpZXcgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICB0aGlzLmFwcC53b3Jrc3BhY2UuZGV0YWNoTGVhdmVzT2ZUeXBlKFNpZGVQYW5lbENvbnRyb2xWaWV3VHlwZSk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3Muc2lkZVBhbmVTaWRlTGVmdCkge1xyXG4gICAgICBhd2FpdCB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVmdExlYWYoZmFsc2UpLnNldFZpZXdTdGF0ZSh7XHJcbiAgICAgICAgdHlwZTogU2lkZVBhbmVsQ29udHJvbFZpZXdUeXBlLFxyXG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhd2FpdCB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0UmlnaHRMZWFmKGZhbHNlKS5zZXRWaWV3U3RhdGUoe1xyXG4gICAgICAgIHR5cGU6IFNpZGVQYW5lbENvbnRyb2xWaWV3VHlwZSxcclxuICAgICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXBwLndvcmtzcGFjZS5yZXZlYWxMZWFmKFxyXG4gICAgICB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFNpZGVQYW5lbENvbnRyb2xWaWV3VHlwZSlbMF0sXHJcbiAgICApO1xyXG4gIH07XHJcbn1cclxuXHJcbmNsYXNzIFNldHRpbmdzVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XHJcbiAgcGx1Z2luOiBUZXh0SW5zZXJ0UGx1Z2luO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBUZXh0SW5zZXJ0UGx1Z2luKSB7XHJcbiAgICBzdXBlcihhcHAsIHBsdWdpbik7XHJcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcclxuICB9XHJcblxyXG4gIGFzeW5jIGRpc3BsYXkoKSB7XHJcbiAgICBsZXQgeyBjb250YWluZXJFbCB9ID0gdGhpcztcclxuXHJcbiAgICBjb250YWluZXJFbC5lbXB0eSgpO1xyXG5cclxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMicsIHtcclxuICAgICAgdGV4dDogJ1RleHQgSW5zZXJ0IFBsdWdpbiBTZXR0aW5ncycsXHJcbiAgICB9KTtcclxuXHJcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgLnNldE5hbWUoJ1NpZGUgUGFuZSBTaWRlJylcclxuICAgICAgLnNldERlc2MoJ0Nob29zZSBvbiB3aGljaCBzaWRlIHRoZSBTaWRlIFBhbmUgYXBwZWFycy4nKVxyXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cclxuICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJ0VudGVyIGxlZnQgb3IgcmlnaHQnKVxyXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpZGVQYW5lU2lkZUxlZnQgPyAnbGVmdCcgOiAncmlnaHQnKVxyXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaWRlUGFuZVNpZGVMZWZ0ID1cclxuICAgICAgICAgICAgICB2YWx1ZSA9PT0gJ2xlZnQnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiYWRkSWNvbiIsIk1hcmtkb3duVmlldyIsIkl0ZW1WaWV3IiwiU3VnZ2VzdE1vZGFsIiwiUGx1Z2luIiwiU2V0dGluZyIsIlBsdWdpblNldHRpbmdUYWIiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNuQyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYztBQUN6QyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDcEYsUUFBUSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDMUcsSUFBSSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBQ0Y7QUFDTyxTQUFTLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2hDLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxVQUFVLElBQUksQ0FBQyxLQUFLLElBQUk7QUFDN0MsUUFBUSxNQUFNLElBQUksU0FBUyxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyxDQUFDO0FBQ2xHLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QixJQUFJLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUMzQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekYsQ0FBQztBQXVDRDtBQUNPLFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRTtBQUM3RCxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sS0FBSyxZQUFZLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNoSCxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMvRCxRQUFRLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDbkcsUUFBUSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDdEcsUUFBUSxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDdEgsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUUsS0FBSyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQ0Q7QUFDTyxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzNDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNySCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLEVBQUUsT0FBTyxJQUFJLENBQUMs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
