import { Button, Layout, Menu, type MenuProps } from 'antd'

import routes from '@/routes'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useMemo, useState } from 'react'
import CONST_TOOL from '@/const/tool'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

const menuItems: Required<MenuProps>['items'] = routes
  .filter((route) => route.id !== 'home')
  .map((route) => ({
    key: route.path!,
    label: route.label
  }))

const Views = () => {
  const location = useLocation()
  const selectedMenuKeys = useMemo(
    () => [location.pathname],
    [location.pathname]
  )
  const navigate = useNavigate()
  const handleClick_menu: MenuProps['onClick'] = (e) => {
    navigate(e.key)
  }

  const [isCollapse, setIsCollapse] = useState(false)
  const handleCollapse = () => {
    setIsCollapse(!isCollapse)
  }

  const contentTitle = useMemo(
    () => CONST_TOOL.getLabelByValue(location.pathname.slice(1) as any),
    [location.pathname]
  )

  return (
    <>
      <Layout className="h-full overflow-hidden">
        <Layout.Sider
          className="relative bg-white!"
          width={isCollapse ? 0 : 280}
        >
          <Menu
            mode="inline"
            className="h-full"
            items={menuItems}
            selectedKeys={selectedMenuKeys}
            onClick={handleClick_menu}
          />
          <div
            className="absolute bottom-[50%] right-0 translate-x-[50%]"
            onClick={handleCollapse}
          >
            <Button
              shape="circle"
              icon={isCollapse ? <RightOutlined /> : <LeftOutlined />}
            />
          </div>
        </Layout.Sider>
        <Layout.Content className="h-full p-2 bg-white overflow-auto">
          <div className="w-[210mm] m-auto">
            <h2 className="pb-2 text-2xl text-center">{contentTitle}</h2>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </div>
        </Layout.Content>
      </Layout>
    </>
  )
}

export default Views
