const express = require('express')

const router = express.Router()
const authenticateUser = require('../middleware/authentication')
const {
  createUser,
  loginByUser,
  dashboard,
  createTopicAndContent,
} = require('../controllers/home_controller')

router.route('/landingPage').post(loginByUser)
router.route('/create-user').post(createUser)
router.route('/dashboard').get(authenticateUser, dashboard)
router.route('/topiContent').post(authenticateUser, createTopicAndContent)
module.exports = router
