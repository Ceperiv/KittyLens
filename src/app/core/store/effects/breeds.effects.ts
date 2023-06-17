// import {Injectable} from '@angular/core';
// import {Action, StateContext} from '@ngxs/store';
// import {catchError, tap} from 'rxjs/operators';
//
// import {BreedService} from "../../services";
// import {IBreeds} from "../../../interfaces";
// import {FetchBreeds, FetchBreedsError, FetchBreedsSuccess} from "../actions/breeds.actions";
//
// @Injectable()
// export class CatEffects {
//   constructor(private breedService: BreedService,
//   ) {
//   };
//
//   @Action(FetchBreeds)
//   fetchBreeds(ctx: StateContext<IBreeds[]>) {
//     return this.breedService.getBreeds().pipe(
//       tap((cats: IBreeds[]) => {
//         ctx.dispatch(new FetchBreedsSuccess(cats));
//       }),
//       catchError((error) => {
//         ctx.dispatch(new FetchBreedsError(error));
//         throw error;
//       })
//     );
//   }
// }
