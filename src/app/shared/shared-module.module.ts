import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainLayoutComponent} from "./layouts";
import {ViewCatsComponent, FooterComponent, HeaderComponent, SideBarComponent} from './components';
import {RouterOutlet} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {CoreModule} from "../core/core.module";
import {MatSelectModule} from "@angular/material/select";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    ViewCatsComponent,
  ],
  exports: [
    SideBarComponent,
    ViewCatsComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    CoreModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatProgressSpinnerModule,

  ]
})
export class SharedModuleModule {
}
