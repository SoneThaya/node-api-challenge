const express = require('express')

const server = require('./server')



server.get('/', function (req, res) {
  res.send({message: 'hello'})
})




const PORT = 8000

server.listen(PORT, () => console.log(`\n == API on port ${PORT} == \n`))