const express = require('express')
const router = express.Router()

const controller = require('./controller')

// router.post('/seed', controller.seed)
router.get('/', controller.get)
router.post('/', controller.add)
router.get('/status', controller.findByStatus)
router.get('/find/:id', controller.findById)
router.get('/delete/:id', controller.deleteById)
router.post('/update/:id', controller.updateById)

module.exports = router