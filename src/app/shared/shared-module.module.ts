import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainLayoutComponent} from "./layouts";
import {FooterComponent, HeaderComponent, SideBarComponent} from './components';


@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModuleModule {
}
