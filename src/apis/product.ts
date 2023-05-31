import axios from 'axios'
export const getProductList = async (): Promise<Array<ProductListType>> => {
  return await axios.get('/list').then(res => res.data)
}
