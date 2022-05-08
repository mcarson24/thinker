export default {
  index: (req, res) => {
    return res.send('Users Index')
  },

  show: (req, res) => {
    return res.send(`Information for user with an ID of ${req.params.id}`)
  },

  store: (req, res) => {
    return res.send('Creating a new user...')
  },

  update: (req, res) => {
    res.send(`Updating user with an ID of ${req.params.id}`)
  },

  destroy: (req, res) => {
    return res.send(`Deleting user with an ID of ${req.params.id}`)
  }
}