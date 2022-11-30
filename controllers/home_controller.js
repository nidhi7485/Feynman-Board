const User = require('../models/User')
const Topics = require('../models/Topics')
const { attachCookiesToResponse } = require('../utils/jwt')
var path = require('path')
const createUser = async (req, res) => {
  console.log(req.body, 'controller')
  const user = await User.create(req.body)
  const userToken = { name: user.userName, userId: user._id }
  attachCookiesToResponse({ res, user: userToken })
  res.json({ user })
}
const loginByUser = async (req, res) => {
  const { userName } = req.body
  let username = await User.findOne({ userName })
  console.log(username)
  if (!username) {
    return res('This username is not register')
  }
  const userToken = { name: username.userName, userId: username._id }
  attachCookiesToResponse({ res, user: userToken })

  res.send('success!!')
}
const dashboard = async (req, res) => {
  const userId = req.user.userId
  const topic = await Topics.findOne({ createdBy: userId })
  console.log(topic)
  res.send('mill gya')
}
const createTopicAndContent = async (req, res) => {
  req.body.createdBy = req.user.userId
  const topic = await Topics.create(req.body)

  res.status(200).json({ topic })
}
module.exports = { createUser, loginByUser, dashboard, createTopicAndContent }
