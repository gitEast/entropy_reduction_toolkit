import { Modal } from 'antd'

import Result from './result'

import type { IModalHistoryProps } from '../type'

const ModalHistory = (props: IModalHistoryProps) => {
  const handleCancel = () => {
    props.onClose?.()
  }

  return (
    <Modal
      title={`${props.record?.createAt} 记录`}
      open={props.open}
      onCancel={handleCancel}
      footer={null}
      width="230mm"
    >
      <div className="h-[70vh] overflow-auto">
        {props.record && <Result record={props.record} />}
      </div>
    </Modal>
  )
}

export default ModalHistory
