import { Request, Response } from "express";

export async function getRecipes(req: Request, res: Response) {
    const recipes = [
        {
            titulo: "Feijoada",
            receita: "Comprar no supermercado",
        },
        {
            titulo: "Sorvete",
            receita: "Pega no freezer",
        },
    ];

    return res.status(200).send(recipes);
}
