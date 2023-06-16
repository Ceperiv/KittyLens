import { Injectable } from '@angular/core';
import { Action, StateContext } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { FetchCats, FetchCatsError, FetchCatsSuccess } from '../actions/cat.actions';
import {CatService} from "../../services";
import {ICats} from "../../../interfaces";

@Injectable()
export class CatEffects {
  constructor(private catService: CatService) {}

  @Action(FetchCats)
  fetchCats(ctx: StateContext<ICats[]>) {
    return this.catService.getCatsByParams().pipe(
      tap((cats: ICats[]) => {
        ctx.dispatch(new FetchCatsSuccess(cats));
      }),
      catchError((error) => {
        ctx.dispatch(new FetchCatsError(error));
        throw error;
      })
    );
  }
}
