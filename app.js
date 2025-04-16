import express from 'express'
import path from 'node:path'
import url from "node:url"
const app = express()

import { indexRouter } from './Routers/indexRouter.js'

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 4000;

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

export const messages = [
    {
        text: 'Hi there!',
        user: 'Balak',
        added: new Date()
    },
    {
        text: 'Namskar',
        user: "Charles",
        added: new Date(),
    },
    {
        text: 'What the hell in this world',
        user: 'Danush',
        added: new Date(),
    }
]

export const title = {
    index: 'Index',
    new: 'New'
}

app.use('/', indexRouter)


app.listen(PORT , () => {
    console.log('Server started at ' + PORT);
})