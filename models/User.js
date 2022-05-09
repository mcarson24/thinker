import mongoose from 'mongoose'
import Thought from './Thought.js'
import uniqueValidator from 'mongoose-unique-validator'

const { Schema, model } = mongoose

const schema = new Schema({
  username: {
    type: Schema.Types.String,
    required: true,
    trim: true,
    unique: true
  },
  email: {
    type: Schema.Types.String,
    required: true,
    unique: true,
    match: new RegExp(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/, 'i')
  },
  thoughts: [Thought],
  friends: [User]
})

schema.virtual('friendCount')
  .get(function () {
    return this.friends.length
  })

schema.plugin(uniqueValidator)

export default model('User', schema)