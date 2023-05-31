import { getProductDetail } from '@apis/product'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
  const { id } = useParams()
  const { data } = useQuery({
    queryKey: ['product', 'detail', id],
    queryFn: () => getProductDetail({ id: Number(id) }),
  })
  console.log(data)
  if (!data) return null
  return <div>{id}</div>
}

export default ProductDetailPage
