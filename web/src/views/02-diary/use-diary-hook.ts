import { message } from 'antd'

import { useCallback, useState } from 'react'
import request from '@/request'
import CONST_resultStatus from '@/const/request-status'

import type { IDiary, IDiaryRecord } from './type'

const useDiaryHook = () => {
  const [history, setHistory] = useState<IDiaryRecord[]>([])
  const fetchHistory = useCallback(async () => {
    const { code, data } = await request.get('/tool2')
    if (code === CONST_resultStatus.getByKey('SUCCESS')) {
      setHistory(data)
    } else {
      message.error('历史数据获取失败')
    }
  }, [])

  const addRequest = async (params: IDiary) => {
    const { code, data } = await request.post('/tool2', params)
    return code === CONST_resultStatus.getByKey('SUCCESS')
  }

  return { history, fetchHistory, addRequest }
}

export default useDiaryHook
