import { Router } from 'express';

import restaurantsController from '../controllers/restaurants-controller';

const router = Router();

router.get('/', restaurantsController.index); // Show all restaurants
router.get('/:id', restaurantsController.show); // Show a restaurant
router.post('/', restaurantsController.store); // Register a restaurant
router.put('/:id', restaurantsController.update); // Update datas a restaurant
router.delete('/:id', restaurantsController.delete); // Delete a restaurant

export default router;
