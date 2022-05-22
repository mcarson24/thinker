import User from '../models/User.js'

export default {
  index: async (req, res) => {
    try {
      const user = await User.findById(req.params.id)
      console.log(user)
      return res.status(200).json(user.friends)
    } catch (err) {
      res.status(404).json({
        error: {
          status: 404,
          message: `A user with an id of '${err.value || req.params.id}' could not be found.`
        }
      })
    }
    return res.send(`Friends list for user with and ID of ${req.params.id}`)
  },

  store: async (req, res) => {
    try {
      const friend = await User.findById(req.params.friend)
      if (!friend) throw new Error(req.params.friend)
      const user = await User.findOneAndUpdate({ _id: req.params.user }, 
        { $addToSet: { friends: friend._id } },
        { new: true }
      )
      return res.status(201).json(user)
    } catch (err) {
      res.status(404).json({
        error: {
          status: 404,
          message: `A user with an id of '${err.value || req.params.id}' could not be found.`
        }
      })
    }
  },

  destroy: async (req, res) => {
    try {
      const friend = await User.findById(req.params.friend)
      if (!friend) throw new Error(req.params.friend)
      const user = await User.findOneAndUpdate({ _id: req.params.user }, {
        $pull: { friends: friend._id } },
        { new: true }
      )
      return res.status(201).json(user)
    } catch (err) {
      res.status(404).json({
        error: {
          status: 404,
          message: `A user with an id of '${err.value || req.params.id}' could not be found.`
        }
      })
    }
    return res.send(`Removing friend with an ID of ${req.params.friend} from user with an ID of ${req.params.user}.`)  
  }
}