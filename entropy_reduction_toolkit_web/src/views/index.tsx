import { Layout, Menu, type MenuProps } from 'antd'

import routes from '@/routes'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useMemo } from 'react'
import CONST_TOOL from '@/const/tool'

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

  const contentTitle = useMemo(
    () => CONST_TOOL.getLabelByValue(location.pathname.slice(1) as any),
    [location.pathname]
  )

  return (
    <>
      <Layout className="h-full overflow-hidden">
        <Layout.Sider className="bg-white!" width={280}>
          <Menu
            mode="inline"
            className="h-full"
            items={menuItems}
            selectedKeys={selectedMenuKeys}
            onClick={handleClick_menu}
          />
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
