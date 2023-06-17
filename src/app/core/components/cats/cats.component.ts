import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';

import {CatState} from "../../store/state/cat.state";
import {ICats} from "../../../interfaces";
import {FetchCats} from "../../store/actions/cat.actions";


@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {
  @Select(CatState.getCats) cats$: Observable<ICats[]> | undefined;
  @Select(CatState.isLoading) isLoading$: Observable<boolean> | undefined;
  @Select(CatState.getError) error$: Observable<any> | undefined;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new FetchCats());
  }
}
