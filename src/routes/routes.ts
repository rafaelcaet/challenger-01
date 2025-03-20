import { FastifyReply, FastifyRequest } from "fastify";
import CategoryController from "../controllers/categoryController";

export async function routes(app: any) {
  /*    GET  - lista todos os produtos   */
  app.get("/items/list", async (req: FastifyRequest, res: FastifyReply) => {
    const categoryController = new CategoryController();
    const result = categoryController.list();
    return result;
  });
}
