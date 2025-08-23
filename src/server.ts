import express from 'express'
import type {Request, Response} from 'express'
import path, {dirname} from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = process.env.PORT || 5000

const __fileName = fileURLToPath(import.meta.url)

const __dirname = dirname(__fileName)

app.use(express.static(path.join(__dirname, '../public')))

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => console.log(`backend is running on PORT ${PORT}`))