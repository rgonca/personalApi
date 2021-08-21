const express = require('express')

let app = express()

let port = process.env.PORT || 5000

app.get('/', function (req, res) {
    res.json({ mensaje: '¡Hola Mundo!' })
})

app.listen(port)
console.log('API escuchando en el puerto ' + port)