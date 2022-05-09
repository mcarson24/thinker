import mongoose from "mongoose";
import Reaction from './Reaction.js'
import { DateTime } from 'luxon'

const { Schema, model } = mongoose

const schema = new Schema({
  thoughtText: {
    type: Schema.Types.String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Schema.Types.Date,
    default: new Date(),
    get: val => {
      const date = DateTime.fromJSDate(val)

      return date.toLocaleString(DateTime.DATE_HUGE)
    }
  },
  username: {
    type: Schema.Types.String,
    required: true
  },
  reactions: [Reaction]
})

schema.virtual('reactionCount')
  .get(function () {
    return this.reactions.length
  })

export default model('Thought', schema)