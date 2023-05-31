import React, { Suspense, useEffect } from 'react'
import { getDummyProductList } from '@utils/getDummyProductList'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const App = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === '/' && !sessionStorage.getItem('items')) {
      sessionStorage.setItem('items', JSON.stringify(getDummyProductList()))
    }
    navigate('/product/list')
  }, [])
  return (
    <main>
      <h1>test</h1>
      <Suspense fallback={'로딩'}>
        <Outlet />
      </Suspense>
    </main>
  )
}
export default App
