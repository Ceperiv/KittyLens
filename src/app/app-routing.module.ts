import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MainLayoutComponent} from "./shared/layouts";
import {Error404Component, Cats} from "./pages";

const routes: Routes = [
  {
    path: '', component:MainLayoutComponent, children: [
      {path: '', redirectTo: 'cats', pathMatch: 'full'},
      {path: 'cats', component: Cats},
    ],

  },
  {path: '**', redirectTo: 'error404', title: '404', data: {error: 404}},
  {path: 'error404', data: {error: 404}, component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
