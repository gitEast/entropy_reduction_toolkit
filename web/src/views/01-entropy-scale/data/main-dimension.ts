export const mainDimensions = [
  {
    key: 'enclosure',
    label: '封闭程度',
    options: [
      { label: '成长型', getChecked: (score: number) => score <= 40 },
      { label: '固化型', getChecked: (score: number) => score > 40 }
    ],
    detail:
      '（分数越低说明越开放，越高则越封闭；小于 40 分为成长型思维倾向；大于 40 分为固化型思维倾向）',
    referenceQuestionIds: [
      1, 2, 3, 4, 5, 6, 7, 8, 17, 18, 19, 20, 21, 22, 23, 24
    ]
  },
  {
    key: 'resistance',
    label: '做功阻力',
    options: [
      { label: '增效型', getChecked: (score: number) => score <= 40 },
      { label: '内耗型', getChecked: (score: number) => score > 40 }
    ],
    detail:
      '（分数越低越高效，越高则越低效；小于 40 分为增效做功倾向；大于 40 分为内耗做功倾向）',
    referenceQuestionIds: [
      9, 10, 11, 12, 13, 14, 15, 16, 25, 26, 27, 28, 29, 30, 31, 32
    ]
  }
]
