import asynceHandler from 'express-async-handler'
import { getMessageById } from '../data/messages.js'

export const messageController = asynceHandler(async (req, res) => {
    const { messageId } = req.params
    const message = getMessageById(Number(messageId))

    if (!message) return res.send('Message does exits');
    res.render('pages/message', {message})
})