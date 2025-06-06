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

     importExcel(data: FormData,sheet: string, cell: string ): Observable<Success> {
          return this.http.post<Success>(this.getBaseUrl+"/importProfileLinkExcels?sheet="+sheet+"&cell="+cell,data);
     }

     reads(searchValue?: string): Observable<ProfileLinkModel> {
          return this.http.get<ProfileLinkModel>(this.getBaseUrl+this.getQuery(searchValue));
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