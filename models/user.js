const mongoose = require('mongoose')
const Schema = mongoose.Schema


const User = new Schema(
  {
    accountInfo: {
      username: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true },
      profileImg: { type: String, required: true }
    },
    points: { type: Number, required: true },
    itemCategories: {
      metal: { type: Number, required: true },
      glass: { type: Number, required: true },
      plastic: { type: Number, required: true },
      cartons: { type: Number, required: true },
      paper: { type: Number, required: true },
      cardboard: { type: Number, required: true }
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('users', User)