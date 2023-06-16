import {ICats} from "./cats.interface";

export interface ICatsState {
  cats: ICats[],
  isLoading: boolean,
  error: any,
}
