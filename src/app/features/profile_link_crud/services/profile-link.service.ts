import { Injectable } from "@angular/core";
import { MainBaseService } from "../../../core/services/main.base.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ProfileLinkModel, ProfileLinkUpdateModel, Success } from "../models/profile-link.model";

@Injectable({providedIn: 'root'})
export class ProfileLinkService extends MainBaseService {
 
     constructor(private http:HttpClient) {
          super('profileLinks');
     }

     reads(): Observable<ProfileLinkModel> {
          return this.http.get<ProfileLinkModel>(this.getBaseUrl+"?pageNumber=1&pageSize=10");
     }

     readById(id: number): Observable<ProfileLinkUpdateModel> {
          return this.http.get<ProfileLinkUpdateModel>(this.getBaseUrl+"/"+id);
     }

     delete(id: number): Observable<Success> {
          return this.http.delete<Success>(this.getBaseUrl+"/"+id);
     }
 

}