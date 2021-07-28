import { Router } from 'express'
const router = Router()

import AuthController from '../controllers/AuthController.js'


router.route('/register')
.post(AuthController.signup)
router.route('/login')
.post(AuthController.signIn)

export default router


