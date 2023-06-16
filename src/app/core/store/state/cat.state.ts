import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import {urls} from "../../../configs";
import {FetchCats} from "../actions/cat.actions";

export interface CatStateModel {
  cats: any[];
  isLoading: boolean;
  error: any;
}

@State<CatStateModel>({
  name: 'cats',
  defaults: {
    cats: [],
    isLoading: false,
    error: null
  }
})
export class CatState {
  constructor(private http: HttpClient) {}

  @Selector()
  static getCats(state: CatStateModel) {
    return state.cats;
  }

  @Selector()
  static getIsLoading(state: CatStateModel) {
    return state.isLoading;
  }

  @Selector()
  static getError(state: CatStateModel) {
    return state.error;
  }

  @Action(FetchCats)
  fetchCats(ctx: StateContext<CatStateModel>) {
    ctx.patchState({ isLoading: true, error: null });
    return this.http
      .get<{ data: any[] }>(urls.cats())
      .pipe(
        tap(response => {
          const cats = response.data;
          ctx.patchState({ cats, isLoading: false });
        })
      );
  }
}
