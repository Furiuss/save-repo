import { Router } from "express";
import repositoriesController from "../controllers/RepositoryControllers";

const router = new Router();

router.get("/:user_id/repositories", repositoriesController.index);
router.post("/:user_id/repositories", repositoriesController.create);
router.delete("/:user_id/repositories", repositoriesController.destroy);

export default router;
