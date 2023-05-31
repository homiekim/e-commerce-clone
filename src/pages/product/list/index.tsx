import React from 'react'
import { getProductList } from '@apis/product'
import { useQuery } from '@tanstack/react-query'
import ProductItem from '@components/product-item'

const ProductListPage = () => {
  const { data } = useQuery({
    queryKey: ['list'],
    queryFn: () => getProductList(),
  })
  console.log(data)
  if (!data) return null
  return (
    <div>
      <ul>
        {data.map(item => (
          <ProductItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default ProductListPage
