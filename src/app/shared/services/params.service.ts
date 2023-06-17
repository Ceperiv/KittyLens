import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamsService {
  params: Object

  setCity(params: Object): void {
    this.params = params
  };

  getCity(): Object {
    return this.params
  };
}
