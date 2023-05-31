import axios from 'axios'
export const getProductList = async () => {
  return await axios.get('/list').then(res => res.data)
}
