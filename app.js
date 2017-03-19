/**
 * Created by lightmitch on 3/19/17.
 */
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoDbConnection = require('./configs/mongodb')
var users = require('./routes/users')
var skills = require('./routes/skills')

mongoDbConnection.on('error', console.error.bind(console, 'connection error:'))
mongoDbConnection.once('open', function () {
  console.log('Mongodb is connected')
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/user', users)
app.use('/skill', skills)


app.listen(3000)

