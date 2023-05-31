import axios from 'axios'

export const addCartItem = async ({ id }: { id: number }) => {
  return await axios.post('/cart', {
    id,
  })
}

export const getCartList = async (): Promise<Array<number>> => {
  return await axios.get('/cart').then(res => res.data)
}

export const getCartItems = async (): Promise<Array<ProductListType>> => {
  return await axios.get('/cart/items').then(res => res.data)
}
