import { Request, Response } from 'express';
import { v4 } from 'uuid';

import knex from '../config/knex';

class RestaurantsController {
  async index(req: Request, res: Response) {
    try {
      const response = await knex.raw('SELECT * FROM restaurants_table');

      return res.json(response[0]);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
      }
    }
  }

  async show(req: Request, res: Response) {
    try {
      const restaurantId = req.params.id;

      if (!restaurantId) {
        return res
          .status(400)
          .json({ error: 'ID do restaurante não foi informado.' });
      }

      const response = await knex.raw(
        `SELECT * FROM restaurants_table WHERE id = '${restaurantId}'`,
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
      const {
        restaurantName,
        restaurantAddress,
        openingHours,
        restaurantPhoto,
      } = req.body;

      if (
        !restaurantName ||
        !restaurantAddress ||
        !openingHours ||
        !restaurantPhoto
      ) {
        return res
          .status(400)
          .json({ error: 'Os campos não podem estar vazios.' });
      }

      await knex.raw(
        `INSERT INTO restaurants_table (id, restaurant_name, restaurant_address, opening_hours, restaurant_photo) values('${v4()}', '${restaurantName}', '${restaurantAddress}', '${openingHours}', '${restaurantPhoto}')`,
      );

      return res.json('Restaurante cadastrado com sucesso.');
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
      }
    }
  }

  async update(req: Request, res: Response) {
    try {
      const {
        restaurantName,
        restaurantAddress,
        openingHours,
        restaurantPhoto,
      } = req.body;

      const restaurantId = req.params.id;

      await knex.raw(
        `UPDATE restaurants_table SET restaurant_name = '${restaurantName}', restaurant_address = '${restaurantAddress}', opening_hours = '${openingHours}', restaurant_photo = '${restaurantPhoto}' WHERE id = '${restaurantId}'`,
      );

      return res.json('Dados do restaurante atualizado com sucesso.');
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
      }
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const restaurantId = req.params.id;

      await knex.raw(
        `DELETE FROM restaurants_table WHERE id = '${restaurantId}'`,
      );

      return res.json('Restaurante excluido com sucesso.');
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
      }
    }
  }
}

export default new RestaurantsController();
