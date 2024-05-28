import { Request, Response } from 'express';
import { v4 } from 'uuid';

import knex from '../config/knex';

import { weekDay } from '../utils/week-day';

class ProductsController {
  async index(req: Request, res: Response) {
    try {
      const restaurantId = req.query.restaurant_id;

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

  async show(req: Request, res: Response) {
    try {
      const productId = req.query.product_id;

      const product = await knex.raw(
        `SELECT product_name, product_price, product_category FROM products_table WHERE id = '${productId}'`,
      );

      const discountProduct = await knex.raw(
        `SELECT discount_description, discount_price, week_days, start_hour, end_hour FROM discounts_table WHERE product_id = '${productId}'`,
      );

      const newProduct = {
        productName: product[0][0].product_name,
        productPrice: product[0][0].product_price,
        productCategory: product[0][0].product_category,
        discountDescription:
          discountProduct[0].length > 0
            ? discountProduct[0][0].discount_description
            : '',
        discount_price:
          discountProduct[0].length > 0
            ? discountProduct[0][0].discount_price
            : '',
        weekDays:
          discountProduct[0].length > 0
            ? weekDay(discountProduct[0][0].week_days)
            : '',
        startHour:
          discountProduct[0].length > 0 ? discountProduct[0][0].start_hour : '',
        endHour:
          discountProduct[0].length > 0 ? discountProduct[0][0].end_hour : '',
      };

      return res.json(newProduct);
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
