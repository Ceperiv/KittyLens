import {ICats} from "./cats.interface";
import {ICatsErr} from "./catsErr.interface";

export interface ICatsState {
  cats: ICats[],
  isLoading: boolean,
  error: ICatsErr,
}
