import { Router } from "express";
import * as recipesController from "../controllers/recipesController";
import verifyTokenMW from "../middlewares/verifyTokenMW";

const recipesRouter = Router();

recipesRouter.get("/recipes", verifyTokenMW, recipesController.getRecipes);

export default recipesRouter;
