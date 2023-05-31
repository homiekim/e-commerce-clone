import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import styles from './admin.module.scss'
import Button from '@components/button'
import { useMutation } from '@tanstack/react-query'
import { createProduct } from '@apis/product'
import { useNavigate } from 'react-router-dom'

/*
  name: string
  price: number
  imageUrl: string
  description: string
  seller: string
  size?: Array<sizeType> | string
*/

const AdminPage = () => {
  const [previewImg, setPreviewImg] = useState<string>('')
  const navigate = useNavigate()

  const { register, handleSubmit, setValue, watch } = useForm<Product>({
    defaultValues: {
      name: '',
      price: 0,
      description: '',
      seller: '',
      imageUrl: '',
      size: [],
    },
  })

  const { mutate } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      navigate('/product/list')
    },
  })

  const inputRef = useRef<HTMLInputElement | null>(null)

  const { ref, onChange, ...rest } = register('imageUrl')
  const selected = watch('size') as Array<sizeType>
  const onSubmit = (data: Product) => {
    console.log(data)
    mutate({ ...data })
  }
  const checkedHandler = (e: React.ChangeEvent<HTMLInputElement>, size: sizeType) => {
    const checked = e.target.checked
    if (checked) {
      setValue('size', [size, ...selected])
    } else {
      setValue(
        'size',
        selected.filter(item => item !== size),
      )
    }
  }
  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const Images = e.target.files
    const img = (Images as FileList)[0]
    // 업로드 이미지 미리보기
    if ((e.target.files as FileList).length) {
      const reader = new FileReader()
      reader.readAsDataURL(img)
      reader.onload = function (e) {
        setPreviewImg(e.target!.result as string)
        setValue('imageUrl', e.target!.result as string)
      }
    }
  }
  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <label>상품명</label>
      <input {...register('name')} />
      <label>가격</label>
      <input {...register('price')} />
      <label>상품 설명</label>
      <input {...register('description')} />
      <label>판매자</label>
      <input {...register('seller')} />
      <label>사이즈</label>
      <div className={styles.options}>
        <input type="checkbox" onChange={e => checkedHandler(e, 'XS')} />
        <label>XS</label>
        <input type="checkbox" onChange={e => checkedHandler(e, 'S')} />
        <label>S</label>
        <input type="checkbox" onChange={e => checkedHandler(e, 'M')} />
        <label>M</label>
        <input type="checkbox" onChange={e => checkedHandler(e, 'L')} />
        <label>L</label>
        <input type="checkbox" onChange={e => checkedHandler(e, 'XL')} />
        <label>XL</label>
      </div>
      <Button
        type="button"
        text="상품 이미지 선택"
        isColor={false}
        onClick={() => inputRef.current?.click()}
      />
      <input
        {...rest}
        type="file"
        onChange={fileChangeHandler}
        ref={e => {
          ref(e)
          inputRef.current = e
        }}
        hidden
      />
      {previewImg && <img style={{ width: 100, height: 100 }} src={previewImg} />}
      <Button type="submit" text="상품 추가 하기" />
    </form>
  )
}

export default AdminPage
