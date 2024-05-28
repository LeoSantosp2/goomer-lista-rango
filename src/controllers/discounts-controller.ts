import { Request, Response } from 'express';

import knex from '../config/knex';
import { v4 } from 'uuid';

class DiscountsController {
  async store(req: Request, res: Response) {
    try {
      const {
        discountDescription,
        discountPercent,
        weekDays,
        startHour,
        endHour,
      } = req.body;

      const productId = req.params.id;

      if (
        !discountDescription ||
        !discountPercent ||
        !weekDays ||
        !startHour ||
        !endHour
      ) {
        return res
          .status(400)
          .json({ error: 'Os campos não podem estar vazios.' });
      }

      const product = await knex.raw(
        `SELECT product_price FROM products_table WHERE id = '${productId}'`,
      );

      const priceWithDiscount =
        product[0][0].product_price -
        product[0][0].product_price * discountPercent;

      await knex.raw(
        `INSERT INTO discounts_table (id, discount_Description, discount_price, week_days, start_hour, end_hour, product_id) values('${v4()}', '${discountDescription}', '${priceWithDiscount}', '${weekDays}', '${startHour}', '${endHour}', '${productId}')`,
      );

      return res.json('Desconto adicionado com sucesso.');
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
      }
    }
  }

  async update(req: Request, res: Response) {
    try {
      const {
        discountDescription,
        discountPercent,
        weekDays,
        startHour,
        endHour,
      } = req.body;

      const discountId = req.params.id;
      const productId = req.query.product_id;

      const product = await knex.raw(
        `SELECT product_price from products_table WHERE id = '${productId}'`,
      );

      const priceWithDiscount =
        product[0][0].product_price -
        product[0][0].product_price * discountPercent;

      await knex.raw(
        `UPDATE discounts_table SET discount_description = '${discountDescription}', discount_price = '${priceWithDiscount}', week_days = '${weekDays}', start_hour = '${startHour}', end_hour = '${endHour}' WHERE id = '${discountId}'`,
      );

      return res.json('Desconto atualizado com sucesso.');
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
      }
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const discountId = req.params.id;

      await knex.raw(`DELETE FROM discounts_table WHERE id = '${discountId}'`);

      return res.json('Desconto excluido com sucesso.');
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
      }
    }
  }
}

export default new DiscountsController();
