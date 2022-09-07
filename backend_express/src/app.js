import express, { Router } from "express";
import cors from "cors";

import homeRoutes from "./routes/homeRoutes"
import userRoutes from "./routes/userRoutes"
import repositoryRoutes from "./routes/repositoryRoutes"

import "./database"

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use('/', homeRoutes)
    this.app.use('/users', userRoutes)
    this.app.use('/users', repositoryRoutes)
  }
}

export default new App().app;
