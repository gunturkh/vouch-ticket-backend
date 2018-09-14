const express = require('express')
const router = express.Router()

const controller = require('./controller')

// router.post('/seed', controller.seed)
router.get('/', controller.get)
router.post('/', controller.add)
router.get('/status', controller.findByStatus)
router.get('/:id', controller.findById)
router.put('/:id', controller.updateById)
router.delete('/:id', controller.deleteById)

module.exports = router