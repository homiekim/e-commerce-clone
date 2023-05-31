import { getDummyProductList } from '@utils/getDummyProductList'
import React, { Suspense, useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const App = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === '/' && !sessionStorage.getItem('item')) {
      sessionStorage.setItem('item', JSON.stringify(getDummyProductList()))
      navigate('/product/list')
    }
  }, [])
  return (
    <div>
      <h1>test</h1>
      <Suspense fallback={'로딩'}>
        <Outlet />
      </Suspense>
    </div>
  )
}
export default App
