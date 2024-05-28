import { Request, Response } from 'express';
import { v4 } from 'uuid';

import knex from '../config/knex';

class ProductsController {
  async index(req: Request, res: Response) {
    try {
      const restaurantId = req.params.id;

      const response = await knex.raw(
        `SELECT * FROM products_table WHERE restaurant_id = '${restaurantId}'`,
      );

      return res.json(response[0]);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
      }
    }
  }

  async store(req: Request, res: Response) {
    try {
      const { productName, productPrice, productCategory, productPhoto } =
        req.body;

      const restaurantId = req.params.id;

      if (!productName || !productPrice || !productCategory || !productPhoto) {
        return res
          .status(400)
          .json({ error: 'Os campos não podem estar vazios.' });
      }

      await knex.raw(
        `INSERT INTO products_table (id, product_name, product_price, product_category, product_photo, restaurant_id) values('${v4()}', '${productName}', '${productPrice}', '${productCategory}', '${productPhoto}', '${restaurantId}')`,
      );

      return res.json('Produto cadastrado com sucessso.');
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
      }
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { productName, productPrice, productCategory, productPhoto } =
        req.body;

      const productId = req.params.id;

      await knex.raw(
        `UPDATE products_table SET product_name = '${productName}', product_price = '${productPrice}', product_category = '${productCategory}', product_photo = '${productPhoto}' WHERE id = '${productId}'`,
      );

      return res.json('Produto alterado com sucesso.');
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
      }
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const productId = req.params.id;

      await knex.raw(`DELETE FROM products_table WHERE id = '${productId}'`);

      return res.json('Produto excluido com sucesso.');
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
      }
    }
  }
}

export default new ProductsController();
