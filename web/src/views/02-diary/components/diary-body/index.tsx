import { Space } from 'antd'
import type { IDiary, IDiaryItem, IDiaryContentKey } from '../../type'
import SolidDot from '@/base-ui/solid-dot'
import { componentMap } from '../../data'

type IHandler = (value: string) => void
type IHandlerMap = Record<IDiaryContentKey, IHandler>
interface IProps {
  readonly: boolean
  title: string
  contentList: IDiaryItem[]
  note: string
  diary: IDiary
  handlerMap: IHandlerMap
}

const DiaryBody = (props: IProps) => {
  const renderItem = (item: IDiaryItem) => {
    const value = props.diary[item.key]
    const onChange = props.handlerMap[item.key]
    const Comp = componentMap[item.type]

    return Comp({
      readonly: props.readonly,
      value,
      options: item.options,
      onChange
    })
  }

  if (props.readonly) {
    return (
      <>
        <Space direction="vertical" size="small" className="w-full">
          {props.contentList.map((item) => (
            <div key={item.key}>
              <div className="relative pl-10">
                <SolidDot
                  size={7}
                  bg="#aaa"
                  className="absolute left-3 top-[50%] translate-y-[-50%]"
                />
                <span>{item.description}</span>
                {renderItem(item)}
              </div>
            </div>
          ))}
        </Space>
      </>
    )
  } else {
    return (
      <>
        <h4 className="mt-4 text-base text-center">{props.title}</h4>
        <Space direction="vertical" size="large" className="w-full mt-2 mb-4">
          {props.contentList.map((item) => (
            <div key={item.key}>
              <div className="relative pl-10">
                <SolidDot
                  size={7}
                  bg="#aaa"
                  className="absolute left-3 top-[50%] translate-y-[-50%]"
                />
                <span>{item.description}</span>
              </div>
              <div className="ml-10 mr-4 mt-2">{renderItem(item)}</div>
            </div>
          ))}
        </Space>
        <div className="pl-10 mb-4">{props.note}</div>
      </>
    )
  }
}

export default DiaryBody
