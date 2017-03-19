var mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(`mongodb://localhost/people`)

var db = mongoose.connection

module.exports = db

