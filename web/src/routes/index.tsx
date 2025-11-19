import EntropyScale from '@/views/01-entropy-scale'
import Diary from '@/views/02-diary'
import ValueType from '@/views/03-value-type'
import Growth from '@/views/04-growth'
import Target from '@/views/05-target'
import Amc from '@/views/06-amc'
import Reduce from '@/views/07-reduce'
import Framework from '@/views/08-framework'
import Flow from '@/views/09-flow'

import type { IRoute } from './type'
import { Navigate } from 'react-router-dom'
import CONST_TOOL from '@/const/tool'

const routes: IRoute[] = [
  {
    id: 'home',
    path: '/',
    element: <Navigate to="/tool1-entropy-scale" replace />,
    label: ''
  },
  {
    id: 'tool1',
    path: `/${CONST_TOOL.getByKey('TOOL1')}`,
    element: <EntropyScale />,
    label: CONST_TOOL.getLabelByKey('TOOL1')!
  },
  {
    id: 'tool2',
    path: `/${CONST_TOOL.getByKey('TOOL2')}`,
    element: <Diary />,
    label: CONST_TOOL.getLabelByKey('TOOL2')!
  },
  {
    id: 'tool3',
    path: `/${CONST_TOOL.getByKey('TOOL3')}`,
    element: <ValueType />,
    label: CONST_TOOL.getLabelByKey('TOOL3')!
  },
  {
    id: 'tool4',
    path: `/${CONST_TOOL.getByKey('TOOL4')}`,
    element: <Growth />,
    label: CONST_TOOL.getLabelByKey('TOOL4')!
  },
  {
    id: 'tool5',
    path: `/${CONST_TOOL.getByKey('TOOL5')}`,
    element: <Target />,
    label: CONST_TOOL.getLabelByKey('TOOL5')!
  },
  {
    id: 'tool6',
    path: `/${CONST_TOOL.getByKey('TOOL6')}`,
    element: <Amc />,
    label: CONST_TOOL.getLabelByKey('TOOL6')!
  },
  {
    id: 'tool7',
    path: `/${CONST_TOOL.getByKey('TOOL7')}`,
    element: <Reduce />,
    label: CONST_TOOL.getLabelByKey('TOOL7')!
  },
  {
    id: 'tool8',
    path: `/${CONST_TOOL.getByKey('TOOL8')}`,
    element: <Framework />,
    label: CONST_TOOL.getLabelByKey('TOOL8')!
  },
  {
    id: 'tool9',
    path: `/${CONST_TOOL.getByKey('TOOL9')}`,
    element: <Flow />,
    label: CONST_TOOL.getLabelByKey('TOOL9')!
  }
]

export default routes
