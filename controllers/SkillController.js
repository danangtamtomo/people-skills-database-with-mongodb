/**
 * Created by lightmitch on 3/19/17.
 */
/**
 * Created by lightmitch on 3/19/17.
 */
const Skill = require('../models/Skill')
const SkillController = {}

SkillController.getSkills = function (req, res, next) {
  Skill.find({})
    // .populate('user')
    .then(function (skills) {
      res.send(skills)
    })
}

SkillController.getSkill = function (req, res, next) {
  Skill.find({
    _id: req.params.id
  })
    // .populate('user')
    .then(function (skill) {
      res.send(skill)
    })
}

SkillController.createSkill = function (req, res, next) {
  var skill = new Skill(req.body)
  skill.save()
    .then(function (skill) {
      res.send({
        status: 'Ok',
        message: 'New skill has been created',
        skill: skill
      })
    }).catch(function (err) {
    res.send({
      status: 'Error',
      message: err.message
    })
  })
}

module.exports = SkillController

