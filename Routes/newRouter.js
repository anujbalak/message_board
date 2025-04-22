import { Router } from 'express'
import { messages } from '../data/messages.js'
import { insertMessage } from '../db/queries.js'

const newRouter = Router()

newRouter.get('/', (req, res) => {
    res.render('pages/new')
})

newRouter.post('/', async (req, res) => {
   const { username, messageText} = req.body;
   await insertMessage(username, messageText);
   res.redirect('/')
})

export { newRouter }