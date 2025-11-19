import { message } from 'antd'
import Views from './views'

function App() {
  const [_, contextHolder] = message.useMessage()
  return (
    <>
      {contextHolder}
      <Views />
    </>
  )
}

export default App
