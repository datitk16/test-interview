import { setAddOrUpdateProduct, setProductCategories } from './product.actions';
import { Action, createReducer, on } from '@ngrx/store';

import { ProductsState } from './product.state';
import { Product } from '../models/product.model';

const initialState: ProductsState = {
  product: new Product
};

const productsReducer = createReducer(
  initialState,
  on(setAddOrUpdateProduct, (state, action) => ({
    ...state,
    product: action.product
  })),
  on(setProductCategories, (state, action) => ({
    ...state,
    categories: action.categories
  })),
);

export function reducer(state: ProductsState | undefined, action: Action) {
  return productsReducer(state, action);
}
