import { Category } from './templates';

export const classCategory: Category = {
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
};
