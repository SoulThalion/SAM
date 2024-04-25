const router = require('express').Router()

const { getAllShips, getOneShip, createShip, updateShip, deleteShip} = require('../controllers/ship.controller')
const { checkAuth, isAdmin, isManager } = require('../middleware/auth');

router.get('/:id', checkAuth, isManager, getOneShip)
router.get('/', checkAuth, isManager, getAllShips)

router.post('/', checkAuth, isManager, createShip)

router.patch('/:id', checkAuth, isManager, updateShip)

router.delete('/:id', checkAuth, isManager, deleteShip)

module.exports = router