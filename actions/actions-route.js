const express = require('express')

const Actions = require('../data/helpers/actionModel')

const router = express.Router()

// this is getting list of actions
router.get('/', (req, res) => {
  Actions.get()
    .then(actions => {
      res.status(200).json(actions)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: "error getting actions"
      })
    })
})

// this is getting by ID
router.get('/:id', (req, res) => {
  Actions.get(req.params.id)
    .then(actions => {
      res.status(200).json(actions)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({message: "error getting action id"})
    })
})

// this is posting
router.post('/', (req, res) => {
  Actions.insert(req.body)
    .then(action => {
      res.status(201).json(action)
    })
    .catch(err => {
      res.status(400).json({
        message: "missing required field"
      })
    })
})

// this is deleting !!!!
router.delete('/:id', (req, res) => {
  Actions.remove(req.params.id)
    .then(action => {
      if (action) {
        res.status(200).json({message: "action deleted"})
      } else {
        res.status(404).json({message: "did not find action"})
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: "error deleting action"
      })
    })
})

// this is updating!!!
router.put('/:id', (req, res) => {
  Actions.update(req.params.id, req.body)
    .then(action => {
      if (action) {
        res.status(201).json(action)
      } else {
        res.status(400).json({message: "missing required field"})
      }
    })
    .catch(err => {
      console.log(err)
      res.status(400).json({
        message: "missing action data"
      })
    })
})



module.exports = router;