import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ProductsComponent } from './products/products.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from './services/product.service';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { TableTopBarComponent } from './table-top-bar/table-top-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer } from './+state/product.reducer';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [
  { path: '', component: ProductsComponent, data: { pageTitle: 'Manage Products' } },
];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductModalComponent,
    TableTopBarComponent
  ],
  imports: [
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatTooltipModule,
    SharedModule,
    MatSliderModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('productState', reducer),
  ],
  providers: [
    ProductService,
  ],
  entryComponents: [
    ProductModalComponent
  ],
})
export class ProductModule { }
