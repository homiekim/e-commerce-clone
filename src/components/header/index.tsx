import React from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './header.module.scss'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <span onClick={() => navigate('/product/list')}>HOME</span>
      <span onClick={() => navigate('/cart')}>CART</span>
    </div>
  )
}

export default Header
