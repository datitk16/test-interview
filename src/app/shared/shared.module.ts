import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableBottomBarComponent } from './components/table-bottom-bar/table-bottom-bar.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    TableBottomBarComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
  ],
  exports: [
    TableBottomBarComponent
  ]
})
export class SharedModule { }
