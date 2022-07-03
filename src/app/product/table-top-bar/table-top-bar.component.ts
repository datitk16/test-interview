import { selectProductCategories } from './../+state/product.selectors';
import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { ProductModalComponent } from '../product-modal/product-modal.component';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { AppState } from 'src/app/+state/app.state';

@UntilDestroy()
@Component({
  selector: 'app-table-top-bar',
  templateUrl: './table-top-bar.component.html',
  styleUrls: ['./table-top-bar.component.scss']
})
export class TableTopBarComponent implements OnInit, OnDestroy {

  @Output() search = new EventEmitter<string>();
  @Output() category = new EventEmitter<string>();
  searchText: string | undefined;
  categories = new Array<string>();

  constructor(
    private dialog: MatDialog,
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.select(selectProductCategories).pipe(untilDestroyed(this)).subscribe((result: any) => {
      this.categories = result;
    });
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
    this.dialog.open(ProductModalComponent, {
      width: '300px',
    });
  }

  selectCategory(value: string) {
    this.category.emit(value)
  }
}


