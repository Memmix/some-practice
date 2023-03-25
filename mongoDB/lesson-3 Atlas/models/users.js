const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  raiting: {
    type: Number,
    default: 1000,
  },
  comments: {
    type: [String],
    default: [],
  },
  team: {
    type: String,
    required: true,
  },
  stats: {
    wins: {
      type: Number,
      default: 0,
    },
    loses: {
      type: Number,
      default: 0,
    },
  },
})

const User = mongoose.model('User', userSchema)
module.exports = User