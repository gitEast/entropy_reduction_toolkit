import createSmartIndex from '@/utils/createSmartIndex'

const CONST_timeFormat = createSmartIndex([
  { key: 'DATE', value: 'YYYY-MM-DD', label: '日期' },
  { key: 'TIME', value: 'HH:mm:ss', label: '时间' },
  { key: 'DATE_TIME', value: 'YYYY-MM-DD HH:mm:ss', label: '日期时间' }
] as const)

export default CONST_timeFormat
