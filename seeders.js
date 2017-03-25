/**
 * Created by lightmitch on 3/19/17.
 */
var mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(`mongodb://localhost/people`)

var db = mongoose.connection

const fs = require('fs')
const Skill = require('./models/Skill')
const User = require('./models/User')

function seeders () {
  let skillsSeederFile = fs.readFileSync('./skills_seeder.json', 'utf8')
  let skillsJson = JSON.parse(skillsSeederFile)
  skillsJson.forEach(function (skill) {
    let SkillModel = new Skill(skill)
    SkillModel.save()
      .then(function (newSkill) {
        console.log(`Seeding ${newSkill.skill_name} successfully..`)
      })
      .catch(function (err) {
        if (err) console.log(err.message)
      })
  })

  let usersSeederFile = fs.readFileSync('./users_seeder.json', 'utf8')
  let usersJson = JSON.parse(usersSeederFile)

  usersJson.forEach(function (user) {
    let UserModel = new User(user)
    UserModel.save()
      .then(function (newUser) {
        if (newUser) {
          console.log(`Seeding ${newUser.name} successfully..`)
        }
      })
      .catch(function (err) {
        if (err) console.log(err)
      })
  })
}

seeders()
