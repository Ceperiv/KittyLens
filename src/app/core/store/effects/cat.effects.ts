import {Injectable} from '@angular/core';
import {Action, StateContext} from '@ngxs/store';
import {tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

import {urls} from "../../../configs";
import {FetchCats} from "../actions/cat.actions";

@Injectable()
export class CatEffects {
  constructor(private http: HttpClient) {
  }

  @Action(FetchCats)
  fetchCats(ctx: StateContext<any[]>) {
    return this.http
      .get<{ data: any[] }>(urls.cats())
      .pipe(
        tap(response => {
          const cats = response.data;
          ctx.patchState(cats);
        })
      );
  };
}
