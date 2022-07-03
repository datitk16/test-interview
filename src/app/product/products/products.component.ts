import { ProductRequest } from './../models/product-request.model';
import { Product } from './../models/product.model';
import { ProductModalComponent } from './../product-modal/product-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../services/product.service';
import { BaseDataTableComponent } from 'src/app/shared/components/base-data-table.component';
import { from, Observable } from 'rxjs';
import { PaginationResult } from 'src/app/shared/models/pagination-result.model';
import { MatDialogModalService } from 'src/app/core/services/mat-dialog-modal.service';
import { Sort } from '@angular/material/sort';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent extends BaseDataTableComponent<Product, ProductRequest> implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'description', 'category', 'action'];
  sortedData = new Array<Product>();
  constructor(
    private dialog: MatDialog,
    private productService: ProductService,
    private dialogMessage: MatDialogModalService
  ) {
    super();
  }

  ngOnInit(): void {
    this.productService.getList().subscribe(res => {
      this.dataSource = res;
    })
  }

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
        console.log('success')
        this.dialogMessage.showInfoMessage('Removed product successfuly');
      })
    });
  }

  add(event: Event) {
    event.stopPropagation();
  }

  sortData(sort: Sort) {
    const data = this.dataSource.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.dataSource = data.sort((a, b) => {
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

  private compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  protected getDataList(request: ProductRequest): Observable<PaginationResult<Product>> {
    return from([]);

  }
}
