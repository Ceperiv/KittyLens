import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {CatState} from "../../core/store/state/cat.state";
import {Observable} from "rxjs";
import {ICats, IErr} from "../../interfaces";
import {MatDialog} from "@angular/material/dialog";
import {FetchCats} from "../../core/store/actions/cat.actions";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  @Select(CatState.getCats) cats$: Observable<ICats[]> | undefined;
  @Select(CatState.isLoading) isLoading$: Observable<boolean> | undefined;
  @Select(CatState.getError) error$: Observable<IErr> | undefined;

  constructor(private store: Store) {
  };

  ngOnInit(): void {
    this.store.dispatch(new FetchCats());
  };
}
