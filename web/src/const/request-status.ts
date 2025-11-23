import createSmartIndex from '@/utils/createSmartIndex'

const CONST_resultStatus = createSmartIndex([
  { key: 'SUCCESS', value: 1, label: '成功' },
  { key: 'FAIL', value: 0, label: '失败' }
] as const)

export default CONST_resultStatus
