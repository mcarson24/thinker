export default {
  index: (req, res) => {
    return res.send('Thoughts Index')
  },

  show: (req, res) => {
    return res.send(`Information for thought with an ID of ${req.params.id}`)
  },

  store: (req, res) => {
    return res.send('Creating a new thought...')
  },

  update: (req, res) => {
    return res.send(`Updating thought with an ID of ${req.params.id}`)
  },

  destroy: (req, res) => {
    return res.send(`Deleting thought with an ID of ${req.params.id}`)
  }
}