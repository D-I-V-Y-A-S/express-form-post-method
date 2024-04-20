const express=require('express')
const router=express.Router()

const {getAllUserData,getUserDataById,renderForm,addUserData}=require('../controller/userController')

router.get('/',getAllUserData)
router.get('/new',renderForm)
router.get('/:id([0-9]{1,2})',getUserDataById)
router.post('/submit',addUserData)

module.exports=router