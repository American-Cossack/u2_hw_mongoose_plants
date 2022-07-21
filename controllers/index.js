//  ROUTES AND CONTROLLERS
// Controllers are where we will set up all of our logic e.g. what does the API do when we want to create a new plant? Update a plant? etc.

// Logic to create a new Plant
const Plant = require('../models/plant')

const createPlant = async (req, res) => {
  try {
    const plant = await new Plant(req.body)
    await plant.save()
    return res.status(201).json({
      plant
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

// create a controller method to grab all the plants from the database:
const getAllPlants = async (req, res) => {
  try {
    const plants = await Plant.find()
    return res.status(200).json({ plants })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// adding ability to find a specific plant
const getPlantById = async (req, res) => {
  try {
    const { id } = req.params
    const plant = await Plant.findById(id)
    if (plant) {
      return res.status(200).json({ plant })
    }
    return res.status(404).send('Plant with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// updating a plant
const updatePlant = async (req, res) => {
  try {
    const plant = await Plant.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(plant)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// deleting a plant
const deletePlant = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Plant.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Plant deleted')
    }
    throw new Error('Plant not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createPlant,
  getAllPlants,
  getPlantById,
  updatePlant,
  deletePlant
}
