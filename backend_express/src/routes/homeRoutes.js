import { Router } from "express";
import homeController from "../controllers/HomeControllers";
import SessionsController from "../controllers/SessionControllers";

const router = new Router();

router.post("/sessions", SessionsController.create);
router.get("/", homeController.index);

export default router;
