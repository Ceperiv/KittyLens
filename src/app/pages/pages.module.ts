import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { InfoComponent } from './info/info.component';
import { Error404Component } from './error404/error404.component';
import {CoreModule} from "../core/core.module";



@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    InfoComponent,
    Error404Component
  ],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class PagesModule { }
