import { DatePicker, Select, Space, type SelectProps } from 'antd'

import CONST_timeFormat from '@/const/time-format'
import dayjs from 'dayjs'
import { CONST_WEATHER } from '../../data'

interface IProps {
  readonly: boolean
  date: string
  dateFormat?: string
  onDateChange: (date: string) => void
  weather: string
  onWeatherChange: (weather: string) => void
}

const DiaryHead = (props: IProps) => {
  /* ------------ ⬇ date ⬇ ------------ */
  const date = dayjs(props.date)
  const dateFormat =
    props.dateFormat ?? (CONST_timeFormat.getByKey('DATE') as string)
  const handleChange_date = (date: dayjs.Dayjs, dateStr: string | string[]) => {
    if (typeof dateStr === 'string') props.onDateChange(dateStr)
  }
  /* ------------ ⬆ date ⬆ ------------ */

  /* ------------ ⬇ weather ⬇ ------------ */
  const weatherOptions: SelectProps['options'] = CONST_WEATHER.items.map(
    (item) => ({
      value: item.value,
      label: item.label
    })
  )
  const handleChange_weather = (weather: string) => {
    props.onWeatherChange(weather)
  }
  /* ------------ ⬆ weather ⬆ ------------ */

  return (
    <div className="p-2 border-b text-center">
      <h3 className="text-xl mb-2">我的情绪日记</h3>
      <Space size="large">
        <Space>
          <label>记录日期：</label>
          <DatePicker
            format={dateFormat}
            value={date}
            className="w-[140px]"
            onChange={handleChange_date}
          />
        </Space>
        <Space>
          <label>今天天气：</label>
          <Select
            className="w-[140px]"
            options={weatherOptions}
            onChange={handleChange_weather}
          />
        </Space>
      </Space>
    </div>
  )
}

export default DiaryHead
