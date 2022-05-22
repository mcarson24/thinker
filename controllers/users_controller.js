import { response } from 'express'
import User from '../models/User.js'

export default {
  index: async (req, res) => {
    const users = await User.find({})
    return res.status(200).json(users)
  },

  show: async (req, res) => {
    const user = await User.findById(req.params.id)

    if (user) return res.status(200).json(user)

    else return res.status(404).json({
      error: {
        status: 404,
        message: `A user with an id of '${req.params.id}' could not be found.`
      }
    })
  },

  store: async (req, res) => {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
    })

    return res.status(201).json(user)
  },

  update: async (req, res) => {
    try {
      const user = await User.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
          username: req.body.username,
          email: req.body.email
        }
      }, { 
        new: true,
        runValidators: true
      })
      return res.status(200).json(user)
    } catch (err) {
      return res.json({
        error: {
          status: 404,
          message: `A user with an id of '${req.params.id}' could not be found.`
        }
      })
    }
  },
  destroy: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id)

      return res.status(200).json({
        status: 200,
        message: `A user with an id of '${req.params.id}' has been successfully deleted.`
      })
    } catch (err) {
      return res.json({
        error: {
          status: 404,
          message: `A user with an id of '${req.params.id}' could not be found.`
        }
      })
    }
  }
}