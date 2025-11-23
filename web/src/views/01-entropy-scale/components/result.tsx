import ResultFive from './result-five'
import ResultMain from './result-main'
import ResultTotal from './result-total'

import type { IResultProps } from '../type'

const Result = (props: IResultProps) => {
  const mainScoreMap = {
    enclosure: props.record?.mainEnclosure,
    resistance: props.record?.mainResistance
  }

  const fiveScoreMap = {
    enclosure: props.record?.fiveEnclosure,
    equilibrium: props.record?.fiveEquilibrium,
    linear: props.record?.fiveLinear,
    disorder: props.record?.fiveDisorder,
    loss: props.record?.fiveLoss
  }

  return (
    <div className="w-[210mm] text-base">
      <ResultTotal totalScore={props.record.total} />
      <ResultMain scoreMap={mainScoreMap} />
      <ResultFive scoreMap={fiveScoreMap} />
    </div>
  )
}

export default Result
