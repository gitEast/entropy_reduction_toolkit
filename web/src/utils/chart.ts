/**
 * Chart.js 的注册
 */
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement
} from 'chart.js'

// 注册所有可能用到的 Chart.js 组件
ChartJS.register(
  // 雷达图相关
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,

  // // 柱状图相关
  // CategoryScale,
  // LinearScale,
  // BarElement,

  // // 饼图相关
  // ArcElement,

  // 通用组件
  Tooltip,
  Legend,
  Title
)

export default ChartJS
