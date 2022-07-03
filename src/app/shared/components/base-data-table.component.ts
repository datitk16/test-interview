import { Observable, of, Subject } from 'rxjs';

import { AfterViewInit, ChangeDetectorRef, Injectable, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { TableBottomBarComponent } from './table-bottom-bar/table-bottom-bar.component';
import { PaginationRequest } from '../models/pagination-request.model';
import { PaginationResult } from '../models/pagination-result.model';

@UntilDestroy()
@Injectable()
export abstract class BaseDataTableComponent<T, TRequest extends PaginationRequest> implements AfterViewInit {
  dataSource: T[] = [];
  dataLength: number;
  @ViewChild(TableBottomBarComponent, { static: true }) tableBottomBarComponent: TableBottomBarComponent;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  protected dataRequest: TRequest;

  private search$ = new Subject<string>();
  private reload$ = new Subject<void>();

  constructor() { }

  ngAfterViewInit() {
    // this.sort.sortChange.pipe(untilDestroyed(this)).subscribe(() => this.tableBottomBarComponent.paginator.pageIndex = 0);

    // this.tableBottomBarComponent.search.asObservable().pipe(untilDestroyed(this)).subscribe(text => this.search$.next(text));

  }

  protected reload() {
    this.tableBottomBarComponent.paginator.pageIndex = 0;
    this.reload$.next();
  }

  protected search(text: string) {
    this.tableBottomBarComponent.onSearch(text);
  }

  protected abstract getDataList(request: TRequest): Observable<PaginationResult<T>>;
}
