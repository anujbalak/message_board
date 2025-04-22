import { Router } from "express";
import { title } from "../app.js";
import { getAllMessages } from "../db/queries.js";
const indexRouter = Router()

const messages = async () => {
    const messages =  await getAllMessages();
    return messages
}
const msgs = await messages()

indexRouter.get('/', (req, res) => {
    res.render('pages/index', {messages: msgs, title})
})

export { indexRouter }