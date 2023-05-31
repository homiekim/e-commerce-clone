import React from 'react'

import App from 'App'
import { createBrowserRouter } from 'react-router-dom'

const ProductListPage = React.lazy(() => import('@pages/product/list'))
const ProductDetailPage = React.lazy(() => import('@pages/product/detail'))
const AdminPage = React.lazy(() => import('@pages/admin'))
const CartPage = React.lazy(() => import('pages/cart'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/product',
        children: [
          {
            path: 'list',
            element: <ProductListPage />,
          },
          {
            path: ':id',
            element: <ProductDetailPage />,
          },
        ],
      },
      {
        path: '/admin',
        element: <AdminPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
])

export default router
