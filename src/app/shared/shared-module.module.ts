import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainLayoutComponent} from "./layouts";
import {FooterComponent, HeaderComponent, SideBarComponent, ViewCatsComponent} from './components';
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
import {ViewPhotoModalComponent} from './components/view-photo-modal/view-photo-modal.component';
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    ViewCatsComponent,
    ViewPhotoModalComponent,
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
    MatDialogModule

  ]
})
export class SharedModuleModule {
}
