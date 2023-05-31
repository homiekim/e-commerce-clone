type sizeType = 'XS' | 'S' | 'M' | 'L' | 'XL'
interface Product {
  id: number
  name: string
  price: number
  imageUrl: string
  isSoldOut: boolean 
  /* detail */
  description: string
  seller: string
  size?: Array<sizeType> | string
}

type ProductListType = Omit<Product, 'size' | 'description' | 'seller'>