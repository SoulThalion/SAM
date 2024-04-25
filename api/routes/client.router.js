const router = require('express').Router()

const { getAllClients, getOneClient, createClient, updateClient, deleteClient} = require('../controllers/client.controller')
const { checkAuth, isAdmin, isManager } = require('../middleware/auth');

router.get('/:id', checkAuth, isManager, getOneClient)
router.get('/', checkAuth, isManager, getAllClients)

router.post('/', checkAuth, isManager, createClient)

router.patch('/:id', checkAuth, isManager, updateClient)

router.delete('/:id', checkAuth, isManager, deleteClient)

module.exports = router