const router = require('express').Router()

router.use('/user', require('./user.router'))
router.use('/auth', require('./auth.router'))
router.use('/client', require('./client.router'))
router.use('/ship', require('./ship.router'))
router.use('/order', require('./order.router'))
/*router.use('/session', require('./session.router'))
router.use('/master', require('./master.router'))
router.use('/sessionPlayer', require('./sessionPlayer.router'))*/

module.exports = router