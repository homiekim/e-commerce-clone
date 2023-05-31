import React, { Suspense, useEffect } from 'react'
import { getDummyProductList } from '@utils/getDummyProductList'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Header from '@components/header'

const App = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === '/' || !sessionStorage.getItem('items')) {
      sessionStorage.setItem('items', JSON.stringify(getDummyProductList()))
      navigate('/product/list')
    }
  }, [])
  return (
    <main>
      <Header />
      <Suspense fallback={'로딩'}>
        <Outlet />
      </Suspense>
    </main>
  )
}
export default App
