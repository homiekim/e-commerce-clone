import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
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
