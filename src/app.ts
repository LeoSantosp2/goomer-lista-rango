import express from 'express';
import 'dotenv/config';

import './database/run-migrations';

import restaurantsRouter from './routes/restaurants-route';
import productsRouter from './routes/products-route';
import discountsRouter from './routes/discounts-route';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/restaurants', restaurantsRouter);
    this.app.use('/products', productsRouter);
    this.app.use('/discounts', discountsRouter);
  }
}

export default new App().app;
