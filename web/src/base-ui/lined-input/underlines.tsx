import type { ReactElement } from 'react'

interface IProps {
  count: number
  lineHeight: number
}

const Underlines = (props: IProps) => {
  const lines: ReactElement[] = []
  for (let i = 0; i < props.count; i++) {
    const style = { top: `${props.lineHeight * i + 20}px` }
    lines.push(
      <div key={i} className="absolute w-full h-px bg-[#333]" style={style} />
    )
  }
  return lines
}

export default Underlines
