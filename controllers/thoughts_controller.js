import Thought from '../models/Thought.js'
import User from '../models/User.js'

export default {
  index: async (req, res) => {
    const thoughts = await Thought.find({})

    return res.status(200).json(thoughts)
  },

  show: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.id)

      return res.status(200).json(thought)
    } catch (err) {
      return res.status(404).json({
        error: {
          status: 404,
          message: `A thought with an id of '${req.params.id}' does not exist.`
        }
      })
    }
  },

  store: async (req, res) => {
    try {
      const thought = await Thought.create({
        thoughtText: req.body.thoughtText,
        username: req.body.username
      })
      const user = await User.findOneAndUpdate(
        { username: req.body.username },
        { $addToSet: { thoughts: thought._id } },
        { new: true }
      )
      if (!user) throw new Error(req.body.username)
      return res.status(201).json(thought)
    } catch (err) {
      return res.status(404).json({
        status: 404,
        message: `A user with a username of '${err.value}' could not be found.`
      })
    }
  },

  update: async (req, res) => {
    try {
      const thought = await Thought.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
          thoughtText: req.body.thoughtText,
          username: req.body.username
        }
      }, {
        new: true,
        runValidators: true
      })
      return res.status(200).json(thought)
    } catch (err) {
      return res.status(404).json({
        error: {
          status: 404,
          message: `A thought with an id of '${req.params.id}' does not exist.`
        }
      })
    }
  },

  destroy: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.id)
      const user = await User.findOneAndUpdate(
        { username: thought.username },
        { $pull: { thoughts: thought._id } },
        { new: true }
      )
      console.log(user)
      // await Thought.findByIdAndDelete(req.params.id)
      thought.delete()
      return res.status(200).json({
        status: 200,
        message: `A thought with an id of '${req.params.id}' has been successfully deleted.`
      })
    } catch (err) {
      res.status(404).json({
        error: {
          status: 404,
          message: `A thought with an id of '${req.params.id}' does not exist.`
        }
      })
    }
  }
}