// src/app/core/services/base.service.ts
import { Environment } from "../environment/environment";
export abstract class MainBaseService {

  private env: Environment = Environment.DEV;

  private baseUrl!: string;
  public pageNumber: number = 1;
  public pageSize: number = 10;

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

  protected getQuery(searchValue?: string): string {
    let search = searchValue ? "&search=" + searchValue : "";
    const query = this.pageSize === -1 ? "" : "?pageNumber=" + this.pageNumber + "&pageSize=" + this.pageSize + search;
    return query;
  }

  public reset(pageSize: number): void {
    this.pageNumber = 1;
    this.pageSize = pageSize;
  }

}
