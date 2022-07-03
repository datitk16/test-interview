import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Constants } from '../../constants';

@Component({
  selector: 'app-table-bottom-bar',
  templateUrl: './table-bottom-bar.component.html',
  styleUrls: ['./table-bottom-bar.component.scss']
})
export class TableBottomBarComponent implements OnInit {
  @Input() dataLengh: number | undefined;
  @Output() search = new EventEmitter<string>();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  searchText: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(text: string) {
    this.paginator.pageIndex = 0;
    this.searchText = text;
    this.search.emit(text);
  }

  clearSearch() {
    this.searchText = '';
    this.search.emit('');
  }

  get pageSize(): number {
    return Constants.defaultPageSize;
  }

  get pageSizeOptions(): Array<number> {
    return Constants.defaultPageSizeOptions;
  }

}
