import { Router } from "express";
import * as recipesController from "../controllers/recipesController";

const recipesRouter = Router();

recipesRouter.get("/recipes", recipesController.getRecipes);

export default recipesRouter;
