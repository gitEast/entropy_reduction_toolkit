import { Collapse, Empty } from 'antd'
import DiaryView from './diary-view'

import type { CollapseProps } from 'antd'
import type { IDiaryRecord } from '../type'
import { CONST_diaryType, CONST_WEATHER } from '../data'

interface IProps {
  list: IDiaryRecord[]
}

const DiaryHistory = (props: IProps) => {
  const historyRecords: CollapseProps['items'] = props.list.map((record) => {
    const weatherLabel = CONST_WEATHER.getLabelByValue(record.weather as any)
    const typeLabel = CONST_diaryType.getLabelByValue(record.type as any)

    return {
      key: record.id,
      label: `${record.date} ${weatherLabel} 心情：${typeLabel}`,
      children: <DiaryView action="view" diary={record} />
    }
  })

  return (
    <div className="mt-4">
      <h3 className="mb-2">历史记录</h3>
      {history.length ? (
        <Collapse items={historyRecords} defaultActiveKey={[1]} />
      ) : (
        <Empty className="mt-[100px]" />
      )}
    </div>
  )
}

export default DiaryHistory
