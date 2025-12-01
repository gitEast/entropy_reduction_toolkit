import { Button, Space } from 'antd'
import { DoubleLeftOutlined } from '@ant-design/icons'
import DiaryBody from '../diary-body'
import DiaryHead from '../diary-head'
import DiaryTypeSelect from '../diary-type-select'

import { useState } from 'react'
import dayjs from 'dayjs'
import CONST_timeFormat from '@/const/time-format'
import { diaryBodyConfig } from '../../data'

import type { IDiary, IViewAction } from '../../type'

interface IProps {
  action: IViewAction
  diary?: IDiary
  onBack?: () => void
  onSubmit?: (data: IDiary) => Promise<any>
}

const dateFormat = CONST_timeFormat.getByKey('DATE') as string
const getNewDiary = () => ({
  type: undefined,
  date: dayjs().format(dateFormat),
  weather: '',
  cause: '',
  thought: '',
  feeling: ''
})

const DiaryView = (props: IProps) => {
  const readonly = props.action === 'view'
  const [diary, setDiary] = useState<IDiary>(
    props.diary ? { ...props.diary } : getNewDiary()
  )

  const [diaryType, setDiaryType] = useState(props.diary?.type)
  const handleSelectDiaryType = (type: number) => {
    setDiaryType(type)
  }

  const handleChange_date = (date: string) => {
    setDiary((prev) => ({ ...prev, date }))
  }
  const handleChange_weather = (weather: string) => {
    setDiary((prev) => ({ ...prev, weather }))
  }
  const handleChange_cause = (cause: string) => {
    setDiary((prev) => ({ ...prev, cause }))
  }
  const handleChange_thought = (thought: string) => {
    setDiary((prev) => ({ ...prev, thought }))
  }
  const handleChange_feeling = (feeling: string) => {
    setDiary((prev) => ({ ...prev, feeling }))
  }

  const handleSubmit = async () => {
    props.onSubmit?.(diary)
  }

  if (readonly) {
    return (
      <DiaryBody
        readonly={readonly}
        {...diaryBodyConfig[diaryType!]}
        diary={diary}
        handlerMap={{
          cause: handleChange_cause,
          thought: handleChange_thought,
          feeling: handleChange_feeling
        }}
      />
    )
  } else {
    return (
      <>
        <div className="border-2 mt-2">
          <DiaryHead
            readonly={readonly}
            date={diary.date}
            weather={diary.weather}
            onDateChange={handleChange_date}
            onWeatherChange={handleChange_weather}
          />
          {!diaryType && <DiaryTypeSelect onChange={handleSelectDiaryType} />}
          {diaryType && (
            <DiaryBody
              readonly={readonly}
              {...diaryBodyConfig[diaryType]}
              diary={diary}
              handlerMap={{
                cause: handleChange_cause,
                thought: handleChange_thought,
                feeling: handleChange_feeling
              }}
            />
          )}
        </div>
        <div className="relative mt-2 text-center">
          <Button
            className="absolute! left-0"
            type="text"
            onClick={props.onBack}
          >
            <DoubleLeftOutlined />
            返回
          </Button>
          <Space>
            <Button>重置</Button>
            <Button type="primary" onClick={handleSubmit}>
              提交
            </Button>
          </Space>
        </div>
      </>
    )
  }
}

export default DiaryView
