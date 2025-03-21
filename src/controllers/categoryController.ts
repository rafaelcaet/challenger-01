import { listAllProducts } from "../services/categoryService";
export default class CategoryController {
  constructor() {}

  /**
   *  Lista todos os produtos
   * @returns
   */
  async listAll() {
    return listAllProducts();
  }
}
