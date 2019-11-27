const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const http = require('http')
const path = require('path')
const cors = require('cors')

//routes
const userRouter = require('./src/routes/user')
const messageRouter = require('./src/routes/message')
const conversationRouter = require('./src/routes/conversation')

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/users', userRouter)
app.use('/messages', messageRouter)
app.use('/conversations', conversationRouter)

const server = http.createServer(app)
server.listen(4000, function() {
    console.log('O servidor está rodando.')
})