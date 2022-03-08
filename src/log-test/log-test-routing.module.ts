import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogTestComponent } from './log-test.component';

const routes: Routes = [
    {
      path: 'test-login',
      component: LogTestComponent
    }
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AuthTestRoutingModule {}
  