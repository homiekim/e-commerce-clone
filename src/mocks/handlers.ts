import { rest } from 'msw'

export const handlers = [
  rest.get('/list', (_, res, ctx) => {
    const list = sessionStorage.getItem('items')
    const items = (JSON.parse(list as string) as Array<Product>).map(item => {
      const { id, name, price, imageUrl, isSoldOut } = item
      return {
        id,
        name,
        price,
        imageUrl,
        isSoldOut,
      }
    })
    return res(ctx.status(200), ctx.json(items))
  }),

  rest.get('/detail', (req, res, ctx) => {
    const id = parseInt(req.url.searchParams.get('id') as string)
    const list = sessionStorage.getItem('items')
    const item = (JSON.parse(list as string) as Array<Product>).find(item => item.id === id)
    return res(ctx.status(200), ctx.json(item))
  }),
  // TODO: cart 요청을 굳이 두개 안 만들고 cartList => number배열만 가지고 있다가 그냥 productList는 캐싱하고 있으니까 여기서 필터링 하는게 더 좋을 듯 함
  rest.get('/cart', (_, res, ctx) => {
    const cartItems = sessionStorage.getItem('cart')
    if (!cartItems) {
      return res(ctx.status(200), ctx.json([]))
    }
    return res(ctx.status(200), ctx.json(JSON.parse(cartItems)))
  }),

  rest.get('/cart/items', (_, res, ctx) => {
    const cartList = JSON.parse(sessionStorage.getItem('cart') as string) as Array<number>
    const productList = (JSON.parse(sessionStorage.getItem('items') as string) as Array<Product>)
      .filter(item => cartList.includes(item.id))
      .map(item => {
        const { id, name, price, imageUrl, isSoldOut } = item
        return {
          id,
          name,
          price,
          imageUrl,
          isSoldOut,
        }
      })
    return res(ctx.status(200), ctx.json(productList))
  }),

  rest.post('/cart', async (req, res, ctx) => {
    const { id } = (await req.json()) as { id: number }
    const cartItems = sessionStorage.getItem('cart')
    if (!cartItems) {
      sessionStorage.setItem('cart', JSON.stringify([id]))
    } else {
      const cartList = JSON.parse(cartItems as string) as Array<number>
      sessionStorage.setItem('cart', JSON.stringify([id, ...cartList]))
    }
    return res(ctx.status(200))
  }),

  rest.post('/create', async (req, res, ctx) => {
    const reqProduct = (await req.json()) as Product
    const products = JSON.parse(sessionStorage.getItem('items') as string) as Array<Product>
    const newProduct = { ...reqProduct, id: products.length + 1, isSoldOut: false }
    sessionStorage.setItem('items', JSON.stringify([newProduct, ...products!]))
    return res(ctx.status(200))
  }),
]
