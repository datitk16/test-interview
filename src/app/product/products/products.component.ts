import { setProductCategories } from './../+state/product.actions';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { ProductRequest } from './../models/product-request.model';
import { Product } from './../models/product.model';
import { ProductModalComponent } from './../product-modal/product-modal.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../services/product.service';
import { from, Observable } from 'rxjs';
import { PaginationResult } from 'src/app/shared/models/pagination-result.model';
import { MatDialogModalService } from 'src/app/core/services/mat-dialog-modal.service';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppState } from 'src/app/+state/app.state';
import { Store } from '@ngrx/store';
import { selectAddNewProduct } from '../+state/product.selectors';
import { Constants } from 'src/app/shared/constants';

@UntilDestroy()
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'name', 'price', 'description', 'category', 'action'];
  sortedData = new Array<Product>();
  dataSource = new MatTableDataSource<Product>();
  dataSourceOrigin = new Array<Product>();

  constructor(
    private dialog: MatDialog,
    private productService: ProductService,
    private dialogMessage: MatDialogModalService,
    private store: Store<AppState>,
  ) {
  }

  ngOnInit(): void {
    this.reloadData();
    // this.store.select(selectAddNewProduct).pipe(untilDestroyed(this)).subscribe(result => {
    //   if (!Constants.isEmpty(result)) {
    //     console.log(result)
    //   }
    // });
  }

  ngOnDestroy() { }

  addNewProduct() {
    const dialogRef = this.dialog.open(ProductModalComponent, {
      width: '250px',
      data: { name: 'this.name', animal: ' this.animal' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  deleteItem(id: number) {
    this.dialogMessage.showConfirmMessage('Are you sure want delete product?', () => {
      this.productService.deleteItem(id).subscribe(() => {
        this.reloadData();
        this.dialogMessage.showInfoMessage('Removed product successfuly');
      })
    });
  }

  add(event: Event) {
    event.stopPropagation();
  }

  search(keywork: string) {
    keywork = keywork.trim(); // Remove whitespace
    keywork = keywork.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = keywork;
  }

  sortData(sort: Sort) {
    const data = this.dataSource.data.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.dataSource.data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return this.compare(a.id, b.id, isAsc);
        case 'name':
          return this.compare(a.name, b.name, isAsc);
        case 'price':
          return this.compare(a.price, b.price, isAsc);
        case 'description':
          return this.compare(a.description, b.description, isAsc);
        case 'category':
          return this.compare(a.category, b.category, isAsc);
        default:
          return 0;
      }
    });
  }

  categorySelected(value: string) {
    this.dataSource.data = value === 'clear' ? this.dataSourceOrigin : this.dataSourceOrigin.filter(x => x.category === value);
  }

  private reloadData() {
    this.productService.getProducts().subscribe(products => {
      this.dataSource.data = products;
      this.dataSourceOrigin = this.dataSource.data.slice();
      this.store.dispatch(setProductCategories({ categories: products.map(x => x.category) }))
    })
  }

  private compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  protected getDataList(request: ProductRequest): Observable<PaginationResult<Product>> {
    return from([]);

  }
}
