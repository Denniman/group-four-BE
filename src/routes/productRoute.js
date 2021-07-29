import { Router } from 'express';

import {
  getDishes,
  updateDish,
  postDish,
  deleteDish,
  getDisheseBySchema,
} from '../controllers/ProductController.js';

let router = Router();
router.get('/dishes', getDisheseBySchema);

router.get('/dishes/list', getDishes);
router.patch('/dishes/update/:id', updateDish);
// router.get('/dishes/:id', getDish);
router.post('/dishes/create', postDish);
router.delete('/dishes/delete/:id', deleteDish);

export default router;
