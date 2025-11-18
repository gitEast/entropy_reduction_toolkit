export type IHandleChange_answer = (questionId: number, score?: number) => void
type IVoidFn = () => void

/* ------------ ⬇ components 下组件类型 ⬇ ------------ */
export type IScaleForm_scoreMap = Record<string, number>
export interface IScaleForm_question {
  id: number
  text: string
  scoreMap: IScaleForm_scoreMap
}
export interface IScaleFormProps {
  answerMap: Map<number, number>
  isFinished: boolean
  handleChange: IHandleChange_answer
  handleReset: IVoidFn
  handleSubmit: IVoidFn
}

export interface IResultTotalProps {
  totalScore: number
}

export interface IResultMainProps {
  answerMap: Map<number, number>
}

export interface IResultFiveProps {
  answerMap: Map<number, number>
}
/* ------------ ⬆ components 下组件类型 ⬆ ------------ */
