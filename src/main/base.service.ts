// src/app/core/services/base.service.ts
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

export abstract class BaseService<T> {
  constructor(
    protected http: HttpClient,
    protected baseUrl: string
  ) {}

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }

  getOne(id: number | string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  create(data: T): Observable<T> {
    return this.http.post<T>(this.baseUrl, data)
      .pipe(catchError(this.handleError));
  }

  update(id: number | string, data: Partial<T>): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${id}`, data)
      .pipe(catchError(this.handleError));
  }

  delete(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  protected handleError(error: any) {
    console.error('API error:', error);
    return throwError(() => error);
  }
}
