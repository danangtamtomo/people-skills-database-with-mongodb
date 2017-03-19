/**
 * Created by lightmitch on 3/19/17.
 */
const User = require('../models/User')
const UserController = {}

UserController.getUsers = function (req, res, next) {
  User.find({})
    // .populate('skills')
    .then(function (users) {
      res.send(users)
    })
}

UserController.getUser = function (req, res, next) {
  User.find({
    _id: req.params.id
  })
    // .populate('skills')
    .then(function (user) {
      res.send(user)
    })
}

UserController.createUser = function (req, res, next) {
  var user = new User(req.body)
  user.save()
    .then(function (user) {
      res.send({
        status: 'Ok',
        message: 'New user has been created',
        user: user
      })
    }).catch(function (err) {
      res.send({
        status: 'Error',
        message: err
      })
    })
}

module.exports = UserController
