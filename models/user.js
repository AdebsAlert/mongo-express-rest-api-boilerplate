const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Firstname field is required']
  },
  email: {
    type: String,
    required: [true, 'Email field is required'],
    index: { unique: true }
  },
  password: {
    type: String,
    required: [true, 'Password field is required']
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
})

const User = mongoose.model('User', UserSchema)
module.exports = User
