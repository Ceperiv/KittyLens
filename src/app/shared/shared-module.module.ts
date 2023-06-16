import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainLayoutComponent} from "./layouts";
import {FooterComponent, HeaderComponent, SideBarComponent} from './components';
import {RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ]
})
export class SharedModuleModule {
}
