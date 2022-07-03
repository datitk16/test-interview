import { ProductsState } from './../+state/product.state';
import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { Product } from '../models/product.model';
import { Store } from '@ngrx/store';
import { setAddNewProduct } from '../+state/product.actions';
import { MatDialog } from '@angular/material/dialog';
import { ProductModalComponent } from '../product-modal/product-modal.component';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { selectAddNewProduct } from '../+state/product.selectors';

@UntilDestroy()
@Component({
  selector: 'app-table-top-bar',
  templateUrl: './table-top-bar.component.html',
  styleUrls: ['./table-top-bar.component.scss']
})
export class TableTopBarComponent implements OnInit, OnDestroy {

  @Output() search = new EventEmitter<string>();
  searchText: string | undefined;

  constructor(
    private dialog: MatDialog,
    private store: Store<ProductsState>,
  ) { }

  ngOnInit(): void {
    const product = new Product();
    product.id = 1002;
    product.name = 'asdas'
    this.store.dispatch(setAddNewProduct({ product }));
  }

  ngOnDestroy() { }

  onSearch(text: string) {
    this.searchText = text;
    this.search.emit(text);
  }

  clearSearch() {
    this.searchText = '';
    this.search.emit('');
  }

  addNewProduct() {
    const dialogRef = this.dialog.open(ProductModalComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}


