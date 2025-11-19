/**
 * 五向熵维
 */
import { Radar } from 'react-chartjs-2'

import type { ChartData } from 'chart.js'
import type { IResultFiveProps } from '../type'

const ResultFive = (props: IResultFiveProps) => {
  const fiveDimensions = [
    {
      key: 'enclosure',
      label: '封闭性',
      detail: '目标感、自我效能感、学习信念、积极认知',
      referenceText: '（相关题号：1-4、17-20，先相加得到总分，然后除以 8）',
      referenceQuestionIds: [1, 2, 3, 4, 17, 18, 19, 20],
      score: 0
    },
    {
      key: 'equilibrium',
      label: '平衡态',
      detail: '回避挑战、拒绝改变',
      referenceText: '（相关题号：5-6、21-22，先相加得到总分，然后除以 4）',
      referenceQuestionIds: [5, 6, 21, 22],
      score: 0
    },
    {
      key: 'linear',
      label: '高线性',
      detail: '坚毅特质、过程导向',
      referenceText: '（相关题号：7-8、23-24，先相加得到总分，然后除以 4）',
      referenceQuestionIds: [7, 8, 23, 24],
      score: 0
    },
    {
      key: 'disorder',
      label: '内心失序',
      detail: '情绪敏感、控制想法、抑制欲望、反脆弱',
      referenceText: '（相关题号：9-12、25-28，先相加得到总分，然后除以 8）',
      referenceQuestionIds: [9, 10, 11, 12, 25, 26, 27, 28],
      score: 0
    },
    {
      key: 'loss',
      label: '能量失焦',
      detail: '专注力、自成目标、抗压力、逆商',
      referenceText: '（相关题号：13-16、29-32，先相加得到总分，然后除以 8）',
      referenceQuestionIds: [13, 14, 15, 16, 29, 30, 31, 32],
      score: 0
    }
  ]

  fiveDimensions.forEach((dimension) => {
    const sumScore = dimension.referenceQuestionIds.reduce(
      (prev, cur) => prev + (props.answerMap.get(cur) ?? 0),
      0
    )
    dimension.score = sumScore / dimension.referenceQuestionIds.length
  })

  const radarData: ChartData<'radar', number[], string> = {
    labels: fiveDimensions.map((dimension) => dimension.label),
    datasets: [
      {
        label: '五向熵维图',
        data: fiveDimensions.map((dimension) => dimension.score)
      }
    ]
  }
  const radarOptions = {
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false // 隐藏图表标题
      }
    },
    scales: {
      r: {
        beginAtZero: true, // 从0开始
        max: 5, // 设置最大值为5
        ticks: {
          stepSize: 1 // 设置刻度步长为1，显示 0,1,2,3,4,5
        }
      }
    }
  }

  return (
    <div className="mt-2 pb-1 border-b border-gray-300 border-dashed">
      <h3 className="text-center text-lg">五向熵维的计算方法</h3>
      <ul>
        {fiveDimensions.map((dimension) => (
          <li key={dimension.key} className="mb-1">
            <div>
              我的“{dimension.label}”得分是：{dimension.score}
              ，涉及构念为{dimension.detail}
            </div>
            <div className="text-sm text-gray-600">
              {dimension.referenceText}
            </div>
          </li>
        ))}
      </ul>
      <div className="w-[400px] h-[400px] m-auto">
        <Radar data={radarData} options={radarOptions} />
      </div>
    </div>
  )
}

export default ResultFive
