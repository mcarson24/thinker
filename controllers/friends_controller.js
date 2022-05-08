export default {
  index: (req, res) => {
    return res.send(`Friends list for user with and ID of ${req.params.id}`)
  },

  show: (req, res) => {
    return res.send(`Information for user with an ID ${req.params.friend} who is a friend of user with an id of ${req.params.user}.`)
  },
  
  store: (req, res) => {
    return res.send(`Adding a new friend to user with an ID of ${req.params.id}.`)
  },

  destroy: (req, res) => {
    return res.send(`Removing friend with an ID of ${req.params.friend} from user with an ID of ${req.params.user}.`)  
  }
}