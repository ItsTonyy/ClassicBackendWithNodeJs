import express from 'express'
import type {Request, Response} from 'express'

const app = express()
const PORT = 3000

//middleware
app.use(express.json())

const data = { 
  name: 'Tony',
}

app.listen(PORT, () => console.log(`backend is running on PORT ${PORT}`))

// Type 1 - website endpoints, send html when requested 

app.get('/', (req: Request, res: Response) => {
  console.log('default endpoint hitted', req.method)
  res.status(200)
  res.send('<body style="background-color: pink"><h1> FINALMENTE PORRA <h1/></body>')
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

app.post('/api/data', (req: Request, res: Response) => {
  const reqBody = req.body
  res.status(201)
})