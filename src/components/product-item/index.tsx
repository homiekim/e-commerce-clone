import React from 'react'
import styles from './product.module.scss'

interface Props {
  item: Omit<Product, 'size' | 'description' | 'seller'>
}
const ProductItem = ({ item }: Props) => {
  return <li className={styles.container}>{item.name}</li>
}

export default ProductItem
