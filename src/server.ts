import express from 'express'
import type {Request, Response} from 'express'

const app = express()
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`backend is running on PORT ${PORT}`))