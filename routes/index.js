// Express Server: Setting up the root route
const { Router } = require('express')
const router = Router()
// insert v after controllers/index.js
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('This is root!'))

// insert v after controllers/index.js
router.post('/plants', controllers.createPlant)

router.get('/plants', controllers.getAllPlants)

router.get('/plants/:id', controllers.getPlantById)

router.put('/plants/:id', controllers.updatePlant)

router.delete('/plants/:id', controllers.deletePlant)

module.exports = router
