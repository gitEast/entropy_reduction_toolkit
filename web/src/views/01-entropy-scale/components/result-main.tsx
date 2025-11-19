/**
 * “封闭程度”和“做功阻力”两个主维度
 */
import { Card, Checkbox, Col, ConfigProvider, Row } from 'antd'
import { CheckOutlined } from '@ant-design/icons'
import type { IResultMainProps } from '../type'

const ResultMain = (props: IResultMainProps) => {
  /** 两个主维度 */
  const mainDimensions = [
    {
      key: 'enclosure',
      label: '封闭程度',
      options: [
        { label: '成长型', getChecked: (score: number) => score <= 40 },
        { label: '固化型', getChecked: (score: number) => score > 40 }
      ],
      detail:
        '（分数越低说明越开放，越高则越封闭；小于 40 分为成长型思维倾向；大于 40 分为固化型思维倾向）',
      referenceQuestionIds: [
        1, 2, 3, 4, 5, 6, 7, 8, 17, 18, 19, 20, 21, 22, 23, 24
      ]
    },
    {
      key: 'resistance',
      label: '做功阻力',
      options: [
        { label: '增效型', getChecked: (score: number) => score <= 40 },
        { label: '内耗型', getChecked: (score: number) => score > 40 }
      ],
      detail:
        '（分数越低越高效，越高则越低效；小于 40 分为增效做功倾向；大于 40 分为内耗做功倾向）',
      referenceQuestionIds: [
        9, 10, 11, 12, 13, 14, 15, 16, 25, 26, 27, 28, 29, 30, 31, 32
      ]
    }
  ]

  /** 主维度分值计算 */
  const scoreMap: Record<string, number> = {}
  mainDimensions.forEach((dimension) => {
    const sumScore = dimension.referenceQuestionIds.reduce(
      (prev, cur) => prev + (props.answerMap.get(cur) ?? 0),
      0
    )
    scoreMap[dimension.key] = sumScore / dimension.referenceQuestionIds.length
  })

  const entropyTypes = [
    {
      label: '海豚型',
      detail: '成长型思维/增效型做功倾向',
      condition: () => scoreMap.enclosure <= 40 && scoreMap.resistance <= 40,
      features: [
        '高开放、低内阻',
        '能不断扩大伸展圈',
        '目标清晰，认知能量集中',
        '享受过程，内心充满弹性'
      ]
    },
    {
      label: '树懒型',
      detail: '成长型思维/内耗型做功倾向',
      condition: () => scoreMap.enclosure <= 40 && scoreMap.resistance > 40,
      features: [
        '高开放、高内阻',
        '想跨入伸展圈，但行动力差',
        '目标清晰，但认知能量涣散',
        '注重过程，但内心缺乏弹性'
      ]
    },
    {
      label: '犀牛型',
      detail: '固化型思维/增效型做功倾向',
      condition: () => scoreMap.enclosure > 40 && scoreMap.resistance <= 40,
      features: [
        '低开放、低内阻',
        '满足于在舒适圈内“勤奋”',
        '认知能量旺盛，但没有目标',
        '内心弹性强，但只看重结果'
      ]
    },
    {
      label: '海鞘型',
      detail: '固化型思维/内耗型做功倾向',
      condition: () => scoreMap.enclosure > 40 && scoreMap.resistance > 40,
      features: [
        '低开放、高内阻',
        '沉溺于舒适圈，拒绝变化和挑战',
        '目标混乱或缺失，认知能量枯竭',
        '充满消极认知，内心非常脆弱'
      ]
    }
  ]

  const cardTheme = {
    components: {
      Card: {
        headerHeight: 36,
        headerPadding: 10,
        bodyPadding: 10
      }
    }
  }

  return (
    <div className="mt-2 border-b border-gray-300 border-dashed">
      <h3 className="text-center text-lg">
        “封闭程度”和“做功阻力”两个主维度的计算方式
      </h3>
      <ul>
        {mainDimensions.map((dimension) => (
          <li key={dimension.key} className="mb-1">
            <div>
              {dimension.label}：{scoreMap[dimension.key]}，暂时为（
              {dimension.options.map((option) => (
                <Checkbox
                  key={option.label}
                  checked={option.getChecked(scoreMap[dimension.key])}
                >
                  {option.label}
                </Checkbox>
              ))}
              ）思维倾向
            </div>
            <div className="text-sm text-gray-600">{dimension.detail}</div>
          </li>
        ))}
      </ul>
      <ConfigProvider theme={cardTheme}>
        <Row gutter={16} className="mt-2">
          {entropyTypes.map((type) => {
            const satisfied = type.condition()
            const textClassName = satisfied ? 'text-[#52c41a]' : 'text-gray-500'
            const dotClassName = `w-[4px] h-[4px] mr-2 rounded-full ${
              satisfied ? 'bg-[#52c41a]' : 'bg-gray-500'
            }`

            const Title = (
              <>
                <span className={textClassName}>
                  {type.label}：{type.detail}
                </span>
                {satisfied && (
                  <CheckOutlined
                    className="ml-2"
                    style={{ color: '#52c41a' }}
                  />
                )}
              </>
            )
            return (
              <Col key={type.label} span={12} className="pb-[16px]">
                <Card className="mb-1" title={Title}>
                  <ul className={textClassName}>
                    {type.features.map((feature) => (
                      <div key={feature} className="flex items-center pl-2">
                        <span className={dotClassName} />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </ul>
                </Card>
              </Col>
            )
          })}
        </Row>
      </ConfigProvider>
    </div>
  )
}

export default ResultMain
