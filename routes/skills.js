/**
 * Created by lightmitch on 3/19/17.
 */
const express = require('express')
const router = express.Router()
const SkillController = require('../controllers/SkillController')

router.get('/', SkillController.getSkills)
router.get('/:id', SkillController.getSkill)
router.post('/', SkillController.createSkill)

module.exports = router
