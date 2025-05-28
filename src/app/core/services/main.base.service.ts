// src/app/core/services/base.service.ts

import { Environment } from "../environment/environment";
export abstract class MainBaseService {
  
  private env: Environment = Environment.DEV;

  private baseUrl!: string;

  constructor(private routeName: string) {
    this.initEnv();
  }

  private initEnv(): void {
    switch (this.env) {
      case Environment.DEV: { // developer
        this.baseUrl = 'http://localhost:8791/api/';
        break;
      }
      case Environment.UAT: { // UAT
        this.baseUrl = 'http://localhost:8791/api/';
        break;
      } 
      case Environment.PROD: { // Production
        this.baseUrl = 'http://localhost:8791/api/';
        break;
      }
    }
  }

  protected get getBaseUrl(): string {
    return this.baseUrl + this.routeName;
  }


  // constructor(
  //   protected http: HttpClient,
  //   protected baseUrl: string
  // ) {}

  // getAll(): Observable<T[]> {
  //   return this.http.get<T[]>(this.baseUrl)
  //     .pipe(catchError(this.handleError));
  // }

  // getOne(id: number | string): Observable<T> {
  //   return this.http.get<T>(`${this.baseUrl}/${id}`)
  //     .pipe(catchError(this.handleError));
  // }

  // create(data: T): Observable<T> {
  //   return this.http.post<T>(this.baseUrl, data)
  //     .pipe(catchError(this.handleError));
  // }

  // update(id: number | string, data: Partial<T>): Observable<T> {
  //   return this.http.put<T>(`${this.baseUrl}/${id}`, data)
  //     .pipe(catchError(this.handleError));
  // }

  // delete(id: number | string): Observable<void> {
  //   return this.http.delete<void>(`${this.baseUrl}/${id}`)
  //     .pipe(catchError(this.handleError));
  // }

  // protected handleError(error: any) {
  //   console.error('API error:', error);
  //   return throwError(() => error);
  // }
}
