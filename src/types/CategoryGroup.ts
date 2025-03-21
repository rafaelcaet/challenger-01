import { Product } from "./Product";

export type CategoryGroup = {
  category: string;
  count: number;
  products: Product[];
};
