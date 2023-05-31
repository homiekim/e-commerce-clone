import { rest } from 'msw'

export const handlers = [
  rest.get('/list', (_, res, ctx) => {
    const item = sessionStorage.getItem('item')
    return res(
      ctx.status(200),
      ctx.json({
        item,
      }),
    )
  }),
]
