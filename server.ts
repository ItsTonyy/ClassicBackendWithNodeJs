import express from 'express'
import type {Request, Response} from 'express'

const app = express()
const PORT = 3000

interface requestBody {
  name: string,
}

//middleware
app.use(express.json())

const data = ['Tony']

app.listen(PORT, () => console.log(`backend is running on PORT ${PORT}`))

// Type 1 - website endpoints, send html when requested 

app.get('/', (req: Request, res: Response) => {
  console.log('default endpoint hitted', req.method)
  res.status(200)
  res.send(`
    <body style="background-color: black; color:white;">
      <a href='/dashboard' style="color:white;"> Dashboard </a>
      <h1>Home Endpoint
        <h2>${JSON.stringify(data)}</h2>
       </h1>
    </body>
  `)
})  

app.get('/dashboard', (req: Request, res: Response) => {
  console.log('dashboad endpoint hitted', req.method)
   res.send(`
    <body style="background-color: black; color:white;">
      <a href='/' style="color:white;"> Home </a>
      <h1>Dashboard Endpoint
        <h2>${JSON.stringify(data)}</h2>
       </h1>
    </body>
  `)
})

// Type 2 - API endpoints, sends data when requested (non-visual)

app.get('/api/data', (req: Request, res: Response) => {
  console.log('sending data...', req.method)
  res.send(data)
})

app.post('/api/data', (req: Request, res: Response) => {
  const reqBody: requestBody = req.body
  console.log(`pushing to the array: ${reqBody.name}`)
  data.push(reqBody.name)
  res.status(201)
})

app.delete('/api/data', (req: Request, res: Response) => {
  data.pop()
  console.log('deleted the last element from the data array')
  res.status(203)
})