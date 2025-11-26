import DiaryHead from './components/diary-head'
import DiaryTypeSelect from './components/diary-type-select'
import DiaryBody from './components/diary-body'

import { useState } from 'react'
import dayjs from 'dayjs'
import CONST_timeFormat from '@/const/time-format'
import { diaryBodyConfig } from './data'

import type { IDiary } from './type'

const Diary = () => {
  const dateFormat = CONST_timeFormat.getByKey('DATE') as string

  const [diary, setDiary] = useState<IDiary>({
    date: dayjs().format(dateFormat),
    weather: '',
    cause: '',
    thought: '',
    feeling: ''
  })
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

  /* ------------ ⬇ diary body ⬇ ------------ */
  const [diaryType, setDiaryType] = useState('anxiety')
  const handleSelectDiaryType = (type: string) => {
    setDiaryType(type)
  }
  /* ------------ ⬆ diary body ⬆ ------------ */

  return (
    <>
      <p>
        将每天觉察到的感受和事件写下来。记录一段时间后，可以在情绪平和时打开这本日记，回顾过往那些压在心头的感受，并以第三人的视角做出客观的自省。这个过程持续下去，便可以帮助你在不知不觉中排解出积压在内心这个小黑屋里的熵。
      </p>
      <div className="border-2 mt-2">
        <DiaryHead
          date={diary.date}
          weather={diary.weather}
          onDateChange={handleChange_date}
          onWeatherChange={handleChange_weather}
        />
        {!diaryType && <DiaryTypeSelect onChange={handleSelectDiaryType} />}
        {diaryType && (
          <DiaryBody
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
    </>
  )
}

export default Diary
