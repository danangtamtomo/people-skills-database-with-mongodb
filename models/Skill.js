/**
 * Created by lightmitch on 3/19/17.
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema
var skillSchema = new Schema({
  skill_name: String,
  quality: String,
  // user: { type: Schema.Types.ObjectId, ref: 'User' }
},{
  timestamps: true
})

skillSchema.pre('save', true, function (next, done) {
  mongoose.models['Skill'].findOne({
    skill_name : this.skill_name
  })
    .then(function (skill) {
      if (skill) {
        done(new Error('Skill name must be unique'))
      } else {
        done()
      }
    })
    .catch(function (err) {
      if (err) console.log(err.message)
    })
  next()
})

var Skill = mongoose.model('Skill', skillSchema)
module.exports = Skill
