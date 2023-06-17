import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Select, Store} from '@ngxs/store';

import {CatState} from "../../../core/store/state/cat.state";
import {ICats, IErr} from "../../../interfaces";
import {FetchCats} from "../../../core/store/actions/cat.actions";


@Component({
  selector: 'app-view-cats',
  templateUrl: './view-cats.component.html',
  styleUrls: ['./view-cats.component.scss']
})
export class ViewCatsComponent implements OnInit {
  @Select(CatState.getCats) cats$: Observable<ICats[]> | undefined;
  @Select(CatState.isLoading) isLoading$: Observable<boolean> | undefined;
  @Select(CatState.getError) error$: Observable<IErr> | undefined;

  constructor(private store: Store) {
  };

  ngOnInit(): void {
    this.store.dispatch(new FetchCats());
  };
}
