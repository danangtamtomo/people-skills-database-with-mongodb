/**
 * Created by lightmitch on 3/19/17.
 */
const User = require('../models/User')
const Skill = require('../models/Skill')
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

UserController.addSkill = function (req, res, next) {
  Skill.create(req.body)
    .then(function (skill) {
      User.findByIdAndUpdate(req.params.id,
        {
          $push: {
            skills: skill._id
          }
        }
      )
        .then(function (user) {
          res.send({
            status: 'Ok',
            message: `${user.name} has been added ${skill.skill_name} skill`,
            user: user
          })
        })
        .catch(function (err) {
          res.send({
            status: 'Error',
            message: err
          })
        })
    })
    .catch(function (err) {
      console.log(err.message)
    })
}

module.exports = UserController
