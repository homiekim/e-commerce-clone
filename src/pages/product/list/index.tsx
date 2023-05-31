import { getProductList } from '@apis/product'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const ProductListPage = () => {
  const { data } = useQuery({
    queryKey: ['list'],
    queryFn: () => getProductList(),
  })
  console.log(data)
  return <div>리스트 페이지</div>
}

export default ProductListPage
