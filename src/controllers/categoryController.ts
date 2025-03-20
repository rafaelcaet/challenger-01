import readData from "../services/categoryService";

export default class CategoryController {
  protected declare data: any;

  constructor(data?: any) {
    this.data = data;
  }

  async list() {
    const result = await readData();
    return result;
  }
}
