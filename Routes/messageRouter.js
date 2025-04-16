import { Router } from "express";
import { messageController } from "../controllers/messageController.js";

const messageRouter = Router()

messageRouter.get('/', (req, res) => {
    res.redirect('/')
})

messageRouter.get('/:messageId', messageController)

export {messageRouter}