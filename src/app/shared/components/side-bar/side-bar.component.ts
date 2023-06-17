import {Component, OnInit} from '@angular/core';
import {IBreeds, IErr} from "../../../interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Select, Store} from "@ngxs/store";
import {BreedState} from "../../../core/store/state/breeds.state";
import {Observable} from "rxjs";
import {FetchBreeds} from "../../../core/store/actions/breeds.actions";
import {FetchCats} from "../../../core/store/actions/cat.actions";
import {ParamsService} from "../../services";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  showBar: boolean = false;
  form: FormGroup;
  breeds: IBreeds[];
  @Select(BreedState.getBreeds) breeds$: Observable<IBreeds[]> | undefined;
  @Select(BreedState.isLoading) isLoading$: Observable<boolean> | undefined;
  @Select(BreedState.getError) error$: Observable<IErr> | undefined;

  constructor(private store: Store,
              private paramsService:ParamsService) {
  };

  ngOnInit(): void {
    this._initForm()
    if (this.breeds$) {
      this.breeds$.subscribe((breeds) => {
        console.log(breeds)
        this.breeds = breeds;
      });
    }
  };

  _initForm(): void {
    this.store.dispatch(new FetchBreeds());
    this.form = new FormGroup({
      breed: new FormControl('', ),
      sorting: new FormControl('RAND', ),
      limit: new FormControl('10', ),
    })
  };

  barToggle(): void {
    this.showBar = !this.showBar;
  };

  onFind():void {
    this.paramsService.setParams(this.form.value)
    console.log(this.form.value)
    this.store.dispatch(new FetchCats());
  };

  onClear() {
    this.form.setValue({breed:'', sorting:'', limit:''})
  };
}
