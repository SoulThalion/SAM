const router = require('express').Router()

const { getAllOrders, getOneOrder, createOrder, updateOrder, deleteOrder} = require('../controllers/order.controller')
const { checkAuth, isAdmin, isManager } = require('../middleware/auth');

router.get('/:id', checkAuth, isManager, getOneOrder)
router.get('/', checkAuth, isManager, getAllOrders)

router.post('/', checkAuth, isManager, createOrder)

router.patch('/:id', checkAuth, isManager, updateOrder)

router.delete('/:id', checkAuth, isManager, deleteOrder)

module.exports = router