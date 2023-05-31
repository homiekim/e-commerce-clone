import { rest } from 'msw'

export const handlers = [
  rest.get('/list', (_, res, ctx) => {
    const list = sessionStorage.getItem('item')
    const item = JSON.parse(list!)
    return res(
      ctx.status(200),
      ctx.json({
        item,
      }),
    )
  }),
]
