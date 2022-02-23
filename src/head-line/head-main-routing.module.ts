import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineComponent } from './line/line.component';
import { HeadComponent } from './head/head.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [{
  path:'main',
  component: LineComponent,
  /*
  children:
  [
    
    {
      path: '', component:HeadComponent
    }
    
  ]*/},
  { 
    // Настройка редиректа (перенаправления)
    path: '', 
    redirectTo: '/main',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeadLineRoutingModule { }
