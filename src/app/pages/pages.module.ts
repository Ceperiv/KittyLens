import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Cats } from './cats/cats';
import { InfoComponent } from './info/info.component';
import { Error404Component } from './error404/error404.component';
import {CoreModule} from "../core/core.module";
import {SharedModuleModule} from "../shared/shared-module.module";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    HomeComponent,
    Cats,
    InfoComponent,
    Error404Component
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModuleModule,
    MatButtonModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    RouterLink
  ]
})
export class PagesModule { }
