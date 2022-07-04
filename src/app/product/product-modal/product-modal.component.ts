import { setAddOrUpdateProduct } from './../+state/product.actions';
import { Product } from './../models/product.model';
import { AppState } from 'src/app/+state/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { selectProductCategories } from '../+state/product.selectors';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@UntilDestroy()
@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  categories = new Array<string>();
  product = new Product();
  isView: boolean;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.product = this.data ? this.data.product : new Product();
    this.isView = this.data?.viewProduct;
    this.formGroup = this.fb.group({
      name: [this.product.name, Validators.required],
      price: [this.product.price, Validators.required],
      description: [this.product.description, Validators.required],
      category: [this.product.category, Validators.required],
    });
    this.store.select(selectProductCategories).pipe(untilDestroyed(this)).subscribe((result: any) => {
      this.categories = result;
    });
  }

  ngOnDestroy() { }

  submit() {
    this.product.name = this.formGroup.value.name;
    this.product.price = this.formGroup.value.price;
    this.product.description = this.formGroup.value.description;
    this.product.category = this.formGroup.value.category;
    this.store.dispatch(setAddOrUpdateProduct({ product: this.product }));
  }

}
