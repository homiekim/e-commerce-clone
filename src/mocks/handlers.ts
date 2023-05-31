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
]
