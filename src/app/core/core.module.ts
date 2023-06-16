import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {NgxsModule} from "@ngxs/store";

import {CatState} from "./store/state/cat.state";
import {CatEffects} from "./store/effects/cat.effects";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {environment} from "../../environmets/environment.dev";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forRoot([CatState]),
    NgxsModule.forFeature([CatEffects]),
    NgxsLoggerPluginModule.forRoot({
      disabled:environment.production
    })
  ]
})

export class CoreModule { }
