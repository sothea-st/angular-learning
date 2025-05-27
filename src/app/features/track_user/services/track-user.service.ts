import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { TrackUserModel } from "../models/track-user.model";
import { MainBaseService } from "../../../core/services/main.base.service";

@Injectable({ providedIn: "root" })
export class TrackUserService extends MainBaseService {

     constructor(private http: HttpClient) {
          super('trackFbUser');
     }

     getTrackUser(): Observable<TrackUserModel[]> {
          return this.http.get<TrackUserModel[]>(this.getBaseUrl);
     }
     
}