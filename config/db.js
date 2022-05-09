import mongoose from 'mongoose'

const { connect, connection } = mongoose

connect('mongodb://localhost/thinker', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

export default connection