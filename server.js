const express = require('express')

const morgan = require('morgan')

const server = express()

const projectRouter = require('./projects/projects-router')

server.use(morgan('combined'))
server.use(express.json())

server.use('/api/projects', projectRouter)





module.exports = server;