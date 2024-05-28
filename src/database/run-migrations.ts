import fs from 'fs';
import { resolve } from 'path';

import knex from '../config/knex';

(async () => {
  try {
    const createTableFile = fs.readFileSync(
      resolve(__dirname, 'migrations', 'create-restaurants-table.sql'),
      {
        encoding: 'utf8',
      },
    );

    await knex.raw(createTableFile);

    console.log('Tabela criada com sucesso.');
  } catch (err) {
    if (err instanceof Error) {
      console.log('Erro ao criar a tabela:', err.message);
    }
  }
})();
