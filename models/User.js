const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'please enter your name'],
  },
})
module.exports = mongoose.model('User', userSchema)
