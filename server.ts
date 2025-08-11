import type {Request, Response} from 'express'
import express from 'express'

const app = express()
const PORT = 3000

const data = { 
  name: 'Tony',
  language: 'Nodejs',
  framework: 'Express.js'
}


app.listen(PORT, () => console.log(`backend is running on PORT ${PORT}`))

// Type 1 - website endpoints, send html when requested 

app.get('/', (req: Request, res: Response) => {
  console.log('default endpoint hitted', req.method)
  res.status(200)
  res.send('<h1> This is the homepage <h1/>')
})  

app.get('/dashboard', (req: Request, res: Response) => {
  console.log('dashboad endpoint hitted', req.method)
  res.send('<h1> This is the dashboard <h1/>')
})

// Type 2 - API endpoints, sends data when requested (non-visual)

app.get('/api/data', (req: Request, res: Response) => {
  console.log('sending data...', req.method)
  res.send(data)
})
