const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const http = require('http')
const path = require('path')
const cors = require('cors')

//routes
const userRouter = require('./src/routes/user')
const chatRouter = require('./src/routes/chat')

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))

// User.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br', password: '123456' });

app.use('/users', userRouter)
app.use('/chats', chatRouter)

// app.get('/', function(req, res) {
//     res.send('teste')
// })

const server = http.createServer(app)
server.listen(3000, function() {
    console.log('O servidor está rodando.')
})