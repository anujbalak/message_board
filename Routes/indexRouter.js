import { Router } from "express";
import { title } from "../app.js";
import { messages } from "../data/messages.js";

const indexRouter = Router()

indexRouter.get('/', (req, res) => {
    res.render('pages/index', {messages, title})
})

export { indexRouter }