import { Product } from './../models/product.model';
export interface ProductsState {
  product?: Product;
  categories?: string[];
}
