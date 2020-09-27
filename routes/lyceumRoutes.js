const express = require('express')
const router = express.Router()

const lyceumController = require('../controllers/lyceumController')

router.get('/lyceum', lyceumController.index)
router.post('/lyceum', lyceumController.store)

module.exports = router 