/**
 * Created by lightmitch on 3/19/17.
 */
const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

router.get('/', UserController.getUsers)
router.get('/:id', UserController.getUser)
router.post('/', UserController.createUser)

module.exports = router

