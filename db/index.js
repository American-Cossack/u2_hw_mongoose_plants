const mongoose = require('mongoose')
require('dotenv').config()

let MONGODB_URI = `mongodb+srv://kuzyi:${process.env.PW}@kuzyicluster1.mal5h.mongodb.net/?retryWrites=true&w=majority`

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db
