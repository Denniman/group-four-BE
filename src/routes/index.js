import express from 'express';
const router = express.Router();

import productRoute from './productRoute.js';
import userRoute from './userRoute.js';

router.use('/', productRoute);
router.use('/', userRoute);

export default router;

//I CREATED THIS FILE SO WE CAN HAVE AN EXIT/ENTRY POINT FOR ALL OUR ROUTES. IMPORTING THE ROUTE LIKE YOU DID BEFORE
//MIGHT NOT WORK FOR MULTIPLE APIs. I TRIED MY BEST TO MAKE IT WORK BUT IT DIDN'T. NO VEX BUT THIS IS ALSO A VERY
//PROPER IMPLEMENTATION FOR ROUTES.
