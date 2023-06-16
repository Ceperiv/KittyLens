import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import { FetchCats, FetchCatsError, FetchCatsSuccess } from '../actions/cat.actions';
import { CatService } from '../../services';
import { ICats } from '../../../interfaces';
import {Injectable} from "@angular/core";

export interface CatStateModel {
  cats: ICats[];
  isLoading: boolean;
  error: any;
}

@State<CatStateModel>({
  name: 'cats',
  defaults: {
    cats: [],
    isLoading: false,
    error: null,
  },
})
@Injectable()
export class CatState {
  constructor(private catService: CatService) {}

  @Action(FetchCats)
  fetchCats(ctx: StateContext<CatStateModel>) {
    ctx.patchState({
      isLoading: true,
      error: null,
    });

    return this.catService.getCatsByParams().pipe(
      tap(
        (cats: ICats[]) => {
          ctx.dispatch(new FetchCatsSuccess(cats));
        },
        (error: any) => {
          ctx.dispatch(new FetchCatsError(error));
        }
      )
    );
  }

  @Action(FetchCatsSuccess)
  fetchCatsSuccess(ctx: StateContext<CatStateModel>, action: FetchCatsSuccess) {
    const cats = action.payload;

    ctx.patchState({
      cats,
      isLoading: false,
      error: null,
    });
  }

  @Action(FetchCatsError)
  fetchCatsError(ctx: StateContext<CatStateModel>, action: FetchCatsError) {
    const error = action.error; // Оновлено з action.payload на action.error

    ctx.patchState({
      cats: [],
      isLoading: false,
      error,
    });
  }

  @Selector()
  static getCats(state: CatStateModel) {
    return state.cats;
  }

  @Selector()
  static isLoading(state: CatStateModel) {
    return state.isLoading;
  }

  @Selector()
  static getError(state: CatStateModel) {
    return state.error;
  }
}
