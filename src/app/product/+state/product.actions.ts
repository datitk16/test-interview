import { Product } from './../models/product.model';
import { createAction, props } from '@ngrx/store';

export const setAddOrUpdateProduct = createAction(
  '[Product] Add New Product',
  props<{ product: Product }>()
);

export const setProductCategories = createAction(
  '[Product] Select Product Categories',
  props<{ categories: string[] }>()
);
