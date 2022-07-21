const mongoose = require('mongoose')
require('dotenv').config()

let MONGO_URI = `mongodb+srv://khwalabear:${process.env.MONGO}@cluster0.lyvpy.mongodb.net/?retryWrites=true&w=majority`

mongoose
  .connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    dbName: 'plantsDatabase'
  })
  .then(() => {
    console.log('Successfully connected to MongoDB')
  })
  .catch((e) => {
    console.error('connection error', e.message)
  })

const db = mongoose.connection

module.exports = db
