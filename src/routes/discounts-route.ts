import { Router } from 'express';

import discountsController from '../controllers/discounts-controller';

const router = Router();

router.post('/:id', discountsController.store);
router.put('/:id?', discountsController.update);
router.delete('/:id', discountsController.delete);

export default router;
