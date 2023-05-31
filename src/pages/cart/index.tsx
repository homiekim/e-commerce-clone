import React from 'react'
import { getCartItems } from '@apis/cart'
import ProductItem from '@components/product-item'
import { useQuery } from '@tanstack/react-query'

import styles from '../product/list/list.module.scss'

const CartPage = () => {
  const { data } = useQuery({
    queryKey: ['cart', 'list', 'detail'],
    queryFn: () => getCartItems(),
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

export default CartPage
