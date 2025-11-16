// 辅助类型：从 T[] 中提取 K 属性的所有可能值，形成联合类型
type ValuesOfArray<A extends readonly unknown[], K extends keyof A[number]> = A[number][K]

// 原始数据项类型
interface DataItem {
  key: string
  value: string | number
  label: string
}

function createSmartIndex<T extends readonly DataItem[]>(items: T) {
  // 内部使用 Map 进行 O(1) 查找
  const keyToItemMap = new Map<string, T[number]>()
  const valueToLabelMap = new Map<string, string>()

  for (const item of items) {
    keyToItemMap.set(item.key, item)
    valueToLabelMap.set(`${item.value}`, item.label)
  }

  // 返回带有专用查找方法的对象
  return {
    items,

    /**
     * 根据 key 查找 value
     * @param key - 数据项的 key，提供自动补全
     * @returns 对应的 value
     */
    getByKey(key: ValuesOfArray<T, 'key'>): string | number | undefined {
      return keyToItemMap.get(key)?.value
    },

    /**
     * 根据 key 查找 label
     * @param key - 数据项的 key，提供自动补全
     * @returns 对应的 label
     */
    getLabelByKey(key: ValuesOfArray<T, 'key'>): string | undefined {
      return keyToItemMap.get(key)?.label
    },

    /**
     * 根据 value 查找 label
     * @param value - 数据项的 value，提供自动补全
     * @returns 对应的 label
     */
    getLabelByValue(value: ValuesOfArray<T, 'value'>): string | undefined {
      return valueToLabelMap.get(`${value}`)
    }
  }
}

export default createSmartIndex
