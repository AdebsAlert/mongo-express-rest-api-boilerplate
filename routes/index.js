const routes = require('express').Router()
var User = require('../models/user')

routes.get('/users', (req, res, next) => {
  User.find({}).then(function (user) {
    res.status(200).json(user)
  }).catch(next)
})

routes.post('/users', (req, res, next) => {
  User.create(req.body).then(function (user) {
    res.status(200).json(user)
  }).catch(next)
})

routes.put('/users/:id', (req, res, next) => {
  User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function () {
    User.findOne({_id: req.params.id}).then(function (user) {
      res.status(200).json(user)
    }).catch(next)
  }).catch(next)
})

routes.delete('/users/:id', (req, res, next) => {
  User.findByIdAndRemove({_id: req.params.id}).then(function (user) {
    res.status(200).json(user)
  }).catch(next)
})

module.exports = routes
