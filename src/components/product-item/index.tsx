import React from 'react'
import styles from './product.module.scss'
import { useNavigate } from 'react-router-dom'
import Stock from '@components/stock'

interface Props {
  item: ProductListType
}
const ProductItem = ({ item }: Props) => {
  const navigate = useNavigate()
  return (
    <li className={styles.container} onClick={() => navigate(`/product/${item.id}`)}>
      <img src={item.imageUrl} />
      <div className={styles.info}>
        <span style={{ fontSize: 18 }}>{item.name}</span>
        <span>{item.price} ₩</span>
      </div>
      <Stock isSoldOut={item.isSoldOut} />
    </li>
  )
}

export default ProductItem
