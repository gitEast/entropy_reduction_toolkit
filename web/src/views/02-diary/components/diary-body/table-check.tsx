import { Checkbox, type CheckboxChangeEvent } from 'antd'

import type { IOption } from '../../type'

interface IProps {
  options: IOption[]
  value: string
  onChange?: (value: string) => any
}

const TableCheck = (props: IProps) => {
  const handleChange = (e: CheckboxChangeEvent, value: string) => {
    props.onChange?.(e.target.checked ? value : '')
  }

  return (
    <div className="flex">
      {props.options.map((opt) => (
        <div key={opt.value} className="flex-1 border -mr-px text-center">
          <div className="leading-[36px]">{opt.title}</div>
          <div className="border-t leading-[36px]">
            <Checkbox
              value={opt.value}
              checked={props.value === opt.value}
              onChange={(e) => handleChange(e, opt.value)}
            >
              {opt.label}
            </Checkbox>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TableCheck
