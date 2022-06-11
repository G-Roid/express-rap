const express = require('express')
const app = express()
const cors = require('cors')

app.use(cor())

app.get('/', (request, response) => {
    console.log('server running.....')
    response.sendFile(__dirname + '/index.html')

})

app.listen(8000)