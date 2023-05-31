import { rest } from 'msw'

export const handlers = [
  rest.get('/list', (_, res, ctx) => {
    const list = sessionStorage.getItem('item')
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

    return res(
      ctx.status(200),
      ctx.json({
        list: items,
      }),
    )
  }),
]
