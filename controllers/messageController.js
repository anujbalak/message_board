import asynceHandler from 'express-async-handler'
import { getMessageById } from '../data/messages.js'
import { getMessage } from '../db/queries.js'

export const messageController = asynceHandler(async (req, res) => {
    const { messageId } = req.params
    const message = await getMessage(Number(messageId));

    if (!message) return res.render('pages/error', {error: 'Following message does not exist'});
    res.render('pages/message', {message})
})