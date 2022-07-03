import { setAddNewProduct, setProductCategories } from './product.actions';
import { Action, createReducer, on } from '@ngrx/store';

import { ProductsState } from './product.state';

const initialState: ProductsState = {
};

const productsReducer = createReducer(
  initialState,
  on(setAddNewProduct, (state, action) => ({
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
