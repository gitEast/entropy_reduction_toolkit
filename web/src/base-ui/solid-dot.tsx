interface IProps {
  size?: number | string
  bg?: string
  className?: string
}

const SolidDot = (props: IProps) => {
  let size = '5px'
  if (props.size) {
    if (typeof props.size === 'string') size = props.size
    else size = `${props.size}px`
  }
  const bg = props.bg ?? '#ccc'
  const style = {
    width: size,
    height: size,
    backgroundColor: bg
  }
  const className = `inline-block rounded-full ${props.className ?? ''}`
  return <span className={className} style={style} />
}

export default SolidDot
