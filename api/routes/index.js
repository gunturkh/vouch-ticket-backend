var express = require('express');
var router = express.Router();
const controller = require('./tickets/controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Vouch Ticket Management By GunturKH' });
});
router.get('/tickets/add', function(req, res, next) {
  res.render('addTicket', { title: 'Add Ticket' });
});
router.get('/tickets/find/:id', controller.findById)

module.exports = router;
