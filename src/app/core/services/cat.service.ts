import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urls} from "../../configs";
import {Observable} from "rxjs";
import {ICats} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private httpClient: HttpClient) {
  };

  getCatsByParams(limit?: number, breed?: string, order?: string): Observable<ICats> {
    return this.httpClient.get<ICats>(urls.cats(limit, breed, order))
  };

}
