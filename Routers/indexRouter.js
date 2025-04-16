import { Router } from "express";
import { messages, title } from "../app.js";

const indexRouter = Router()

indexRouter.get('/', (req, res) => {
    res.render('pages/index', {messages, title})
})

export { indexRouter }