import http from 'http'

import express from 'express'

import server1 from 'server-1'

const PORT = 8080
const app = express()
const router = express.Router()

app.use('/server1', server1(router))

app.get('*', (req, res) =>res.status(200).send('Express server running'))

http.createServer(app).listen(PORT, err=>{ if(err){ throw err }})
console.log(`Server running port ${PORT}`)