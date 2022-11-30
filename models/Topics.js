const mongoose = require('mongoose')

const topicSchema = new mongoose.Schema(
  {
    topicName: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },

    createdBy: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Topics', topicSchema)
