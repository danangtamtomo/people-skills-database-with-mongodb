/**
 * Created by lightmitch on 3/19/17.
 */
const fs = require('fs')
const Skill = require('./models/Skill')
const User = require('./models/User')

// let skillsSeederFile = fs.readFileSync('./skills_seeder.json', 'utf8')
// let skillsJson = JSON.parse(skillsSeederFile)
// skillsJson.forEach(function (skill) {
//   let SkillModel = new Skill(skill)
//   console.log(SkillModel)
//     SkillModel.save()
//       .then(function (newSkill) {
//       console.log(`Seeding ${newSkill.skill_name} successfully..`)
//     })
//     .catch(function (err) {
//      if (err) console.log(err.message)
//     })
// })

let usersSeederFile = fs.readFileSync('./users_seeder.json', 'utf8')
let usersJson = JSON.parse(usersSeederFile)
usersJson.forEach(function (user) {
  let UserModel = new User(user)
  UserModel.save()
    .then(function (newUser) {
      console.log(`Seeding ${newUser.name} successfully..`)
    })
    .catch(function (err) {
      if (err) console.log(err.message.error)
    })
})

