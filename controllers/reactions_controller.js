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

  destroy: async (req, res) => {
    const thought = await Thought.findByIdAndUpdate(req.params.thought,
      { $pull: { reactions: { reactionId: req.params.reaction } } },
      { new: true }
    )
    return res.status(200).json(thought)
  }
}