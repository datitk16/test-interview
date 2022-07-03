import { auditTime, catchError, map, merge, Observable, of, startWith, Subject, switchMap } from 'rxjs';

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

  protected dataRequest: TRequest;

  private search$ = new Subject<string>();
  private reload$ = new Subject<void>();

  constructor() { }

  ngAfterViewInit() {
    // this.tableBottomBarComponent.search.asObservable().pipe(untilDestroyed(this)).subscribe(text => this.search$.next(text));

    // this.tableBottomBarComponent.search.asObservable().pipe(untilDestroyed(this)).subscribe(text => this.search$.next(text));

    // merge(this.tableBottomBarComponent.paginator.page, this.search$.pipe(auditTime(300)), this.reload$)
    //   .pipe(
    //     untilDestroyed(this),
    //     // startWith({}),
    //     // filter(() => !this.requireInitialRequest || !!this.dataRequest),
    //     switchMap(() => {
    //       const request = this.dataRequest || new PaginationRequest();
    //       request.pageNumber = this.tableBottomBarComponent.paginator.pageIndex + 1;
    //       request.pageSize = this.tableBottomBarComponent.paginator.pageSize;
    //       request.keyword = this.tableBottomBarComponent.searchText;
    //       return this.getDataList(request as TRequest);
    //     }),
    //     map(res => {
    //       this.dataLength = res.totalItems;
    //       return res.dataList;
    //     }),
    //     catchError(() => {
    //       return of([]);
    //     })
    //   ).subscribe(data => {
    //     this.dataSource = data;
    //     // this.cdr.markForCheck();
    //   });

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
