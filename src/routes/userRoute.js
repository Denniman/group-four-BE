import { Router } from 'express'
const router = Router()

import AuthController from '../controllers/AuthController.js'


router.route('/register').get((req, res) => res.json({msg: "Register page is alive"}))
.post(AuthController.signup)


export default router


