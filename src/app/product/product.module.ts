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

const routes: Routes = [
  { path: '', component: ProductsComponent, data: { pageTitle: 'Manage Products' } },
];

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    MatInputModule,
    MatTooltipModule,
    SharedModule,
    MatSliderModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
})
export class ProductModule { }