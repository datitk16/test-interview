import { Product } from './../models/product.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductService {

  constructor(
    private http: HttpClient,
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

  // deleteItem(id: number) {
  //   return this.http
  //     .delete<Product>(environment.serverAddress + '/' + id, this.httpOptions)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     )
  // }

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(environment.serverAddress).pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http
      .put<Product>(environment.serverAddress + '/' + product.id, JSON.stringify(product), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  createProduct(product: Product): Observable<Product> {
    return this.http
      .post<Product>(environment.serverAddress, JSON.stringify(product), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}
