import createSmartIndex from '@/utils/createSmartIndex'

const CONST_TOOL = createSmartIndex([
  {
    key: 'TOOL1',
    value: 'tool1-entropy-scale',
    label: '1. 多维熵值/熵型评估量表'
  },
  { key: 'TOOL2', value: 'tool2-diary', label: '2. 情绪日记：排出内心的熵' },
  { key: 'TOOL3', value: 'tool3-value-type', label: '3. 天性价值类型评估表' },
  { key: 'TOOL4', value: 'tool4-growth', label: '4. 成长性/可控性评估表' },
  { key: 'TOOL5', value: 'tool5-target', label: '5. 行动目标发展导图' },
  { key: 'TOOL6', value: 'tool6-amc', label: '6. AMC 行动诊断模型' },
  { key: 'TOOL7', value: 'tool7-reduce', label: '7. 熵减行动链导图' },
  { key: 'TOOL8', value: 'tool8-framework', label: '8. 熵减践行的总框架' },
  {
    key: 'TOOL9',
    value: 'tool9-flow',
    label: '9. 心流最优体验——能力/挑战评估表'
  }
] as const)

export default CONST_TOOL
