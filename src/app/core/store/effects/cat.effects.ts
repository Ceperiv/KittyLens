// import {Injectable} from '@angular/core';
// import {Action, StateContext} from '@ngxs/store';
// import {catchError, tap} from 'rxjs/operators';
// import {FetchCats, FetchCatsError, FetchCatsSuccess} from '../actions/cat.actions';
// import {CatService} from "../../services";
// import {ICats} from "../../../interfaces";
// import {ParamsService} from "../../../shared/services";
//
// @Injectable()
// export class CatEffects {
//   constructor(private catService: CatService,
//               private paramsService: ParamsService) {
//   }
//
//   @Action(FetchCats)
//   fetchCats(ctx: StateContext<ICats[]>) {
//     const {limit, breed, sorting} = this.paramsService.getParams()
//     console.log( this.paramsService.getParams(),666666666)
//     return this.catService.getCatsByParams(limit, breed, sorting).pipe(
//       tap((cats: ICats[]) => {
//         console.log(77777)
//         ctx.dispatch(new FetchCatsSuccess(cats));
//       }),
//       catchError((error) => {
//         ctx.dispatch(new FetchCatsError(error));
//         throw error;
//       })
//     );
//   }
// }
