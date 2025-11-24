import { message } from 'antd'
import ScaleForm from './components/scale-form'
import Result from './components/result'
import ModalHistory from './components/modal-history'

import { useEffect, useState } from 'react'
import request from '@/request'
import CONST_resultStatus from '@/const/request-status'
import { mainDimensions } from './data/main-dimension'
import { fiveDimensions } from './data/five-dimension'

import type { IHandleChange_answer, ITool1Record } from './type'

const EntropyScale = () => {
  const [answerMap, setAnswerMap] = useState<Map<number, number>>(new Map())
  const [isFinished, setIsFinished] = useState(false)
  const [resultRecord, setResultRecord] = useState<ITool1Record>()

  /* ------------ ⬇ 历史记录 ⬇ ------------ */
  const [history, setHistory] = useState<ITool1Record[]>([])
  const [historyRecord, setHistoryRecord] = useState<ITool1Record>()
  const [modalOpen, setModalOpen] = useState(false)
  useEffect(() => {
    const getHistory = async () => {
      const result = await request.get('/tool1')
      if (result.code === CONST_resultStatus.getByKey('SUCCESS')) {
        setHistory(result.data)
      } else message.error('历史记录获取失败')
    }
    getHistory()
  }, [])
  const handleClick_history = (record: ITool1Record) => {
    setHistoryRecord(record)
    setModalOpen(true)
  }
  const handleClose_modal = () => setModalOpen(false)
  /* ------------ ⬆ 历史记录 ⬆ ------------ */

  /* ------------ ⬇ 量表 ⬇ ------------ */
  const handleChange_answer: IHandleChange_answer = (questionId, score) => {
    setAnswerMap((prev) => {
      const newMap = new Map(prev)
      if (score) newMap.set(questionId, score)
      else newMap.delete(questionId)
      return newMap
    })
  }
  const handleReset_answer = () => setAnswerMap(new Map())
  const handleSubmit_answer = async () => {
    try {
      // 1. 计算数据
      const total = Array.from(answerMap.values()).reduce(
        (prev, cur) => prev + cur,
        0
      )
      const newMainScoreMap: Record<string, number> = {}
      mainDimensions.forEach((dimension) => {
        newMainScoreMap[dimension.key] = dimension.referenceQuestionIds.reduce(
          (prev, cur) => prev + (answerMap.get(cur) ?? 0),
          0
        )
      })
      const newFiveScoreMap: Record<string, number> = {}
      fiveDimensions.forEach((dimension) => {
        const score = dimension.referenceQuestionIds.reduce(
          (prev, cur) => prev + (answerMap.get(cur) ?? 0),
          0
        )
        newFiveScoreMap[dimension.key] =
          score / dimension.referenceQuestionIds.length
      })
      const requestBody: ITool1Record = {
        detail: JSON.stringify(Array.from(answerMap)),
        total,
        mainEnclosure: newMainScoreMap.enclosure,
        mainResistance: newMainScoreMap.resistance,
        fiveEnclosure: newFiveScoreMap.enclosure,
        fiveEquilibrium: newFiveScoreMap.equilibrium,
        fiveLinear: newFiveScoreMap.linear,
        fiveDisorder: newFiveScoreMap.disorder,
        fiveLoss: newFiveScoreMap.loss
      }
      // 2. 发送请求
      await request.post('/tool1', requestBody)
      // 3. 更新 ui
      setIsFinished(true)
      setResultRecord(requestBody)
    } catch (error) {
      message.error('提交失败')
      console.error('tool1 提交失败：', error)
    }
  }
  /* ------------ ⬆ 量表 ⬆ ------------ */

  return (
    <>
      <ul>
        {history.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer"
            onClick={() => handleClick_history(item)}
          >
            id: {item.id} ，创建时间：{item.createAt}
          </li>
        ))}
      </ul>
      <ModalHistory
        open={modalOpen}
        record={historyRecord}
        onClose={handleClose_modal}
      />
      <ScaleForm
        answerMap={answerMap}
        isFinished={isFinished}
        handleChange={handleChange_answer}
        handleReset={handleReset_answer}
        handleSubmit={handleSubmit_answer}
      />
      {isFinished && resultRecord && <Result record={resultRecord} />}
    </>
  )
}

export default EntropyScale
