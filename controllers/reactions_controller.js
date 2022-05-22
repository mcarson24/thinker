import Thought from "../models/Thought.js"

export default {
  index: async (req, res) => {
    const thought = await Thought.findById(req.params.id)

    return res.status(200).json(thought.reactions)
  },

  store: async (req, res) => {
    const thought = await Thought.findByIdAndUpdate(req.params.id,
      { $addToSet: { reactions: {
        reactionBody: req.body.reactionBody,
        username: req.body.username
      }}},
      { new: true }
    )
    return res.status(201).json(thought)
  },

  destroy: (req, res) => {
    res.send(`Removing reaction with an ID of ${req.params.reaction} from thought with an ID of ${req.params.thought}`)
  }
}