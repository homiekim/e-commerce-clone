import React from 'react'
import { getProductList } from '@apis/product'
import { useQuery } from '@tanstack/react-query'

const ProductListPage = () => {
  const { data } = useQuery({
    queryKey: ['list'],
    queryFn: () => getProductList(),
  })
  console.log(data)
  if (!data) return null
  return <div>df</div>
}

export default ProductListPage
