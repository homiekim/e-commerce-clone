import axios from 'axios'
export const getProductList = async (): Promise<Array<ProductListType>> => {
  return await axios.get('/list').then(res => res.data)
}

export const getProductDetail = async ({ id }: { id: number }) => {
  return await axios
    .get('/detail', {
      params: {
        id,
      },
    })
    .then(res => res.data)
}
