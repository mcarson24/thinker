import mongoose from 'mongoose'
import { DateTime } from 'luxon'

const { Schema } = mongoose

const schema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    required: true,
    default: () => new mongoose.Types.ObjectId
  },
  reactionBody: {
    type: Schema.Types.String,
    required: true,
    maxlength: 280
  },
  username: {
    type: Schema.Types.String,
    required: true
  },
  createdAt: {
    type: Schema.Types.Date,
    default: new Date(),
    get: val => {
      const date = DateTime.fromJSDate(val)

      return date.toLocaleString(DateTime.DATE_HUGE)
    }
  }
})

export default schema