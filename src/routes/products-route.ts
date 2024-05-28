import { Router } from 'express';

import productsController from '../controllers/products-controller';

const router = Router();

router.get('/:id', productsController.index); // Show all products of the restaurant
router.post('/:id', productsController.store); // Create a product
router.put('/:id', productsController.update); // Update a product
router.delete('/:id', productsController.delete); // Delete a product

export default router;
