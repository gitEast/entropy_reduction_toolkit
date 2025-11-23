/**
 * “封闭程度”和“做功阻力”两个主维度
 */
import { Card, Checkbox, Col, ConfigProvider, Row } from 'antd'
import { CheckOutlined } from '@ant-design/icons'

import { mainDimensions } from '../data/main-dimension'

import type { IResultMainProps } from '../type'

const ResultMain = (props: IResultMainProps) => {
  const entropyTypes = [
    {
      label: '海豚型',
      detail: '成长型思维/增效型做功倾向',
      condition: () => {
        const { enclosure = 0, resistance = 0 } = props.scoreMap
        return enclosure <= 40 && resistance <= 40
      },
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
      condition: () => {
        const { enclosure = 0, resistance = 0 } = props.scoreMap
        return enclosure <= 40 && resistance > 40
      },
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
      condition: () => {
        const { enclosure = 0, resistance = 0 } = props.scoreMap
        return enclosure > 40 && resistance <= 40
      },
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
      condition: () => {
        const { enclosure = 0, resistance = 0 } = props.scoreMap
        return enclosure > 40 && resistance > 40
      },
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
              {dimension.label}：{props.scoreMap[dimension.key]}，暂时为（
              {dimension.options.map((option) => (
                <Checkbox
                  key={option.label}
                  checked={option.getChecked(props.scoreMap[dimension.key])}
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
