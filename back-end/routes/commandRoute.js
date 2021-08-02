const express = require('express')
const router = express.Router()
const command = require("../controller/commandController")
router.get('/getCommand',command.getCommand)
router.post('/addCommand',command.addCommand)
router.delete('/deleteCommand/:id',command.deleteCommand)
router.put('/updateCommand/:id',command.updateCommand)

module.exports = router