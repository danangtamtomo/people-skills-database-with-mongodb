/**
 * Created by lightmitch on 3/19/17.
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema
var userSchema = new Schema({
  name: String,
  phone: String,
  skills: [{ type: Schema.Types.ObjectId, ref: 'Skill' }]
}, {
  timestamps: true
})

var User = mongoose.model('User', userSchema)
module.exports = User
