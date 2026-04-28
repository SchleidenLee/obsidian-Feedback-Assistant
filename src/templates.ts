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
          ]},
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
          ]},
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
          ]},
          { header: "整体认真程度", items: [
            { label: "好", text: "整体态度认真，能跟上课堂进度" },
            { label: "一般", text: "整体认真程度一般，部分学员偶尔走神" },
          ]},
          { header: "独立练习", items: [
            { label: "好", text: "整体独立练习效率高，正确率和速度都好" },
            { label: "有进步", text: "整体独立练习效率有进步，比之前更专注" },
            { label: "需提升", text: "整体独立练习效率需要提升，精神状态不够饱满" },
            { label: "限时训练差", text: "整体限时训练正确率极低" },
            { label: "整体速度慢", text: "整体阅读速度偏慢，需要加强限时训练" },
          ]},
          { header: "作业情况", items: [
            { label: "大部分按时", text: "大部分学员按时提交作业" },
            { label: "大部分未交", text: "大部分学员作业写了但是没交" },
            { label: "整体态度好", text: "整体作业态度好，认真按时完成" },
            { label: "态度需端正", text: "整体学习态度需要端正，作业完成度不够" },
          ]},
        ],
      },
      {
        id: "class-improve",
        label: "需加强",
        groups: [
          { header: "训练", items: [
            { label: "限时训练", text: "整体限时训练正确率低，缺少高压训练" },
            { label: "高压训练", text: "缺少高压训练，限时环境下表现不佳" },
          ]},
          { header: "其他", items: [
            { label: "加强默写", text: "需要认真对待词汇默写" },
            { label: "端正态度", text: "端正学习态度，作业要按时完成" },
            { label: "提升专注", text: "需要在练习时保持专注，提高效率" },
          ]},
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
          ]},
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
          ]},
          { header: "认真程度", items: [
            { label: "非常认真", text: "非常认真，全程跟随课堂节奏" },
            { label: "认真", text: "态度认真，能跟上课堂进度" },
            { label: "一般", text: "认真程度一般，偶尔走神" },
            { label: "需加强", text: "认真程度不够，需要提醒" },
          ]},
          { header: "独立练习", items: [
            { label: "高", text: "独立练习效率高，正确率和速度都好" },
            { label: "良好", text: "独立练习效率良好，正确率不错但速度偏慢" },
            { label: "低", text: "独立练习效率低，存在发呆走神的情况" },
            { label: "有进步", text: "独立练习效率有进步，比之前更专注" },
            { label: "需提升", text: "独立练习效率需要提升，精神状态不够饱满" },
          ]},
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
          ]},
          { header: "做题习惯", items: [
            { label: "有痕迹", text: "有做题痕迹，习惯好" },
            { label: "缺痕迹", text: "缺少做题痕迹，习惯还是要养成的" },
            { label: "痕迹清晰", text: "做题痕迹清晰，关键词划分明确" },
          ]},
          { header: "作业态度", items: [
            { label: "端正", text: "学习态度端正，作业认真" },
            { label: "需端正", text: "学习态度需要端正，作业完成度不够" },
            { label: "先复习", text: "先复习笔记再写作业，习惯好" },
          ]},
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
          ]},
          { header: "表头定位", typeName: "表格填空", items: [
            { label: "好", text: "表头定位能力强" },
            { label: "弱", text: "表头定位能力弱，容易混淆" },
          ]},
          { header: "单句语法", typeName: "单句填空", items: [
            { label: "好", text: "简单句语法掌握好" },
            { label: "弱", text: "语法基础薄弱，需要加强" },
          ]},
          { header: "笔记填空", typeName: "笔记填空", items: [
            { label: "好", text: "笔记填空完成好，信息捕捉准确" },
            { label: "弱", text: "笔记填空完成度不高，信息遗漏多" },
          ]},
          { header: "摘要填空", typeName: "摘要填空", dimensions: [
            { name: "整体表现", items: [
              { label: "全对", text: "摘要填空全对，段落理解能力强" },
              { label: "正确率好", text: "摘要填空正确率好，掌握度好" },
              { label: "力不从心", text: "对高度改写的摘要填空力不从心，正确率不理想" },
            ]},
            { name: "排除法", items: [
              { label: "运用", text: "合理运用排除法" },
              { label: "未运用", text: "排除法运用不够" },
            ]},
            { name: "段落结构", items: [
              { label: "好", text: "段落结构识别定位能力强" },
              { label: "弱", text: "段落结构识别定位能力弱" },
            ]},
          ]},
          { header: "地图/流程图", typeName: "地图/流程图填空", dimensions: [
            { name: "方位词", items: [
              { label: "好", text: "方位词掌握好" },
              { label: "薄弱", text: "方位词薄弱，需要加强" },
            ]},
            { name: "流程图", items: [
              { label: "好", text: "流程图理解能力强" },
              { label: "有困难", text: "流程图理解有困难" },
            ]},
          ]},
          { header: "判断", typeName: "判断", dimensions: [
            { name: "考点识别", items: [
              { label: "清晰", text: "考点识别清晰，能准确判断" },
              { label: "不清", text: "考点识别不清晰" },
              { label: "有基础", text: "具备一定识别考点的能力" },
            ]},
            { name: "No/NG区分", items: [
              { label: "好", text: "No和NG区分能力强" },
              { label: "混淆", text: "No和NG区分有问题，正确率待提升" },
            ]},
            { name: "判断依据", items: [
              { label: "充分", text: "判断依据充分，定位准确" },
              { label: "不足", text: "判断依据不足，定位能力有待提高" },
            ]},
            { name: "定位", items: [
              { label: "好", text: "定位能力强" },
              { label: "不足", text: "定位能力不足导致错误" },
            ]},
            { name: "做题痕迹", items: [
              { label: "无痕迹全对", text: "没有做题痕迹但全对了，要注意养成习惯" },
            ]},
          ]},
          { header: "选择", typeName: "选择", dimensions: [
            { name: "细节题", items: [
              { label: "好", text: "细节题做得好，能抓住关键信息" },
              { label: "弱", text: "细节题正确率偏低，需要加强" },
            ]},
            { name: "主旨题", items: [
              { label: "好", text: "主旨题做得好，能把握文章中心" },
              { label: "弱", text: "主旨题正确率偏低，需要加强" },
            ]},
            { name: "题型区分", items: [
              { label: "清晰", text: "能区分细节题和主旨题" },
              { label: "混淆", text: "细节题和主旨题容易混淆" },
            ]},
          ]},
          { header: "人名配信息", typeName: "人名配信息", items: [
            { label: "好", text: "人名配信息完成好，细节信息识别准确" },
            { label: "弱", text: "人名配信息完成度不高" },
          ]},
          { header: "段落配信息", typeName: "段落配信息", dimensions: [
            { name: "关键词划分", items: [
              { label: "好", text: "关键词划分清晰，正确率好，能识别同义替换" },
              { label: "待提升", text: "关键词选的不好，不具有限定意义，正确率偏低" },
            ]},
            { name: "同义替换", items: [
              { label: "好", text: "识别同义替换的能力强" },
              { label: "弱", text: "识别同义替换的能力能提高" },
            ]},
            { name: "细节识别", items: [
              { label: "好", text: "细节信息识别准确，题型特点掌握好" },
              { label: "待提升", text: "细节信息识别能力需要提高" },
            ]},
            { name: "完成度", items: [
              { label: "好", text: "段落配信息完成好，正确率良好" },
              { label: "差", text: "段落配信息完成度不高" },
            ]},
          ]},
          { header: "半句匹配", typeName: "半句匹配", items: [
            { label: "好", text: "半句匹配完成好，逻辑关系理解准确" },
            { label: "弱", text: "半句匹配完成度不高，逻辑关系理解有困难" },
          ]},
          { header: "标题匹配", typeName: "段落标题匹配", items: [
            { label: "好", text: "段落配标题完成好，概括能力强" },
            { label: "弱", text: "段落配标题完成度不高，概括能力有待提高" },
          ]},
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
            ]},
            { name: "选词", items: [
              { label: "合理", text: "选词合理，定位准确" },
              { label: "不合理", text: "选词不合理，定位效果不好" },
            ]},
          ]},
          { header: "关键词划分", typeName: "关键词划分", dimensions: [
            { name: "划分质量", items: [
              { label: "好", text: "关键词划分合理清晰" },
              { label: "模糊", text: "关键词划分模糊，不够精准" },
            ]},
            { name: "找参照物", items: [
              { label: "好", text: "找参照物能力强" },
              { label: "弱", text: "找参照物能力弱" },
            ]},
          ]},
          { header: "扫读", typeName: "扫读", dimensions: [
            { name: "速度", items: [
              { label: "快", text: "扫读速度快，找关键词能力强" },
              { label: "慢", text: "扫读速度慢，需要提升" },
            ]},
            { name: "找关键词", items: [
              { label: "强", text: "扫读找关键词能力强" },
              { label: "弱", text: "扫读找关键词能力弱" },
            ]},
          ]},
          { header: "略读", typeName: "略读", dimensions: [
            { name: "方法", items: [
              { label: "掌握好", text: "略读方法掌握好，能快速把握主旨" },
              { label: "待提升", text: "略读方法待提升，阅读效率不够" },
            ]},
            { name: "总结概括", items: [
              { label: "强", text: "总结概括能力强" },
              { label: "弱", text: "总结概括能力弱，需要加强" },
            ]},
          ]},
          { header: "同义替换", typeName: "同义替换", dimensions: [
            { name: "简单替换", items: [
              { label: "好", text: "简单替换识别能力强" },
              { label: "弱", text: "简单替换识别能力弱" },
            ]},
            { name: "改写类替换", items: [
              { label: "好", text: "改写类替换识别能力强" },
              { label: "弱", text: "改写类替换识别能力弱，对高度改写敏感" },
            ]},
            { name: "预测", items: [
              { label: "强", text: "同义替换预测能力强" },
              { label: "弱", text: "同义替换预测能力弱" },
            ]},
          ]},
          { header: "长难句", typeName: "长难句", dimensions: [
            { name: "主干识别", items: [
              { label: "好", text: "能识别长难句主干" },
              { label: "弱", text: "不太理解主干概念" },
            ]},
            { name: "整体理解", items: [
              { label: "强", text: "长难句理解能力强" },
              { label: "吃力", text: "长难句理解吃力，阅读有困难" },
              { label: "有进步", text: "长难句理解有进步" },
            ]},
          ]},
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
          ]},
          { header: "独立练习", items: [
            { label: "出色", text: "独立练习完成出色，时间和正确率都很棒" },
            { label: "有进步", text: "独立练习有很大进步，正确率保持高水平" },
            { label: "良好", text: "独立练习正确率良好，但速度不够快" },
          ]},
          { header: "翻译", typeName: "翻译", items: [
            { label: "吃力", text: "翻译起来吃力" },
            { label: "慢", text: "单句翻译需要时间思考，考场上时间不够用" },
            { label: "有进步", text: "翻译能力有进步" },
            { label: "点名好", text: "点名的翻译做得很好" },
          ]},
          { header: "词汇语感", typeName: "词汇语感", dimensions: [
            { name: "猜词", items: [
              { label: "好", text: "猜词做得很好，有点语感" },
              { label: "弱", text: "猜词能力弱，语感不够" },
            ]},
            { name: "基础", items: [
              { label: "扎实", text: "词汇基础扎实" },
              { label: "薄弱", text: "词汇基础不够扎实" },
              { label: "有进步", text: "词汇掌握有进步" },
            ]},
          ]},
          { header: "入门测", typeName: "入门测", items: [
            { label: "定位没问题", text: "填空题定位能力没有问题" },
            { label: "词汇良好", text: "词汇掌握良好" },
            { label: "正确率高", text: "表现良好，正确率高" },
            { label: "一般", text: "入门测表现一般" },
            { label: "待提升", text: "入门测表现需要提升" },
          ]},
        ],
      },
      {
        id: "stu-improve",
        label: "需加强",
        groups: [
          { header: "词汇", items: [
            { label: "加强背诵", text: "词汇基础不够扎实，建议加强基础词汇背诵巩固" },
            { label: "加强默写", text: "需要认真对待词汇默写" },
          ]},
          { header: "训练", items: [
            { label: "限时训练", text: "限时训练正确率低，缺少高压训练" },
            { label: "阅读速度", text: "阅读速度偏慢，需要加强限时训练" },
          ]},
          { header: "习惯", items: [
            { label: "做题痕迹", text: "养成做题痕迹的习惯" },
            { label: "端正态度", text: "端正学习态度，作业要按时完成" },
          ]},
          { header: "技巧", items: [
            { label: "定位能力", text: "定位能力需要加强" },
            { label: "同义替换", text: "同义替换识别能力需要加强" },
            { label: "长难句", text: "长难句理解能力需要加强" },
            { label: "检查步骤", text: "需要有检查步骤，避免粗心错误" },
          ]},
          { header: "专注", items: [
            { label: "保持专注", text: "需要在练习时保持专注，提高效率" },
          ]},
        ],
      },
    ],
  },
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
      });
    });
  });
  return items;
}
