const express = require('express')
const router = express.Router()

const { getAllUsers, getUserById, addUserData, receiveUserData } = require('../controller/userController')

router.get('/', getAllUsers)
router.get('/:id([0-9]{1,2})', getUserById)
router.get('/new', addUserData)
router.post('/submit', receiveUserData)

module.exports = router