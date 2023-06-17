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

  getCatsByParams(limit?: string, breed?: string, order?: string): Observable<ICats[]> {
    console.log(urls.cats(limit, breed, order),555555555)
    return this.httpClient.get<ICats[]>(urls.cats(limit, breed, order))
  };

}
