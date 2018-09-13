const express = require('express')
const router = express.Router()

const controller = require('./controller')

// router.post('/seed', controller.seed)
router.get('/', controller.get)
router.get('/status', controller.findByStatus)
router.post('/', controller.add)
router.get('/:id', controller.findById)
router.delete('/:id', controller.deleteById)
router.put('/:id', controller.updateById)

module.exports = router