const express = require('express')

const morgan = require('morgan')

const server = express()

const projectRouter = require('./projects/projects-router')

const actionRouter = require('./actions/actions-route')

server.use(morgan('combined'))
server.use(express.json())

server.use('/api/projects', projectRouter)
server.use('/api/actions', actionRouter)





module.exports = server;