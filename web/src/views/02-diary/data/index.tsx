import { Checkbox } from 'antd'
import LinedInput from '@/base-ui/lined-input'
import TableCheck from '../components/diary-body/table-check'

import createSmartIndex from '@/utils/createSmartIndex'

import type {
  IDiaryConfig,
  IDiaryItemComponentType,
  IDiaryItemType
} from '../type'

export const CONST_diaryContent = createSmartIndex([
  { key: 'CAUSE', value: 'cause', label: '原因' },
  { key: 'THOUGHT', value: 'thought', label: '想法' },
  { key: 'FEELING', value: 'feeling', label: '感受' }
] as const)
export const CONST_diaryContent_getByKey = (
  key: Parameters<typeof CONST_diaryContent.getByKey>[0]
) => (CONST_diaryContent.getByKey(key) || '') as string

export const CONST_diaryType = createSmartIndex([
  { key: 'SADNESS', value: 'sadness', label: '悲伤' },
  { key: 'DEPRESSION', value: 'depression', label: '抑郁' },
  { key: 'ANXIETY', value: 'anxiety', label: '焦虑' },
  { key: 'UNKNOWN', value: 'unknown', label: '未知' }
] as const)
export const CONST_diaryType_getByKey = (
  key: Parameters<typeof CONST_diaryType.getByKey>[0]
) => (CONST_diaryType.getByKey(key) || '') as string

export const diaryBodyConfig: Record<string, IDiaryConfig> = {
  [CONST_diaryType_getByKey('SADNESS')]: {
    title: `${CONST_diaryType.getLabelByKey('SADNESS')}之声`,
    contentList: [
      {
        key: CONST_diaryContent_getByKey('CAUSE'),
        description:
          '我今天察觉到自己陷入悲伤，因为（写下相关的人、事、地点、经过）：',
        type: 'lined-input'
      },
      {
        key: CONST_diaryContent_getByKey('THOUGHT'),
        description:
          '我在这次悲伤过程中会自动想到（写下当时冒出来的念头、联想）：',
        type: 'lined-input'
      },
      {
        key: CONST_diaryContent_getByKey('FEELING'),
        description: '我这次的悲伤感受主要是：',
        type: 'table-check',
        options: [
          { value: '1', label: '倦乏', title: '轻微' },
          { value: '2', label: '沮丧', title: '低度' },
          { value: '3', label: '哀伤', title: '重度' },
          { value: '4', label: '悲痛', title: '高度' }
        ]
      }
    ],
    note: '致今天的悲伤君：谢谢你告诉我要放下过去！'
  },
  [CONST_diaryType_getByKey('DEPRESSION')]: {
    title: `${CONST_diaryType.getLabelByKey('DEPRESSION')}之声`,
    contentList: [
      {
        key: CONST_diaryContent_getByKey('CAUSE'),
        description:
          '我今天察觉到自己陷入抑郁，因为（写下相关的人、事、地点、经过）：',
        type: 'lined-input'
      },
      {
        key: CONST_diaryContent_getByKey('THOUGHT'),
        description:
          '我在这次抑郁过程中会自动想到（写下当时冒出来的念头、联想）：',
        type: 'lined-input'
      },
      {
        key: CONST_diaryContent_getByKey('FEELING'),
        description: '我这次的抑郁感受主要是：',
        type: 'table-check',
        options: [
          { value: '1', label: '淡漠', title: '轻微' },
          { value: '2', label: '低落', title: '低度' },
          { value: '3', label: '无力', title: '重度' },
          { value: '4', label: '无望', title: '高度' }
        ]
      }
    ],
    note: '致今天的抑郁君：谢谢你告诉我要重视当下的感受！'
  },
  [CONST_diaryType_getByKey('ANXIETY')]: {
    title: `${CONST_diaryType.getLabelByKey('DEPRESSION')}之声`,
    contentList: [
      {
        key: CONST_diaryContent_getByKey('CAUSE'),
        description:
          '我今天察觉到自己陷入焦虑，因为（写下相关的人、事、地点、经过）：',
        type: 'lined-input'
      },
      {
        key: CONST_diaryContent_getByKey('THOUGHT'),
        description: '我对这次焦虑来袭采取的应对方式是：',
        options: [
          { value: '1', label: '适度应对' },
          { value: '2', label: '过度应对' },
          { value: '3', label: '没有应对' }
        ],
        type: 'checkbox-single'
      },
      {
        key: CONST_diaryContent_getByKey('FEELING'),
        description: '我这次的焦虑感受主要是：',
        options: [
          { value: '1', label: '淡漠', title: '轻微' },
          { value: '2', label: '低落', title: '低度' },
          { value: '3', label: '无力', title: '重度' },
          { value: '4', label: '无望', title: '高度' }
        ],
        type: 'table-check'
      }
    ],
    note: '致今天的焦虑君：谢谢你告诉我要采取有效行动！'
  },
  [CONST_diaryType_getByKey('DEPRESSION')]: {
    title: `${CONST_diaryType.getLabelByKey('DEPRESSION')}之声`,
    contentList: [
      {
        key: CONST_diaryContent_getByKey('THOUGHT'),
        description: '我今天察觉到自己（描述感受细节）：',
        type: 'lined-input'
      },
      {
        key: CONST_diaryContent_getByKey('CAUSE'),
        description: '因为（写下客观发生过的人、事、地点、经过）：',
        type: 'lined-input'
      },
      {
        key: CONST_diaryContent_getByKey('FEELING'),
        description: '我想把这次的感受叫作（起个名）：',
        type: 'lined-input'
      }
    ],
    note: '致今天的未知君：谢谢你让我更了解自己的颗粒情绪！'
  }
} as any

export const componentMap: Record<IDiaryItemType, IDiaryItemComponentType> = {
  'lined-input': ({ value, onChange }) => (
    <LinedInput value={value} onInput={onChange} />
  ),
  'table-check': ({ value, options, onChange }) => (
    <TableCheck options={options!} value={value} onChange={onChange} />
  ),
  'checkbox-single': ({ value, options, onChange }) => (
    <>
      {options!.map((opt) => (
        <Checkbox
          key={opt.value}
          value={opt.value}
          checked={value === opt.value}
          onChange={(e) => onChange(e.target.checked ? e.target.value : '')}
        >
          {opt.label}
        </Checkbox>
      ))}
    </>
  )
}
