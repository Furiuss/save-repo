import { Router } from "express";
import auth from '../middlewares/auth'
import userController from "../controllers/UsersControllers";

const router = new Router();

router.use(auth)

router.get("/", userController.index);
router.get("/:id", userController.show);
router.post("/", userController.create);
router.put("/:id", userController.update);
router.delete("/:id", userController.destroy);

export default router;
