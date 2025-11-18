/**
 * 量表
 * @description 32 个问题，计算熵值
 */
import { Button, Checkbox, message, Space, Table } from 'antd'

import { CONST_SCORE, questionList } from './data'

import type { CheckboxChangeEvent, TableProps } from 'antd'
import type { IScaleForm_question, IScaleFormProps } from '../../type'

const ScaleForm = (props: IScaleFormProps) => {
  /* ------------ ⬇ 表格 ⬇ ------------ */
  const columns: TableProps<IScaleForm_question>['columns'] = [
    { title: '序号', dataIndex: 'id', width: 60, align: 'center' },
    { title: '下面的描述，在多大程度上像你？', dataIndex: 'text' },
    ...CONST_SCORE.items.map((scoreItem) => ({
      title: scoreItem.label,
      dataIndex: scoreItem.key,
      width: 60,
      align: 'center' as const,
      render: (_: any, record: IScaleForm_question) => {
        const questionId = record.id
        const score = record.scoreMap[scoreItem.key]
        return (
          <Checkbox
            checked={props.answerMap.get(questionId) === score}
            disabled={props.isFinished}
            onChange={(e) => handleChange_Check(e, questionId, score)}
          />
        )
      }
    }))
  ]

  const handleChange_Check = (
    e: CheckboxChangeEvent,
    questionId: number,
    score: number
  ) => {
    props.handleChange(questionId, e.target.checked ? score : undefined)
  }
  /* ------------ ⬆ 表格 ⬆ ------------ */

  /* ------------ ⬇ 按钮操作 ⬇ ------------ */
  const handleSubmit = () => {
    if (props.answerMap.size < questionList.length) {
      message.info('请确保已全部作答！')
      return
    }
    props.handleSubmit()
  }
  /* ------------ ⬆ 按钮操作 ⬆ ------------ */

  return (
    <>
      <p className="pb-1 text-base indent-8">
        这份评估量表包含了 32
        条关于你的客观描述，请在仔细阅读每一条描述后，勾选一个和你实际情况最相符的选项。答案没有对错之分，请用内心最真实的声音作答，如果遇到难以确定的问题，不要停下来思考太久，请按第一感觉做出选择。
      </p>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={questionList}
        bordered
        pagination={false}
      />
      {!props.isFinished && (
        <div className="mt-2 text-center">
          <Space>
            <Button onClick={props.handleReset}>重置</Button>
            <Button type="primary" onClick={handleSubmit}>
              提交
            </Button>
          </Space>
        </div>
      )}
    </>
  )
}

export default ScaleForm
