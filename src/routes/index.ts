import { Router } from "express";
import recipesRouter from "./recipesRouter";

const router = Router();

router.use(recipesRouter);

export default router;
