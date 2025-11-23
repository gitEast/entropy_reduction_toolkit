export type IHandleChange_answer = (questionId: number, score?: number) => void
type IVoidFn = () => void
type IPromiseVoidFn = () => Promise<void>
export type IScoreMap = Record<string, number>

export interface ITool1Record {
  id?: number
  createAt?: string
  userId?: number
  detail: string
  total: number
  mainEnclosure: number
  mainResistance: number
  fiveEnclosure: number
  fiveEquilibrium: number
  fiveLinear: number
  fiveDisorder: number
  fiveLoss: number
}

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
  handleSubmit: IPromiseVoidFn
}

export interface IResultTotalProps {
  totalScore: number
}

export interface IResultMainProps {
  scoreMap: IScoreMap
}

export interface IResultFiveProps {
  scoreMap: IScoreMap
}

export interface IResultProps {
  record: ITool1Record
}

export interface IModalHistoryProps {
  open: boolean
  record?: ITool1Record
  onClose: IVoidFn
}
/* ------------ ⬆ components 下组件类型 ⬆ ------------ */
