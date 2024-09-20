import express from 'express'
const router = express.Router()
import UserController from '../controllers/userControllers.js'


// Making Routes .
router.get('/',UserController.home)
router.get('/registration',UserController.registration)
router.post('/registration',UserController.createUser)
router.get('/login',UserController.login)
router.post('/login',UserController.verifyLogin)  // jab form submit huta hy tu form post requst pe jata hy .

export default router