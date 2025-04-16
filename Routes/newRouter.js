import { Router } from 'express'
import { messages } from '../data/messages.js'

const newRouter = Router()

newRouter.get('/', (req, res) => {
    res.render('pages/new')
})

newRouter.post('/', (req, res) => {
   const { username, messageText} = req.body;
   messages.push({
    text: messageText,
    user: username,
    id: messages.length + 1,
    added: new Date(),
   })
   res.redirect('/')
})

export { newRouter }