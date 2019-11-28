const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const http = require('http')
const path = require('path')
const cors = require('cors')
const socketio = require("socket.io");

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

global.io = socketio(server);

global.clients = [];

// Recebe conexão dos usuários no servidor
io.on("connection", async(client) => {

    id = client.request._query['id']

    clients = await clients.filter(client => client.id !== id)

    clients.push({
        id: id,
        socket: client.id
    })

    setTimeout(() => {
        io.emit('clients_update', clients)
    }, 1000);
    

    console.log('clientes conectados:'+JSON.stringify(clients))

    // client.on('disconnect', async() => {

    //     console.log('desconectado: '+id)

    //     clients = await clients.filter(client => client.id !== id)
    
    //     io.emit('clients_update', clients)
    
    // })

})

