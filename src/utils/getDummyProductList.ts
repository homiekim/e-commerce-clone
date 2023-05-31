const dummyImages = [
  'https://d2kchovjbwl1tk.cloudfront.net/vendor/19/product/Black_1673337663685.jpg',
  'https://d2kchovjbwl1tk.cloudfront.net/images/products/Blossom_Scarf_1659756957802.png',
  'https://d2kchovjbwl1tk.cloudfront.net/vendor/19/product/Latte_2_1673836797880.jpeg',
  'https://d2kchovjbwl1tk.cloudfront.net/vendor/19/product/Dustypink_1679275096630.jpeg',
  'https://d2kchovjbwl1tk.cloudfront.net/vendor/19/product/Forest_1680329339441.jpg',
  'https://d2kchovjbwl1tk.cloudfront.net/vendor/19/product/Grape_1680329401956.jpg',
  'https://d2kchovjbwl1tk.cloudfront.net/vendor/19/product/Lavender_1680329789509.jpg',
  'https://d2kchovjbwl1tk.cloudfront.net/vendor/19/product/Lylac_Sachet_1680329819835.jpg',
  'https://d2kchovjbwl1tk.cloudfront.net/vendor/19/product/Mauve_1680329890247.jpg',
  'https://d2kchovjbwl1tk.cloudfront.net/vendor/19/product/Military_Olive_1680329914419.jpg',
]

export const getDummyProductList = (): Array<Product> => {
  return Array(10)
    .fill(this)
    .map((_, i) => ({
      id: i,
      name: '상품 이름 ' + i,
      price: (i + 1) * 1000,
      imageUrl: dummyImages[i],
      isSoldOut: false,
      size: ['S', 'M', 'L'],
      seller: '파는 사람 ' + i,
      description: '상품 설명 ' + i,
    }))
}
