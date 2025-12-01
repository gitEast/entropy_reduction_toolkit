import Underlines from './underlines'

import { useEffect, useRef, useState } from 'react'

interface IProps {
  lines?: number
  value: string
  lineHeight?: number
  onInput?: (htmlStr: string) => any
}

const LINE_HEIGHT = 24

const LinedInput = (props: IProps) => {
  const lineHeight = props.lineHeight ?? LINE_HEIGHT
  const inputRef = useRef<HTMLDivElement>(null)
  const [lineCount, setLineCount] = useState(props.lines ?? 2)
  const isInternalChangeRef = useRef<boolean>(false)

  // 1. 同步外部 value 到内部 DOM（只有当外部 value 变化时才同步
  useEffect(() => {
    if (!inputRef.current) return
    if (isInternalChangeRef.current) {
      isInternalChangeRef.current = false
      return
    }
    if (inputRef.current.innerText === props.value) return
    inputRef.current.innerText = props.value
  }, [props.value])

  const adjustInputHeight = () => {
    if (!inputRef.current) return
    const inputRect = inputRef.current.getBoundingClientRect()
    if (inputRect.height < lineHeight * 2) return
    const newLineCount = Math.ceil(inputRect.height / lineHeight)
    if (newLineCount === lineCount) return
    setLineCount(newLineCount)
  }
  // 2. 初始化时调整高度
  useEffect(() => {
    adjustInputHeight()
  }, [])

  const handleBeforeInput = () => {
    isInternalChangeRef.current = true
  }

  const handleInput = () => {
    if (!inputRef.current) return
    props.onInput?.(inputRef.current.innerText)
    adjustInputHeight()
  }

  const style = {
    minHeight: `${lineCount * lineHeight}px`,
    lineHeight: `${lineHeight}px`
  }

  return (
    <div className="relative">
      <Underlines count={lineCount} lineHeight={lineHeight} />
      <div
        ref={inputRef}
        contentEditable
        suppressContentEditableWarning={true}
        className="text-[14px] focus-visible:outline-none"
        style={style}
        onBeforeInput={handleBeforeInput}
        onInput={handleInput}
      />
    </div>
  )
}

export default LinedInput
