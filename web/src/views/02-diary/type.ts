import type { ReactElement } from 'react'

export type IDiaryContentKey = 'cause' | 'thought' | 'feeling'
export type IDiaryItemType = 'lined-input' | 'table-check' | 'checkbox-single'
export interface IDiaryItem {
  key: IDiaryContentKey
  description: string
  type: IDiaryItemType
  options?: any[]
}
export interface IDiaryConfig {
  title: string
  contentList: IDiaryItem[]
  note: string
}
export interface IOption {
  title: string
  label: string
  value: string
}
interface IDiaryItemComponentProps {
  readonly: boolean
  value: string
  options?: IOption[]
  onChange: (v: string) => any
}
export type IDiaryItemComponentType = (
  props: IDiaryItemComponentProps
) => ReactElement

export interface IDiary extends Record<IDiaryContentKey, string> {
  type?: number
  date: string
  weather: string
}
export interface IDiaryRecord extends IDiary {
  id: number
}

export type IDiaryForm = Partial<Pick<IDiaryRecord, 'id'>> &
  Omit<IDiaryRecord, 'id'>

export type IViewAction = 'add' | 'view'
