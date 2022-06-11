const express = require('express')
const app = express()
const PORT = 8000
// const cors = require('cors')

// app.use(cors())

pastas = {
    penne: {
        type: 'tube',
        time: '2 minutes'
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

app.get('/api/rap/:name', (request,response)=>{
    const rapName = request.params.name.toLowerCase()
    if(rappers[rapName]){
        response.json(rappers[rapName])
    }else{
        response.json(rappers['unknown'])
    } 
})


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})