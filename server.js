const express = require('express')
const app = express()
const PORT = 8000

const cors = require('cors')
app.use(cors())

app.use(express.json())

const pastas = {
    penne: {    
        type: 'tube',
        time: '2 minutes'
    },
    spaghetti: {
        type: 'long',
        time: '4 minutes'
    },
    unknown: {
        type: 'unknown',
        time: 'unknown'
    }
    

}

app.use(express.static('public'))

app.get('/', (request, response) => {
    console.log('server running.....')
    response.sendFile(__dirname + '/index.html')

})

app.get('/api', (request, response) => {
    response.json(pastas)
})

app.get('/api/:name', (request,response)=>{
    const pasta = request.params.name.toLowerCase()
    if(pastas[pasta]){
        response.json(pastas[pasta])
    }else{
        response.json(pastas['unknown'])
    } 
})


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})