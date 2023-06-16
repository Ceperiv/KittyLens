import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urls} from "../../configs";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private httpClient: HttpClient) {
  };

  getCatsByParams(limit?: number, breed?: string, order?: string): Observable<any> {
    return this.httpClient.get<any>(urls.cats(limit, breed, order))
  };

}
