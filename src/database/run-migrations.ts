import fs from 'fs';
import { resolve } from 'path';

import knex from '../config/knex';

(async () => {
  try {
    const createRestaurantsTable = fs.readFileSync(
      resolve(__dirname, 'migrations', 'create-restaurants-table.sql'),
      {
        encoding: 'utf8',
      },
    );

    const createProductsTable = fs.readFileSync(
      resolve(__dirname, 'migrations', 'create-products-table.sql'),
      {
        encoding: 'utf8',
      },
    );

    const createDiscountsTable = fs.readFileSync(
      resolve(__dirname, 'migrations', 'create-discounts-table.sql'),
      {
        encoding: 'utf8',
      },
    );

    await knex.raw(createRestaurantsTable);
    await knex.raw(createProductsTable);
    await knex.raw(createDiscountsTable);
  } catch (err) {
    if (err instanceof Error) {
      console.log('Erro ao criar a tabela:', err.message);
    }
  }
})();
