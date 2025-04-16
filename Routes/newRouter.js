import { Router } from 'express'

const newRouter = Router()

newRouter.get('/', (req, res) => {
    res.end()
})

export { newRouter }