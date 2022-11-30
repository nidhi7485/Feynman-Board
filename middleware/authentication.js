const User = require('../models/User')
const { isTokenValid } = require('../utils/jwt')
const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token
  if (!token) {
    console.log('error, no token present')
    return
  }
  try {
    const payload = await isTokenValid({ token })
    req.user = { userId: payload.userId, name: payload.name }
  } catch (error) {}
  next()
}

module.exports = authenticateUser
