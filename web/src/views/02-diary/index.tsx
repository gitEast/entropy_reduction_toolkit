import { Button, message } from 'antd'
import DiaryView from './components/diary-view'
import DiaryHistory from './components/diary-history'

import { useEffect, useState } from 'react'
import useDiaryHook from './use-diary-hook'

import type { IDiary } from './type'

const Diary = () => {
  const [isAdd, setIsAdd] = useState(false)
  const diaryHook = useDiaryHook()

  /* ------------ ⬇ 历史记录 ⬇ ------------ */
  useEffect(() => {
    diaryHook.fetchHistory()
  }, [])
  /* ------------ ⬆ 历史记录 ⬆ ------------ */

  /* ------------ ⬇ 新增相关 ⬇ ------------ */
  const handleClick_add = () => {
    setIsAdd(true)
  }
  const handleAddSubmit = async (params: IDiary) => {
    if (Object.values(params).some((val) => !val)) {
      message.warning('请填写完整')
      return false
    }
    const success = await diaryHook.addRequest(params)
    if (success) {
      message.success('提交成功')
      diaryHook.fetchHistory()
    } else message.error('提交失败，请重试')
    return success
  }
  const handleAddBack = () => {
    setIsAdd(false)
  }
  /* ------------ ⬆ 新增相关 ⬆ ------------ */

  return (
    <>
      <p>
        将每天觉察到的感受和事件写下来。记录一段时间后，可以在情绪平和时打开这本日记，回顾过往那些压在心头的感受，并以第三人的视角做出客观的自省。这个过程持续下去，便可以帮助你在不知不觉中排解出积压在内心这个小黑屋里的熵。
      </p>
      {isAdd ? (
        <DiaryView
          action="add"
          onBack={handleAddBack}
          onSubmit={handleAddSubmit}
        />
      ) : (
        <div className="mt-4">
          <Button type="primary" onClick={handleClick_add}>
            新增
          </Button>
          <DiaryHistory list={diaryHook.history} />
        </div>
      )}
    </>
  )
}

export default Diary
