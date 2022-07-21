// Mongoose schemas and models
// Although, MongoDB is schema-less, Mongoose allows us to write a schema for our plant model which makes it nice to know what is a plant in our database and what a plant "looks" like in our database

// This is a 'blueprint' for what a plant it. Now we use it to create plants

const mongoose = require('mongoose')
const Schema = mongoose.Schema // const { Schema } = require('mongoose')

const Plant = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true } // ? not sure why img would be string
  },
  { timestamps: true }
)

module.exports = mongoose.model('plants', Plant) // ?
