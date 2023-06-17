import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {NgxsModule} from "@ngxs/store";

import {CatState} from "./store/state/cat.state";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {environment} from "../../environmets/environment.dev";
import { CatsComponent } from './components/cats/cats.component';
import {CatSelectors} from "./store/selectors/cat.selectors";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    CatsComponent
  ],
  exports: [
    CatsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forRoot([CatState]),
    // NgxsModule.forFeature([CatState]),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    }),
    MatProgressSpinnerModule
  ]
})

export class CoreModule { }
