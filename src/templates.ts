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
  subgroups?: SubGroup[];
}

export interface SubGroup {
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
          ]},
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
            ]},
            { name: "个人", items: [
              { label: "电子产品", text: "个别同学纪律有问题，上课使用电子产品" },
              { label: "偏离课堂", text: "个别学员纪律有问题，课上干无关的事" },
              { label: "有进步", text: "个人纪律有进步，表现改善" },
            ]},
          ]},
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
            ]},
            { name: "个人", items: [
              { label: "沉闷", text: "个别学员状态低迷，参与度低，需要调整学习状态" },
              { label: "活跃", text: "个别学员非常积极活跃，表现突出" },
            ]},
          ]},
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
            ]},
            { name: "个人", items: [
              { label: "好", text: "个别学员课堂表现突出，学习效率高" },
              { label: "一般", text: "个别学员学习效率偏低，需要注意" },
            ]},
          ]},
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
          ]},
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
          { header: "出勤", items: [
            { label: "迟到", text: "学员迟到，无早退，正常出勤" },
            { label: "早退", text: "学员早退，正常出勤" },
            { label: "请假", text: "学员请假" },
            { label: "正常", text: "学员正常出勤，无迟到早退" },
          ]},
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
            ]},
            { name: "质量", items: [
              { label: "高", text: "有复习动作，上节课生词语法掌握好，正确率很高" },
              { label: "中", text: "表现良好，有少量错误，上节课总体吸收度良好" },
              { label: "低", text: "缺少课后复习动作，完成度有待提高" },
            ]},
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
            { label: "非常认真", text: "听课和笔记非常认真，全程跟随课堂节奏" },
            { label: "认真", text: "态度认真，能跟上课堂进度" },
            { label: "一般", text: "认真程度一般，偶尔走神" },
            { label: "需加强", text: "认真程度不够，需要提醒" },
            { label: "明显提升", text: "专注度有很大进步" },
            { label: "有进步", text: "专注度有进步" },
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
          { header: "提交状态", typeName: "提交状态", subgroups: [
            { header: "按时提交", dimensions: [
              { name: "", items: [
                { label: "认真", text: "按时提交，认真" },
                { label: "态度非常好", text: "按时提交，态度非常好，非常认真" },
                { label: "复习", text: "按时提交，态度非常好，先复习再做的作业" },
                { label: "糊弄", text: "按时提交，但是缺少做题勾画痕迹" },
              ]},
            ]},
            { header: "未按时交", dimensions: [
              { name: "", items: [
                { label: "写了没交", text: "按时完成，但未按时提交" },
                { label: "没按时交", text: "没按时交" },
              ]},
            ]},
            { header: "缺交/部分", dimensions: [
              { name: "", items: [
                { label: "缺交", text: "作业缺交" },
                { label: "部分完成", text: "部分完成，未全部完成" },
              ]},
            ]},
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
          { header: "填空题", typeName: "填空题", subgroups: [
            { header: "词性", dimensions: [
              { name: "", items: [
                { label: "良好", text: "无词性错误，有预测和检查动作" },
                { label: "待提高", text: "有词性错误，缺少预测和检查步骤" },
              ]},
            ]},
            { header: "词数", dimensions: [
              { name: "", items: [
                { label: "待提高", text: "没注意到词数限制的规定" },
              ]},
            ]},
            { header: "精确预测", dimensions: [
              { name: "", items: [
                { label: "良好", text: "能利用关键词做出精确预测" },
                { label: "待提高", text: "无法做出精确预测帮助缩小范围" },
              ]},
            ]},
            { header: "表格填空", dimensions: [
              { name: "表头定位", items: [
                { label: "好", text: "表头定位能力强" },
                { label: "弱", text: "没有利用表头定位的意识" },
              ]},
            ]},
            { header: "笔记填空", dimensions: [
              { name: "", items: [
                { label: "好", text: "笔记填空完成好，信息捕捉准确" },
                { label: "弱", text: "笔记填空完成度不高，信息遗漏多" },
              ]},
            ]},
            { header: "摘要填空", dimensions: [
              { name: "整体表现", items: [
                { label: "全对", text: "摘要填空正确率高，段落理解能力强" },
                { label: "正确率好", text: "摘要填空正确率好，掌握度好" },
                { label: "待提高", text: "对高度改写的摘要填空力不从心，正确率不理想" },
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
            { header: "地图填空", dimensions: [
              { name: "方位词", items: [
                { label: "好", text: "方位词掌握好" },
                { label: "薄弱", text: "方位词薄弱，需要加强" },
              ]},
            ]},
          ]},
          { header: "判断题", typeName: "判断题", dimensions: [
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
            { name: "定位能力", items: [
              { label: "好", text: "定位能力强" },
              { label: "不足", text: "定位能力不足导致错误" },
            ]},
            { name: "做题痕迹", items: [
              { label: "无痕迹全对", text: "没有做题痕迹但全对了，要注意养成习惯" },
            ]},
          ]},
          { header: "选择题", typeName: "选择题", dimensions: [
            { name: "细节题", items: [
              { label: "好", text: "细节题做得好，能抓住关键信息" },
              { label: "弱", text: "细节题正确率偏低，需要加强" },
            ]},
            { name: "主旨题", items: [
              { label: "好", text: "主旨题做得好，略读方法掌握好" },
              { label: "弱", text: "主旨题正确率偏低，需要加强" },
            ]},
            { name: "题型区分", items: [
              { label: "清晰", text: "能区分细节题和主旨题" },
              { label: "混淆", text: "细节题和主旨题容易混淆" },
            ]},
          ]},
          { header: "人名配信息", typeName: "人名配信息", items: [
            { label: "好", text: "人名配信息完成好，细节信息识别准确" },
            { label: "弱", text: "人名配信息完成度不高，题型特点未掌握" },
          ]},
          { header: "段落配信息", typeName: "段落配信息", dimensions: [
            { name: "关键词划分", items: [
              { label: "好", text: "关键词划分清晰，正确率好，能识别同义替换" },
              { label: "待提升", text: "关键词划分不合理，不具有限定意义，正确率偏低" },
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
          { header: "段落标题匹配", typeName: "段落标题匹配", items: [
            { label: "好", text: "段落配标题完成好，略读能力强" },
            { label: "弱", text: "段落配标题完成度不高，略读概括主旨概括能力有待提高" },
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
            { name: "选词合理性", items: [
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
          { header: "扫读技巧", typeName: "扫读技巧", dimensions: [
            { name: "速度", items: [
              { label: "快", text: "扫读速度快，找关键词能力强" },
              { label: "慢", text: "扫读速度慢，需要提升" },
            ]},
            { name: "找关键词", items: [
              { label: "强", text: "扫读找关键词能力强" },
              { label: "弱", text: "扫读找关键词能力弱" },
            ]},
          ]},
          { header: "略读技巧", typeName: "略读技巧", dimensions: [
            { name: "方法掌握", items: [
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
            { name: "预测能力", items: [
              { label: "强", text: "同义替换预测能力强" },
              { label: "弱", text: "同义替换预测能力弱" },
            ]},
          ]},
          { header: "长难句分析", typeName: "长难句分析", dimensions: [
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
          { header: "语法基础", typeName: "语法基础", items: [
            { label: "过硬", text: "语法非常过硬" },
            { label: "简单句好", text: "简单句的语法掌握得很好" },
            { label: "基础薄弱", text: "语法基础薄弱，需要加强" },
          ]},
          { header: "翻译能力", typeName: "翻译能力", items: [
            { label: "吃力", text: "翻译起来吃力" },
            { label: "慢", text: "单句翻译需要时间思考，考场上时间不够用" },
            { label: "有进步", text: "翻译能力有进步" },
            { label: "点名好", text: "点名的翻译做得很好" },
          ]},
          { header: "词汇语感", typeName: "词汇语感", dimensions: [
            { name: "猜词能力", items: [
              { label: "好", text: "猜词做得很好，有点语感" },
              { label: "弱", text: "猜词能力弱，语感不够" },
            ]},
            { name: "词汇基础", items: [
              { label: "扎实", text: "词汇基础扎实" },
              { label: "薄弱", text: "词汇基础不够扎实" },
              { label: "有进步", text: "词汇掌握有进步" },
            ]},
          ]},
          { header: "独立练习表现", typeName: "独立练习表现", dimensions: [
            { name: "速度", items: [
              { label: "快", text: "独立练习速度快" },
              { label: "良好", text: "独立练习速度良好" },
              { label: "慢", text: "独立练习速度偏慢" },
            ]},
            { name: "质量", items: [
              { label: "高", text: "独立练习质量高" },
              { label: "中", text: "独立练习质量中等" },
              { label: "低", text: "独立练习质量偏低" },
            ]},
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
          { header: "专注力", items: [
            { label: "保持专注", text: "需要在练习时保持专注，提高效率" },
          ]},
        ],
      },
    ],
  },
  {
    id: "content",
    label: "授课内容",
    sections: [
      {
        id: "content-level1-textbook",
        label: "初级教材",
        groups: [
          { header: "Unit 1", items: [{ label: "Unit 1", text: "##### Unit 1 Relationship and Family 家庭与亲友关系\n\n#### 📚 课本内容\n- 了解 Family Tree 的结构与亲友关系\n- 了解 nuclear family（核心家庭）和 extended family（大家庭）的概念\n- 积累相应的话题词汇\n\n#### 📖 阅读技巧\n- 练习**扫读**的阅读技巧\n- 三种**猜词技巧**和**词根词缀**讲解\n\n#### 🔤 基础技能\n- **定位词**划分\n- 同义替换词的识别练习\n\n#### 📝 题型解析\n\n**通用做题步骤**\n1. 划关键词\n2. 定位\n3. 解题\n\n**简答题**\n- 文章原词填空\n- 注意词数限制\n- 特殊疑问词做预测（词性、词义）\n- 检查词性词数\n\n#### 🔤 语法点\n\n**1. 一般现在时**\n- 频度或习惯动作\n- 客观事实与普遍真理\n- 补充：第0条件句（zero conditional）\n\n**2. 频度副词**\n- 频度副词的频率数轴\n- 频度副词在句中的位置：be 动词后，实义动词前，两个动词夹中间" }] },
          { header: "Unit 2", items: [{ label: "Unit 2", text: "##### Unit 2 Amazing Homes 奇妙的房屋\n\n#### 🔄 复习\n- 阅读方法：扫读，读关键词\n- 定位词划分：四类特殊词\n- 题型：通用步骤，简答题\n- 语法：一般现在时（两种情况、zero conditional）、频度副词在句中的位置\n\n#### 📚 课本内容\n- 了解世界各地的不同寻常的房子\n- 了解科普类文章的文章结构\n- 积累房屋相关的话题词汇\n\n#### 📖 阅读技巧\n- 复习**扫读**的阅读技巧\n- 学习新的阅读技巧：**略读**\n\n#### 🔤 基础技能\n- 句子和句子的**同义替换练习**\n\n#### 📝 题型解析\n\n**通用做题步骤**（复习）\n1. 划关键词\n2. 定位\n3. 解题\n\n**填空题（与简答题联动）**\n- 文章原词填空\n- 注意词数限制\n- 特殊疑问词做预测（词性、词义）\n- 检查词性词数\n\n#### 🔤 语法点\n\n**1. 一般过去时**\n- 过去发生的动作\n- 时间状语识别" }] },
          { header: "Unit 3", items: [{ label: "Unit 3", text: "##### Unit 3 Employment and Education 工作与教育\n\n#### 🔄 复习\n- 阅读方法：扫读（细节、关键词）、略读（主旨、段首）\n- 话题词汇：房屋\n- 题型：填空题与简答题\n- 语法：zero conditional、一般过去式\n\n#### 📚 课本内容\n- 了解教育全球化的概念\n- 积累相应的话题词汇（工作与学习）\n\n#### 📖 阅读技巧\n- 略读练习：技巧练习，总结文章结构、作者情感态度\n\n#### 📝 题型解析\n\n**单选题**\n- 画关键词（选项和题目关键词）\n- 定位\n- 解题\n  - 可以预测答案\n  - 结合略读技巧\n\n#### 🔤 语法点\n\n**1. 现在完成时**\n- 过去发生的事对现在有影响\n- 过去持续到现在的动作\n- for 和 since 的用法\n- 过去的经历" }] },
          { header: "Unit 4", items: [{ label: "Unit 4", text: "#### Unit 4 Food and Drinks 食物与饮品\n\n##### 📚 课本内容\n- 了解有关食物不同维度的知识与不同的饮食文化\n- 积累相应的话题词汇\n\n##### 📖 阅读技巧\n1. 强化应用略读读主旨的方法与短期记忆能力\n2. 复习阅读流程（标题 → 副标题 → 段落内容）\n3. 同义替换积累\n4. 关键信息扫读练习\n5. 后置定语翻译练习\n\n##### 📝 题型解析\n\n**通用做题方法**：keywords做题法复习\n\n**人名配信息**\n1. 划关键词（题干信息点）\n2. 扫读定位（选项人名顺序）\n3. 按人名顺序阅读对比选择\n\n##### 🔤 语法点\n\n**1. 可数名词与不可数名词**\n- 定义\n- 二象性特殊情况总结归纳\n\n**2. 数量修饰词的用法**" }] },
          { header: "Unit 5", items: [{ label: "Unit 5", text: "#### Unit 5 Malls 商场\n\n##### 📚 课本内容\n- 了解商场的演化过程以及未来的发展方向\n- 积累相应的话题词汇\n- 积累一些关于商场活动的动词短语\n\n##### 📖 阅读技巧\n1. 强化应用略读读主旨的方法\n2. 复习阅读流程（标题 → 副标题 → 段落内容）\n3. 同义替换积累\n4. 段落理解（论点加论据）\n\n##### 📝 题型解析\n\n**通用做题方法**：keywords做题法复习\n\n**段落配标题**\n1. 划关键词（标题）\n2. 略读段落\n3. 对比选择\n\n##### 🔤 语法点\n\n**1. 一般将来时**\n- will 和 be going to 的辨析" }] },
          { header: "Unit 6", items: [{ label: "Unit 6", text: "#### Unit 6 Sports 运动\n\n##### 📚 课本内容\n- 了解一些古今中外的传统运动以及特殊的运动\n- 积累相应的话题词汇\n- 积累一些关于运动项目的动词短语和描述性短语\n\n##### 📖 阅读技巧\n1. 复习略读的阅读方法\n2. 复习阅读流程（标题 → 副标题 → 段落内容）\n3. 同义替换积累\n4. 段落理解（说明文的总分结构）\n\n##### 📝 题型解析\n\n**通用做题方法**：keywords做题法复习\n\n**TF 判断题**\n1. 划关键词\n   - 题干信息理解\n2. 扫读关键词\n3. 对比判断\n   - 难点：False 和 Not given 的辨析\n\n**摘要填空**\n- 两种填空题类型：有选项和无选项\n1. 划关键词（围绕空画关键词）\n2. 扫读关键词（用段落信息去定位）\n3. 对比选择" }] },
          { header: "Unit 7", items: [{ label: "Unit 7", text: "#### Unit 7 Famous and Rich through Internet 互联网成名\n\n##### 📚 课本内容\n- 了解如何通过互联网出名\n- 了解一些国内外的社交媒体网站和 app\n- 积累相应的话题词汇\n\n##### 📖 阅读技巧\n- 考试中的阅读提速技巧：标题/副标题阅读 → 题目阅读\n- 题目阅读练习\n\n##### 📝 题型解析\n\n**人名配信息**\n- 题型解析\n- 做题技巧\n  - 用人名定位\n  - 如何划题干关键词\n- 注意事项\n  - 不定项选择\n\n**Yes/No 判断**\n- 题型解析：观点判断\n- 做题技巧\n  - 判断情感态度词\n  - 情感态度和客观事实的辨析\n- 注意事项\n  - 区分 no 和 not given" }] },
          { header: "Unit 8", items: [{ label: "Unit 8", text: "#### Unit 8 Marine Animals 海洋动物\n\n##### 📚 课本内容\n- 了解海洋动物（海豚、鲸鱼）对人类的保护行为\n- 积累相应的话题词汇\n\n##### 📖 阅读技巧\n- 考试中的阅读提速技巧：标题/副标题阅读 → 题目阅读\n- 题目阅读练习\n\n##### 📝 题型解析\n\n**句子填空**\n- 题型解析\n- 做题技巧\n  - 围绕空画关键词\n- 注意事项\n  - 词数限制，词性检查\n\n##### 🔄 词汇扩展与复习\n- 词汇复习\n- 后续课程规划" }] },
        ],
      },
      {
        id: "content-level1-handout",
        label: "初级讲义",
        groups: [
          { header: "Unit 1", items: [{ label: "Unit 1", text: "#### Unit 1 Culture Shock 文化冲击\n\n##### 📚 课本内容\n- 了解文化冲击的概念\n- 澳大利亚人的文化习惯\n- 文化冲击的四个阶段\n- 积累相应的话题词汇\n\n##### 📖 阅读技巧\n- 考试中的阅读提速技巧：标题/副标题阅读 → 题目阅读\n- 题目阅读练习\n\n##### 📝 题型解析\n\n**TF判断题**\n- 题型解析\n- 做题技巧\n- 注意事项\n\n**表格填空题**\n- 题型解析\n- 做题技巧\n- 注意事项\n\n##### 🔤 语法点\n- 部分词根词缀详解\n- 长难句分析的三个步骤\n  - 谓语动词和非谓语动词的划分\n  - 插入语解析" }] },
          { header: "Unit 2", items: [{ label: "Unit 2", text: "#### Unit 2 Organic Food 有机食品\n\n##### 📚 课本内容\n- 了解有机食品的优点与缺点\n- 理解有机食品背后的局限性\n- 积累相应的话题词汇\n\n##### 🔄 复习\n- 复习上节课讲的阅读技法和题型特点\n\n##### 📖 阅读技巧\n- 略读详解\n  - 首二句\n  - 段中转折\n  - 结尾总结\n\n##### 📝 题型解析\n- List of headings 段落大意题\n  - 出题形式\n  - 题目特点\n  - 做题方法\n  - 课堂实践练习\n- 多选题\n  - 出题形式\n  - 题目特点\n  - 做题方法\n  - 课堂实践练习\n\n##### 🔤 语法点\n- 详细解析长难句分析的三个步骤" }] },
          { header: "Unit 3", items: [{ label: "Unit 3", text: "#### Unit 3 Language Learning 语言学习\n\n##### 📚 课本内容\n- 了解婴幼儿的语言学习规律\n- 两种不同的语言学习理论\n- 在理论帮助下改善自己的语言学习规划和习惯\n- 积累相应的话题词汇\n\n##### 🔄 复习\n- 复习上节课讲的阅读技法和题型特点\n\n##### 📖 阅读技巧\n- 练习\"标题-副标题-正文快速阅读\"的应试阅读方法\n\n##### 📝 题型解析\n- Summary Completion 摘要填空题\n  - 出题形式\n  - 题目特点\n  - 做题方法\n  - 课堂实践练习\n- 单选题\n  - 出题形式\n  - 题目特点\n  - 做题方法\n  - 课堂实践练习\n\n##### 🔤 语法点\n- 生词讲解\n- 文中长难句翻译和句子结构理解" }] },
          { header: "Unit 4", items: [{ label: "Unit 4", text: "#### Unit 4 World Wide Web 万维网\n\n##### 📚 课本内容\n- 了解万维网的原理、起源和发展过程\n- 扩充对 media 和 internet 的理解\n- 积累相应的话题词汇\n\n##### 🔄 复习\n- 复习上节课讲的阅读技法和题型特点\n- 复习上节课的生词\n\n##### 📝 题型解析\n- Note Completion 笔记填空题\n  - 出题形式\n  - 题目特点\n  - 做题方法\n  - 课堂实践练习\n- 简答题\n  - 出题形式\n  - 题目特点\n  - 做题方法\n  - 课堂实践练习\n- 辨析 Yes/No/Not Given 和 True/False/Not Given 的区别\n\n##### 🔤 语法点\n- 生词讲解\n- 非谓语动词作后置定语\n- 主语从句\n- 长难句分析步骤复习" }] },
          { header: "Unit 5", items: [{ label: "Unit 5", text: "#### Unit 5 Sahara Solar Power Plants 撒哈拉太阳能发电\n\n##### 📚 课本内容\n- 了解撒哈拉沙漠的太阳能潜力\n- 新型太阳能发电装置\n- 撒哈拉沙漠太阳能利用的技术难题\n- 积累相应的话题词汇\n\n##### 🔄 复习\n- 复习上节课讲的阅读技法和题型特点\n- 复习上节课的生词\n\n##### 📖 阅读技巧\n- 自主练习快速阅读与长难句阅读翻译\n\n##### 📝 题型解析\n- Which paragraph contains 段落信息匹配题\n  - 出题形式\n  - 题目特点\n  - 做题方法\n  - 课堂实践练习\n- Matching names 人名匹配题\n  - 出题形式\n  - 题目特点\n  - 做题方法\n  - 课堂实践练习\n- 讲解雅思阅读中的同义替换的不同类型\n\n##### 🔤 语法点\n- 部分词根词缀的精细讲解\n- 猜词讲解" }] },
          { header: "Unit 6", items: [{ label: "Unit 6", text: "#### Unit 6 Shopping Psychology 消费心理学\n\n##### 📚 课本内容\n- 了解消费心理学的概念\n- 零售超市对消费心理学的具体运用\n- 积累相应的话题词汇\n\n##### 🔄 复习\n- 复习上节课讲的阅读技法和题型特点\n- 复习上节课的生词\n\n##### 📖 阅读技巧\n- 继续巩固独立练习快速阅读技巧\n\n##### 📝 题型解析\n- Diagram gapfill 图表填空题\n  - 地图填空\n  - 流程图填空\n  - 出题形式\n  - 题目特点\n  - 做题方法\n  - 课堂实践练习\n- 详解该题型与阅读、写作题型的互通性\n\n##### 🔤 语法点\n- 词根词缀精讲\n- 长难句分析实操" }] },
          { header: "Unit 7", items: [{ label: "Unit 7", text: "#### Unit 7 Truth of Lying 谎言的真相\n\n##### 📚 课本内容\n- 了解谎言在自然界的普遍性与自发性\n- 人们对测谎的一些误区\n- 如何正确测谎\n- 积累相应的话题词汇\n\n##### 🔄 复习\n- 复习上节课讲的阅读技法和题型特点\n- 复习上节课的生词\n\n##### 📖 阅读技巧\n- 继续巩固独立练习快速阅读技巧\n\n##### 📝 题型解析\n- Matching paragraph headings 段落大意匹配题\n  - 出题形式\n  - 题目特点\n  - 做题方法\n  - 课堂实践练习\n- Matching names 人名匹配题\n  - 出题形式\n  - 题目特点\n  - 做题方法\n  - 课堂实践练习\n- 详解匹配题型之间的互通性\n\n##### 🔤 语法点\n- 词根词缀精讲\n- 长难句分析实操" }] },
          { header: "Unit 8", items: [{ label: "Unit 8", text: "#### Unit 8 Fashion and Clothes 时尚与服饰\n\n##### 📚 课本内容\n- 了解不同国家人民的代表性服饰\n- 介绍一件戏服的来历与修复工作\n- 积累相应的话题词汇\n\n##### 🔄 复习\n- 复习上节课讲的阅读技法和题型特点\n- 复习上节课的生词\n\n##### 📖 阅读技巧\n- 继续巩固独立练习快速阅读技巧\n\n##### 📝 题型解析\n- Matching sentence endings 句子结尾匹配题（新题型）\n- 整体复习之前所学的所有题型各自的特点与应对方法\n\n##### 🔤 语法点\n- 词根词缀精讲\n- 长难句分析实操" }] },
        ],
      },
      {
        id: "content-level2-textbook",
        label: "中级教材",
        groups: [
          { header: "Unit 1", items: [{ label: "Unit 1", text: "#### Unit 1 The MIT Factor 麻省理工学院\n\n##### 📚 课本内容\n- 介绍麻省理工学院的历史、特色与全球影响力\n- 大学教育相关话题词汇积累（campus, tuition, alumni, faculty等）\n- 了解世界顶尖学府的选拔标准与教育模式\n\n##### 📖 阅读技巧\n- **介绍类说明文的通用结构**：逻辑顺序（时间顺序/空间顺序/重要性顺序）\n- **题干信息推原文结构**：通过题目预判文章组织架构\n- **例子类信息识别**：\n  - 特点：具体信息扎堆出现，细节丰富\n  - 作用：引出后文观点，作为论据论证主旨\n  - 定位技巧：例子前后必有观点句\n\n##### 🔤 基础技能\n- 扫读定位（Scanning）：快速寻找特定信息\n- 特殊词定位法：大写、数字、时间、专有名词\n\n##### 📝 题型解析\n\n**判断题（True/False/Not Given）**\n- 考点识别：绝对词、比较关系、因果关系\n- 定位技巧：出题顺序原则\n- 难点辨析：False vs Not Given\n\n**笔记填空（Note Completion）**\n- 结构层次对应：笔记层级与文章段落匹配\n- 同义替换识别：题干关键词与原文改写\n- 词性预判：根据上下文判断空格词性\n\n**简答题（Short Answer）**\n- 特殊疑问词预测：问什么答什么（what/why/how）\n- 字数限制：严格控制在要求范围内\n- 原文原词：直接摘录，无需改写\n\n##### 🔤 语法点\n- **长难句分析**：如何找谓语动词\n  - 谓语动词特征：时态、语态、情态\n  - 非谓语动词识别：to do/doing/done\n- **非谓语动词解析**：\n  - 不定式（to do）：表目的、将来\n  - 动名词（doing）：表主动、进行\n  - 过去分词（done）：表被动、完成" }] },
          { header: "Unit 2", items: [{ label: "Unit 2", text: "#### Unit 2 Color My World 儿童色彩认知\n\n##### 📚 课本内容\n- 介绍儿童学习颜色的认知困难与心理机制\n- 实验类文章的话题词汇积累（experiment, hypothesis, subject, control group等）\n- 了解儿童语言发展与认知心理学基础\n\n##### 📖 阅读技巧\n- **假说论证类文章通用结构**：\n  1. 发现问题（Research Question）\n  2. 提出假说（Hypothesis）+ 理论论证\n  3. 设计实验（Experiment Design）\n  4. 进行实验（Procedure）\n  5. 实验结果（Results）\n  6. 结论讨论（Conclusion）\n- 实验类文章定位技巧：找\"人名+年份\"或\"research/show/study\"\n\n##### 🔤 基础技能\n- 长难句阅读理解与摘要提取\n- 题感培养：识别\"一眼错\"选项的特征\n  - 绝对化表述（must/never/only）\n  - 无中生有信息\n  - 与原文矛盾的内容\n- 略读法（Skimming）复习：首二句+转折+结尾\n\n##### 📝 题型解析\n\n**有词库摘要填空（Summary with Word Bank）**\n- 词库分类：先按词性分类（名词/动词/形容词）\n- 干扰项排除：利用排除法缩小范围\n- 上下文逻辑：确保填入后语义通顺\n\n**多选题（Multiple Choice - Multiple Answers）**\n- 选项逐一验证：每个选项回原文确认\n- 排除法应用：确定错误选项后排除\n- 答案数量：注意题目要求的选项个数\n\n**段落配标题（List of Headings）**\n- 略读技巧：读首二句+段中转折+结尾句\n- 主旨句识别：重复词、总结词、观点句\n- 干扰项辨析：细节vs主旨，以偏概全" }] },
          { header: "Unit 3", items: [{ label: "Unit 3", text: "#### Unit 3 Placebo 安慰剂效应\n\n##### 📚 课本内容\n- 了解药物上市流程（临床试验阶段I-III）\n- 安慰剂效应的原理、机制与医学伦理影响\n- 医疗健康类话题词汇积累（placebo, clinical trial, side effect, efficacy等）\n\n##### 📖 阅读技巧\n- **找切口法**：以略读为基础，定位最容易拆解的段落\n  - 找\"切口\"特征：段落短、结构清晰、有明确信号词\n  - 上下扩展：从切口向前后文延伸理解\n- 医学类文章结构：背景→问题→研究→结论\n\n##### 🔤 基础技能\n- 抽象同义替换理解和识别\n  - 概念对应：problem = issue = challenge\n  - 动作对应：solve = address = tackle\n- 摘要中的逻辑关系理解\n  - 因果：because/therefore/as a result\n  - 转折：however/although/while\n  - 并列：and/also/in addition\n\n##### 📝 题型解析\n\n**Yes/No/Not Given判断**\n- 观点判断：基于作者态度而非客观事实\n- 情感词识别：positive/negative/neutral\n- 难点：No vs Not Given（矛盾vs未提及）\n\n**有词库摘要填空**\n- 词库预扫描：快速浏览所有选项\n- 语法搭配：空格前后词性搭配\n- 逻辑连贯：填入后检查上下文逻辑\n\n**单选题（Multiple Choice）**\n- 题干关键词定位\n- 选项逐一验证\n- 排除法应用" }] },
          { header: "Unit 4", items: [{ label: "Unit 4", text: "#### Unit 4 Posters and Art 海报艺术\n\n##### 📚 课本内容\n- 了解海报的发展历史（从宣传工具到艺术形式）\n- 积累艺术相关话题词汇（poster, exhibition, graphic design, typography等）\n- 了解艺术与社会运动的关系\n\n##### 📖 阅读技巧\n- **流水账类文本的行文逻辑**：\n  - 多线并行：时间线+主题线交织\n  - 主线参照物清晰：以时间为轴或以主题为轴\n  - 定位技巧：抓住\"时间词\"或\"主题词\"\n\n##### 🔤 基础技能\n- 略读和扫读综合运用\n- 定位词的选择策略：\n  - 优先选：专有名词、数字、时间\n  - 次选：名词短语\n  - 避免：常见词、抽象词\n- 题干结构利用：利用题干语法结构预判答案\n\n##### 📝 题型解析\n\n**表格填空（Table Completion）**\n- 行列对应：表格行列与文章信息对应\n- 分类标准：理解表格分类逻辑\n- 信息归纳：同类信息归类填入\n\n**流程图填空（Flow Chart）**\n- 步骤顺序：按流程顺序定位\n- 箭头关系：理解步骤间逻辑关系\n- 动词形式：注意流程图中动词形式\n\n**True/False/Not Given判断**\n- 事实判断：基于客观事实\n- 定位技巧：专有名词优先\n- 辨析：False（矛盾）vs Not Given（未提及）" }] },
          { header: "Unit 5", items: [{ label: "Unit 5", text: "#### Unit 5 Homo Sapiens 智人统治地球\n\n##### 📚 课本内容\n- 智人在远古斗争中的优势（认知革命）\n- 人属其他动物的特点与灭绝原因（尼安德特人等）\n- 积累考古学和人类学词汇（archaeology, anthropology, evolution, extinct等）\n\n##### 📖 阅读技巧\n- **找切口方法练习**：\n  - 短段落优先\n  - 有明确主题句的段落\n  - 含人名、地名、时间的段落\n- **标题副标题预测**：通过标题预判正文内容\n- **判断作者写作意图**：\n  - 说明：inform/explain\n  - 议论：argue/persuade\n  - 描述：describe\n\n##### 🔤 基础技能\n- 文章结构辅助定位\n  - 总分结构：首段总起，后续分述\n  - 对比结构：A vs B对比\n  - 因果结构：原因→结果\n- 同义替换的预测与识别\n  - 同义词：important = significant = crucial\n  - 上下义词：animal → mammal → dog\n\n##### 📝 题型解析\n\n**段落配信息（Which paragraph contains...）**\n- 题干关键词提取：抽象信息具体化\n- 段落扫读：快速浏览段落主旨\n- NB提醒：注意\"You may use any letter more than once\"\n\n**单句填空（Sentence Completion）**\n- 句子结构分析：主谓宾定位\n- 语法一致性：填入后句子完整\n- 字数限制：严格遵守\n\n**人名配信息（Matching Names）**\n- 人名顺序原则：按文章出现顺序\n- 观点句识别：suggest/believe/argue/find\n- 排除法：已匹配的人名划掉" }] },
          { header: "Unit 6", items: [{ label: "Unit 6", text: "#### Unit 6 IT Society 信息社会\n\n##### 📚 课本内容\n- 可汗学院的发展历史、特点与教育模式创新\n- IT相关话题词汇积累（online learning, digital divide, MOOC, platform等）\n- 线上学习的优势与挑战（观点积累）\n\n##### 📖 阅读技巧\n- **题干推原文方法练习**：\n  - 通过题干预判原文内容\n  - 利用题干关键词定位\n- **例子类信息识别**：\n  - 识别标志：for example/such as/like\n  - 功能理解：引出观点、具体论证\n\n##### 🔤 基础技能\n- 特殊词快速扫读定位\n  - 大写字母：人名、地名、机构名\n  - 数字：时间、数量、百分比\n  - 引号：术语、特殊概念\n- 改写类替换识别\n  - 主动被动转换\n  - 正负表述转换\n  - 抽象具体转换\n\n##### 📝 题型解析\n\n**单选题（Multiple Choice）**\n- 题干关键词定位\n- 选项逐一验证\n- 干扰项辨析：无中生有、张冠李戴、以偏概全\n\n**Yes/No/Not Given判断**\n- 观点判断：基于作者态度\n- 情感词识别\n- 难点辨析\n\n**半句匹配（Matching Sentence Endings）**\n- 前半部分定位：题干前半句回原文定位\n- 后半部分逻辑：语法+语义匹配\n- 排除法：已匹配选项划掉" }] },
          { header: "Unit 7", items: [{ label: "Unit 7", text: "#### Unit 7 Honeybee The Pollinator 传粉者蜜蜂\n\n##### 📚 课本内容\n- 蜜蜂作为传粉者的生态重要性与不可替代性\n- 蜜蜂和现代农业面临的困境（蜂群崩溃综合征CCD）\n- 积累生物农业方面话题词汇（pollinator, colony, pesticide, ecosystem等）\n\n##### 📖 阅读技巧\n- **题干推原文技巧练习**：通过题干预判原文\n- **找切口技巧练习**：定位易理解段落\n- **说明文通用结构复习**：\n  - 现象→原因→影响→对策\n  - 问题→研究→发现→应用\n\n##### 🔤 基础技能\n- 略读（Skimming）：把握文章主旨\n- 扫读（Scanning）：寻找特定信息\n- 两者结合：先略读后扫读\n\n##### 📝 题型解析\n\n**段落配标题（List of Headings）**\n- 略读技巧：首二句+转折+结尾\n- 主旨句识别：段落核心观点\n- 干扰项辨析：细节vs主旨\n\n**单句填空（Sentence Completion）**\n- 句子结构分析\n- 语法一致性\n- 字数限制\n\n**多选题（Multiple Choice）**\n- 选项逐一验证\n- 排除法应用\n- 答案数量确认" }] },
          { header: "Unit 8", items: [{ label: "Unit 8", text: "#### Unit 8 Across The Universe 航空航天\n\n##### 📚 课本内容\n- 航空航天技术对人类社会的影响与贡献\n- 航天投入vs民生投入的讨论（观点积累）\n- 航空航天科技话题词汇积累（space exploration, satellite, orbit, launch等）\n\n##### 📖 阅读技巧\n- **略读方法实操**：\n  - 限时练习：2-3分钟把握文章大意\n  - 信号词识别：转折、因果、递进\n- **题干推原文方法实操**：\n  - 实战演练：先看题后读文\n  - 定位效率提升\n\n##### 🔤 基础技能\n- 扫读定位：快速准确找到信息点\n- 细节信息处理：精读定位句\n- 同义替换识别：题干与原文对应\n\n##### 📝 题型解析\n\n**Yes/No/Not Given判断**\n- 观点判断练习\n- 作者态度识别\n- 难点辨析强化\n\n**单选题（Multiple Choice）**\n- 综合应用所有技巧\n- 时间管理：控制每题用时\n\n**有词库摘要填空**\n- 综合技巧应用\n- 词库策略：分类+排除" }] },
        ],
      },
      {
        id: "content-level2-handout",
        label: "中级讲义",
        groups: [
          { header: "Lesson 1", items: [{ label: "Lesson 1", text: "#### Lesson 1 Gap Fill 填空题专项\n\n##### 📚 课本内容（剑雅真题篇章）\n\n**例题篇章**\n- **Stepwells**（阶梯水井）- C10T1P1 P148\n  - 段落：6-8, 9-13\n  - 题型：简答题、表格填空\n  - 难度：简单 → 中等\n\n- **Sheet Glass Manufacture**（平板玻璃制造）- C8T2P1 P56\n  - 段落：1-5, 6-8\n  - 题型：表格填空、图例填空\n  - 难度：中等\n\n- **Cork**（软木）- C12T5P1 P251\n  - 段落：6-13\n  - 题型：笔记填空\n  - 难度：中等\n\n**练习篇章**\n- **Gifted Children and Learning**（天才儿童与学习）- C10T2P2 P165\n  - 段落：23-26\n  - 题型：单句填空\n  - 难度：简单\n\n**作业篇章**\n- **The Benefits of Being Bilingual**（双语的好处）- C12T6P3 P272\n  - 段落：27-31\n  - 题型：表格填空\n  - 难度：困难\n\n- **Telepathy**（心灵感应）- C8T1P3 P52\n  - 段落：31-40\n  - 题型：表格填空\n  - 难度：困难\n\n##### 📝 题型解析\n- **简答题**：文章原词填空，注意词数限制\n- **表格填空**：定位技巧，同义替换识别\n- **图例填空**：图表理解，信息对应\n- **笔记填空**：结构梳理，关键词定位\n- **单句填空**：句子 completion，语法检查\n\n##### 🔤 核心技能\n- 填空题通用做题步骤：划关键词 → 定位 → 解题\n- 特殊疑问词预测（词性、词义）\n- 检查词性词数\n- 同义替换积累" }] },
          { header: "Lesson 2", items: [{ label: "Lesson 2", text: "#### Lesson 2 Summary Completion 摘要填空专项\n\n##### 📚 课本内容（剑雅真题篇章）\n\n**例题篇章**\n- **Music and the Motions**（音乐与运动）- C12T7P3 P283\n  - 段落：27-31\n  - 题型：无词库摘要填空\n  - 难度：中等\n\n**作业篇章**\n- **Bring Back the Big Cats**（拯救大型猫科动物）- C12T8P2 P291\n  - 段落：19-22\n  - 题型：有词库摘要填空\n  - 难度：困难\n\n- **Museums of Fine Art and Their Public**（美术馆与公众）- C10T2P3 P169\n  - 段落：27-31\n  - 题型：有词库摘要填空\n  - 难度：困难\n\n- **Beyond the Blue Horizon**（蓝色地平线之外）- C10T3P3 P182\n  - 段落：27-31\n  - 题型：有词库摘要填空\n  - 难度：困难\n\n- **What's the Purpose of Gaining Knowledge**（获取知识的目的）- C12T5P3 P259\n  - 段落：33-36\n  - 题型：无词库摘要填空\n  - 难度：中等\n\n- **What Destroyed the Easter Island**（复活节岛之谜）- C11T2P2 P217\n  - 题型：无词库摘要填空\n  - 难度：中等\n\n##### 📝 题型解析\n- **无词库摘要填空**：\n  - 从原文选词填入\n  - 注意词形变化\n  - 上下文逻辑连贯\n\n- **有词库摘要填空**：\n  - 从选项列表中选词\n  - 干扰项辨析\n  - 同义替换识别\n\n##### 🔤 核心技能\n- 摘要结构分析（总-分-总）\n- 空格前后语法判断\n- 选项词性预判\n- 文章结构快速把握" }] },
          { header: "Lesson 3", items: [{ label: "Lesson 3", text: "#### Lesson 3 TFNG/YesNoNG 判断题专项\n\n##### 📚 课本内容（剑雅真题篇章）\n\n**例题篇章**\n- **Numeration**（计数系统）- C6T2P3 P6\n  - 段落：32-40\n  - 题型：TFNG（True/False/Not Given）\n  - 难度：简单\n\n- **Stepwells**（阶梯水井）- C10T1P1 P148\n  - 段落：1-5\n  - 题型：TFNG\n  - 难度：中等\n\n**练习篇章**\n- **Sheet Glass Manufacture**（平板玻璃制造）- C8T2P1 P56\n  - 段落：9-13\n  - 题型：TFNG\n  - 难度：中等\n\n**作业篇章**\n- **The Benefits of Being Bilingual**（双语的好处）- C12T6P3 P272\n  - 段落：32-36\n  - 题型：YNNG（Yes/No/Not Given）\n  - 难度：困难\n\n- **Cork**（软木）- C12T5P1 P251\n  - 段落：1-5\n  - 题型：TFNG\n  - 推荐时间：7分钟\n  - 难度：困难\n\n- **Beyond the Blue Horizon**（蓝色地平线之外）- C10T3P3 P182\n  - 段落：32-35\n  - 题型：YNNG\n  - 难度：困难\n\n- **What's the Purpose of Gaining Knowledge**（获取知识的目的）- C12T5P3 P259\n  - 段落：37-40\n  - 题型：YNNG\n  - 难度：困难\n\n##### 📝 题型解析\n- **TFNG（True/False/Not Given）**：事实判断\n- **YNNG（Yes/No/Not Given）**：观点判断\n\n**判断要点**\n- True/Yes：题目与原文一致\n- False/No：题目与原文矛盾\n- Not Given：原文未提及\n\n##### 🔤 核心技能\n- False 和 Not Given 的辨析（难点）\n- 考点识别（绝对词、比较、数字、因果）\n- 出题顺序原则\n- 定位区间控制（1-3句）" }] },
          { header: "Lesson 4", items: [{ label: "Lesson 4", text: "#### Lesson 4 Multiple Choice 选择题专项\n\n##### 📚 课本内容（剑雅真题篇章）\n\n**例题篇章**\n- **Land of the Rising Sun**（日出之国）- C8T4P1 P82\n  - 段落：10-13\n  - 题型：单选题\n  - 难度：简单\n\n- **Noise and Hearing**（噪音与听力）- C9T2P1 P108\n  - 段落：11-13\n  - 题型：多选题\n  - 难度：中等\n\n**练习篇章**\n- **The Nature of Genius**（天才的本质）- C8T3P2 P73\n  - 段落：14-18\n  - 题型：单选题\n  - 难度：中等\n\n- **The Development of Museums**（博物馆的发展）- C9T4P3 P143\n  - 段落：31-36\n  - 题型：单选题\n  - 难度：中等\n\n**作业篇章**\n- **Beyond the Blue Horizon**（蓝色地平线之外）- C10T3P3 P182\n  - 段落：32-35\n  - 题型：单选题\n  - 难度：困难\n\n- **What Destroyed the Easter Island**（复活节岛之谜）- C11T2P2 P217\n  - 段落：25-26\n  - 题型：多选题\n  - 推荐用时：10分钟\n  - 难度：困难\n\n##### 📝 题型解析\n- **单选题**：\n  - 题干关键词定位\n  - 选项逐一排除\n  - 同义替换识别\n\n- **多选题**：\n  - 选项分类筛选\n  - 原文对应验证\n  - 干扰项辨析\n\n##### 🔤 核心技能\n- 题干预测（答案特征预判）\n- 选项关键词划取\n- 排除法应用\n- 结合略读技巧快速定位" }] },
          { header: "Lesson 5", items: [{ label: "Lesson 5", text: "#### Lesson 5 Matching Sentence Endings/Category Matching 匹配题专项（一）\n\n##### 📚 课本内容（剑雅真题篇章）\n\n- **Why Pagodas Don't Fall Down**（宝塔为什么不倒）- C7T2P1 P23\n  - 段落：5-10\n  - 题型：分类匹配\n  - 难度：中等\n\n- **A Neuroscientist Reveals How to Think Differently**（神经科学家揭示如何不同思考）- C9T2P3 P116\n  - 段落：38-40\n  - 题型：半句匹配\n  - 难度：中等\n\n- **Numeration**（计数系统）- C6T2P3 P6\n  - 段落：27-31\n  - 题型：半句匹配\n  - 难度：中等\n\n- **Telepathy**（心灵感应）- C8T1P3 P52\n  - 段落：27-30\n  - 题型：半句匹配\n  - 难度：中等\n\n##### 📝 题型解析\n- **分类匹配（Category Matching）**：\n  - 信息归类\n  - 特征对比\n  - 选项逐一匹配\n\n- **半句匹配（Matching Sentence Endings）**：\n  - 句子前半部分定位\n  - 后半部分逻辑衔接\n  - 语法一致性检查\n\n##### 🔤 核心技能\n- 分类标准理解\n- 句子结构分析\n- 逻辑关系判断\n- 快速扫读定位" }] },
          { header: "Lesson 6", items: [{ label: "Lesson 6", text: "#### Lesson 6 Matching Names/Features 匹配题专项（二）\n\n##### 📚 课本内容（剑雅真题篇章）\n\n- **Young Children's Sense of Identity**（幼儿的身份认知）- C9T4P2 P137\n  - 题型：人名匹配\n\n- **Gifted Children and Learning**（天才儿童与学习）- C10T2P2 P165\n  - 题型：特征匹配\n\n- **Second Nature**（第二天性）- C10T4P2 P191\n  - 题型：人名匹配\n\n- **Raising the Mary Rose**（打捞玛丽玫瑰号）- C11T2P1 P212\n  - 题型：特征匹配\n\n##### 📝 题型解析\n- **人名匹配（Matching Names）**：\n  - 人名快速定位\n  - 观点对应匹配\n  - 排除法应用\n\n- **特征匹配（Matching Features）**：\n  - 特征关键词提取\n  - 原文信息对应\n  - 多对多关系处理\n\n##### 🔤 核心技能\n- 人名顺序原则（按文章出现顺序）\n- 观点句识别\n- 特征词同义替换\n- 多重匹配处理" }] },
          { header: "Lesson 7", items: [{ label: "Lesson 7", text: "#### Lesson 7 List of Headings 段落大意题专项\n\n##### 📚 课本内容（剑雅真题篇章）\n\n- **European Transport Systems 1990-2010**（欧洲交通系统）- C10T1P2 P153\n\n- **Tea and the Industrial Revolution**（茶与工业革命）- C10T2P1 P162\n\n- **The Lost City**（失落之城）- C12T6P2 P269\n\n##### 📝 题型解析\n- **List of Headings**：\n  - 段落主旨概括\n  - 标题与段落匹配\n  - 干扰标题辨析\n\n##### 🔤 核心技能\n- 略读技巧（skimming）\n  - 首二句\n  - 段中转折\n  - 结尾总结\n- 段落结构分析\n- 主旨句识别\n- 标题关键词对比" }] },
          { header: "Lesson 8", items: [{ label: "Lesson 8", text: "#### Lesson 8 Matching Information 段落信息匹配专项\n\n##### 📚 课本内容（剑雅真题篇章）\n\n- **Young Children's Sense of Identity**（幼儿的身份认知）- C9T4P2 P137\n\n- **Gifted Children and Learning**（天才儿童与学习）- C10T2P2 P165\n\n- **Second Nature**（第二天性）- C10T4P2 P191\n\n- **The Benefits of Being Bilingual**（双语的好处）- C12T6P3 P272\n\n##### 📝 题型解析\n- **Matching Information（Which paragraph contains...）**：\n  - 题干信息定位\n  - 段落扫读匹配\n  - NB（Not Given）处理\n\n##### 🔤 核心技能\n- 题干关键词提取\n- 段落快速扫读\n- 信息分布判断\n- 重复信息处理（NB）" }] },
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
        if (grp.subgroups) {
          grp.subgroups.forEach((sub) => {
            if (sub.dimensions) {
              sub.dimensions.forEach((dim) => {
                dim.items.forEach((item) => items.push(item));
              });
            }
            if (sub.items) {
              sub.items.forEach((item) => items.push(item));
            }
          });
        }
      });
    });
  });
  return items;
}
