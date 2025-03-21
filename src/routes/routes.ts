import { FastifyReply, FastifyRequest } from "fastify";
import CategoryController from "../controllers/categoryController";

export async function routes(app: any) {
  /*    GET  - lista todos os produtos   */
  app.get("/item/list", async (req: FastifyRequest, res: FastifyReply) => {
    const categoryController = new CategoryController(); // Instacia do controller
    const result = await categoryController.listAll(); // Chama a funcao para listar todos os produtos
    result
      ? res.send(result).code(200) // Caso result exista -> retorna 200 com o resultado
      : res.send({ message: "Failed to read database" }).code(403); // Caso falhe, retorna 403
  });
}
