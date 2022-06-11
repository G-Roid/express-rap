const express = require('express')
const app = express()

app.get('/', (request, response) => {
    console.log('server running.....')
    response.sendFile(__dirname + '/index.html')

})

app.listen(8000)