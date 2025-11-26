import { DatePicker, Select, Space, type SelectProps } from 'antd'

import CONST_timeFormat from '@/const/time-format'
import dayjs from 'dayjs'

interface IProps {
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
  const weatherOptions: SelectProps['options'] = [
    { value: 1, label: '☀️' },
    { value: 2, label: '☁️' },
    { value: 3, label: '🌧️' },
    { value: 4, label: '⛈️' },
    { value: 5, label: '❄️' }
  ]
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
          <Select className="w-[140px]" options={weatherOptions} />
        </Space>
      </Space>
    </div>
  )
}

export default DiaryHead
