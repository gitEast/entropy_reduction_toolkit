import { Radio, type RadioChangeEvent } from 'antd'
import { CONST_diaryType } from '../data'

interface IProps {
  onChange: (type: number) => void
}

const DiaryTypeSelect = (props: IProps) => {
  const options = CONST_diaryType.items.map((item) => ({
    value: item.value,
    label: item.label
  }))

  const handleChange = (event: RadioChangeEvent) => {
    props.onChange(event.target.value)
  }

  return (
    <div className="pt-4 pl-10 pb-4">
      <span>请选择今天的心情：</span>
      <Radio.Group options={options} onChange={handleChange} />
    </div>
  )
}

export default DiaryTypeSelect
