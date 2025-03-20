import { IProduct } from "./IProduct";

export interface ICategory {
  category: string;
  count: number;
  products: IProduct[];
}
