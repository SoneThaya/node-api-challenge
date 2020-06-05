const express = require('express')

const Projects = require('../data/helpers/projectModel')

const router = express.Router()

router.get('/', (req, res) => {
  Projects.get()
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(err => {
      console.log(error)
      res.status(500).json({
        error: "error getting projects"
      })
    })
})

router.get('/:id', (req, res) => {

  Projects.get(req.params.id)
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({message: "error getting project id"})
    })
})

// needs work not posting 
router.post('/', (req, res) => {
  Projects.insert(req.body)
    .then(project => {
      res.status(201).json(project)
    })
    .catch(err => {
      res.status(400).json({
        message: "missing required field"
      })
    })
})

router.delete('/:id', (req, res) => {
  Projects.remove(req.params.id)
    .then(project => {
      if (project) {
        res.status(200).json({message: "project deleted"})
      } else {
        res.status(404).json({message: "did not find project"})
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: "error deleting project"
      })
    })
})

router.put('/:id', (req, res) => {
  Projects.update(req.params.id, req.body)
    .then(project => {
      if (project) {
        res.status(201).json(project)
      } else {
        res.status(400).json({ message: "missing required field"})
      }
    })
    .catch(err => {
      console.log(err)
      res.status(400).json({
        message: "missing project data"
      })
    })
})

module.exports = router;