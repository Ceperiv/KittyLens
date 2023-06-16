import { Selector } from '@ngxs/store';

import { CatState } from '../state/cat.state';
import {ICatsState} from "../../../interfaces/catsState.interface";

export class CatSelectors {
  @Selector([CatState])
  static getCats(state: ICatsState[]): ICatsState[] {
    return state;
  }

  @Selector([CatState])
  static isLoading(state: ICatsState): boolean {
    return state.isLoading;
  }

  @Selector([CatState])
  static error(state: ICatsState): any {
    return state.error;
  }
}
