import express from 'express';
import 'dotenv/config';

import './src/database/run-migrations';

import restaurantsRouter from './src/routes/restaurants-route';

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
  }
}

export default new App().app;
