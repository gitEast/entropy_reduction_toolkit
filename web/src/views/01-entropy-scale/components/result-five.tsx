/**
 * 五向熵维
 */
import { Radar } from 'react-chartjs-2'

import { fiveDimensions } from '../data/five-dimension'

import type { ChartData } from 'chart.js'
import type { IResultFiveProps } from '../type'

const ResultFive = (props: IResultFiveProps) => {
  const radarData: ChartData<'radar', number[], string> = {
    labels: fiveDimensions.map((dimension) => dimension.label),
    datasets: [
      {
        label: '五向熵维图',
        data: fiveDimensions.map(
          (dimension) => props.scoreMap[dimension.key] ?? 0
        )
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
              我的“{dimension.label}”得分是：
              {props.scoreMap[dimension.key] ?? 0}
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
