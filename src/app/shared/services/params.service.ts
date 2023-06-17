import { Injectable } from '@angular/core';
import {IParams} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ParamsService {
  params: IParams;

  setParams(params: IParams): void {
    this.params = {};
    this.params = params;
  };

  getParams(): IParams {
    return this.params;
  };
}
