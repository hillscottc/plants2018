import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import apiPlants from './api_plants'

const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))

const port = process.env.PORT || 3010

app.set('port', port)

// Enable CORS (cross-origin resource sharing)
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  if (req.method === 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
})

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/hello', (req, res) => {
  res.status(200).json({express: 'Hello From the api'})
})

app.use('/api', apiPlants)

// needs path to a dist dir. I should copy from build to dist, maybe? Or serve build?
// app.use(express.static(__dirname +'./../../'));

app.listen(port, () => {
  console.log(`Server at: http://localhost:${port}/`) // eslint-disable-line no-console
})
