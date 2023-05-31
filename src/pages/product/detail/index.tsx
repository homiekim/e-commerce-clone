import React from 'react'
import { getProductDetail } from '@apis/product'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import styles from './detail.module.scss'
import Stock from '@components/stock'
import Button from '@components/button'

const ProductDetailPage = () => {
  const { id } = useParams()
  const { data } = useQuery({
    queryKey: ['product', 'detail', id],
    queryFn: () => getProductDetail({ id: Number(id) }),
  })
  console.log(data)
  if (!data) return null
  return (
    <div className={styles.layout}>
      <img src={data.imageUrl} />
      <div className={styles.info}>
        <Stock isSoldOut={data.isSoldOut} />
        <h3 style={{ margin: '16px 0px' }}>{data.name}</h3>
        <span>{data.price} ₩</span>
        <Button style={{ width: '100%', margin: '24px 0px' }} text="Add Cart" />
        <span>Size : </span>
        {Array.isArray(data.size) ? (
          <ul className={styles['size-list']}>
            {data.size.map((size, idx) => (
              <li key={`${size}_${idx}`}>
                <span>{size}</span>
                <Button text="구입" isColor={false} />
              </li>
            ))}
          </ul>
        ) : (
          (data.size as string)
        )}
        <p>{data.description}</p>
        <Button
          style={{ width: '100%' }}
          text={`${data.seller} 에게 메세지를 보내시겠습니까?`}
          isColor={false}
        />
      </div>
    </div>
  )
}

export default ProductDetailPage
