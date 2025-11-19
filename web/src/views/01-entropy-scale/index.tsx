import ScaleForm from './components/scale-form/index'
import ResultTotal from './components/result-total'
import ResultMain from './components/result-main'
import ResultFive from './components/result-five'

import { useState } from 'react'
import type { IHandleChange_answer } from './type'

const EntropyScale = () => {
  const [answerMap, setAnswerMap] = useState<Map<number, number>>(new Map())
  const [isFinished, setIsFinished] = useState(false)
  const [totalScore, setTotalScore] = useState(0)

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
  const handleSubmit_answer = () => {
    setIsFinished(true)
    const sum = Array.from(answerMap.values()).reduce(
      (prev, cur) => prev + cur,
      0
    )
    setTotalScore(sum)
  }
  /* ------------ ⬆ 量表 ⬆ ------------ */

  return (
    <>
      <ScaleForm
        answerMap={answerMap}
        isFinished={isFinished}
        handleChange={handleChange_answer}
        handleReset={handleReset_answer}
        handleSubmit={handleSubmit_answer}
      />
      {isFinished && (
        <div className="text-base">
          <ResultTotal totalScore={totalScore} />
          <ResultMain answerMap={answerMap} />
          <ResultFive answerMap={answerMap} />
        </div>
      )}
    </>
  )
}

export default EntropyScale
