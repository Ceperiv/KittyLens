import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { InfoComponent } from './info/info.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    InfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
