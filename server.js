const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

app.get('/', (request, response) => {
    console.log('server running.....')
    response.sendFile(__dirname + '/index.html')

})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})