import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from '@routes/index.tsx'
import { worker } from 'mocks/worker'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import 'global.scss'

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
