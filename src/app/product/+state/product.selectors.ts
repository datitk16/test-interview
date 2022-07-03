import { ProductsState } from './product.state';
import { createSelector } from '@ngrx/store';

import { AppState } from '../../+state/app.state';

export const selectProductsState = (state: AppState) => state.productState;

export const selectAddNewProduct = createSelector(
  selectProductsState,
  (state: ProductsState) => state.product
);

export const selectProductCategories = createSelector(
  selectProductsState,
  (state: ProductsState) => state.categories
);
