const express = require('express')
const app = express()

app.get('/loquesea', function(req, res){
    res.send('Hola sapa hijo de puta!!')
})

app.get('*', function(req, res){
    res.send('Lo que sea!!')
})

app.listen(3000)