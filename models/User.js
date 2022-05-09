import mongoose from 'mongoose'
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
    match: new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'i')
  },
  // thoughts: [Thought],
  thoughts: {
    type: Schema.Types.ObjectId,
    ref: 'Thought'
  },
  friends: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

schema.virtual('friendCount')
  .get(function () {
    return this.friends.length
  })

schema.plugin(uniqueValidator)

export default model('User', schema)