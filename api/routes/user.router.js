const router = require('express').Router()

const { getAllUsers, getOneUser, createUser, updateUser, deleteUser, getMyUser } = require('../controllers/user.controller')
const { checkAuth, isAdmin, isManager } = require('../middleware/auth');

router.get('/profile', checkAuth, getMyUser)
router.get('/:id', checkAuth, isManager, getOneUser)
router.get('/', checkAuth, isManager, getAllUsers)

router.post('/', checkAuth, isAdmin, createUser)

router.patch('/:id', checkAuth, isAdmin, updateUser)

router.delete('/:id', checkAuth, isAdmin, deleteUser)


module.exports = router