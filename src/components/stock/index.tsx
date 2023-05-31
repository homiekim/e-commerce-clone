import React from 'react'
import styles from './stock.module.scss'
interface Props {
  isSoldOut: boolean
}

const Stock = ({ isSoldOut }: Props) => {
  return (
    <div className={`${styles.stock} ${isSoldOut ? styles['sold_out'] : styles['in_stock']}`}>
      {isSoldOut ? 'Sold Out' : 'In Stock'}
    </div>
  )
}

export default Stock
