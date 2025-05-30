import express from 'express'
import path from 'node:path'
import url from "node:url"
const app = express()

import { indexRouter } from './Routes/indexRouter.js'
import { newRouter } from './Routes/newRouter.js'
import { messageRouter } from './Routes/messageRouter.js'

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 8000;

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

export const title = {
    index: 'Index',
    new: 'New'
}
const assetsPath = path.join(__dirname, 'public')
app.use(express.static(assetsPath))

app.use(express.urlencoded({extended: true}));

app.use('/', indexRouter)
app.use('/messages' || '/message', messageRouter)

app.use('/new', newRouter);
app.use((req, res) => {
    res.status(404).render('pages/error', {error: 'We run into an error!'})
})

app.listen(PORT , () => {
    console.log('Server started at ' + PORT);
})