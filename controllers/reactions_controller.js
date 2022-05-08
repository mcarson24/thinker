export default {
  index: (req, res) => {
    res.send(`List of reactions from thought with an ID of ${req.params.id}`)
  },

  store: (req, res) => {
    res.send(`Creating a new reaction to thought with an ID of ${req.params.id}`)
  },

  destroy: (req, res) => {
    res.send(`Removing reaction with an ID of ${req.params.reaction} from thought with an ID of ${req.params.thought}`)
  }
}