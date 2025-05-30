import { Injectable } from "@angular/core";
import { MainBaseService } from "../../../core/services/main.base.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ProfileLinkModel, ProfileLinkRequest, ProfileLinkUpdateModel, Success } from "../models/profile-link.model";

@Injectable({ providedIn: 'root' })
export class ProfileLinkService extends MainBaseService {

     constructor(private http: HttpClient) {
          super('profileLinks');
     }

     reads(): Observable<ProfileLinkModel> {
          const query = this.pageSize === -1 ? "" : "?pageNumber="+this.pageNumber+"&pageSize="+this.pageSize;
          return this.http.get<ProfileLinkModel>(this.getBaseUrl+query);
     }

     readById(id: number): Observable<ProfileLinkUpdateModel> {
          return this.http.get<ProfileLinkUpdateModel>(this.getBaseUrl + "/" + id);
     }

     delete(id: number): Observable<Success> {
          return this.http.delete<Success>(this.getBaseUrl + "/" + id);
     }

     create(id: number, data: ProfileLinkRequest[]): Observable<Success> {
          if( id ) {
               return this.http.put<Success>(this.getBaseUrl+"/"+id, data[0]);
          }
          return this.http.post<Success>(this.getBaseUrl, data);
     }

}