import React from 'react'
import { getProductList } from '@apis/product'
import { useQuery } from '@tanstack/react-query'
import ProductItem from '@components/product-item'

import styles from './list.module.scss'

const ProductListPage = () => {
  const { data } = useQuery({
    queryKey: ['list'],
    queryFn: () => getProductList(),
  })
  console.log(data)
  if (!data) return null
  return (
    <div>
      <ul className={styles['product-list']}>
        {data.map(item => (
          <ProductItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default ProductListPage
