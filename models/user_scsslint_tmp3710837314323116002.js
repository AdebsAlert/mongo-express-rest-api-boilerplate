const mongoose = require('mongoose')
const Schema = mongoose.Schema

2
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

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

// hashing a password before saving it to the database
UserSchema.pre('save', function (next) {
  var user = this
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err)
    }
    user.password = hash
    next()
  })
})

const User = mongoose.model('User', UserSchema)
module.exports = User
