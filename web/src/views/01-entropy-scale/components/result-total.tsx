import { Checkbox } from 'antd'
import type { IResultTotalProps } from '../type'

const ResultTotal = (props: IResultTotalProps) => {
  const list = [
    { label: '低熵', condition: () => props.totalScore <= 64 },
    {
      label: '中熵',
      condition: () => props.totalScore > 64 && props.totalScore <= 127
    },
    { label: '高熵', condition: () => props.totalScore > 127 }
  ]

  return (
    <div className="mt-2 pb-1 border-b border-gray-300 border-dashed">
      <div>
        我当前的总熵值是：{props.totalScore}，暂时处于（
        {list.map((item) => (
          <Checkbox key={item.label} checked={item.condition()}>
            {item.label}
          </Checkbox>
        ))}
        ）状态。
      </div>
      <div className="text-sm text-gray-600">
        （满分 160 分，分数越高熵值越高；32-64 分为低熵段，65-127
        分为中熵段，128-160 分为高熵段）
      </div>
    </div>
  )
}

export default ResultTotal
