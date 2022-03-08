import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SharedComponent } from 'src/shared/shared.component';
import { HeadLineRoutingModule } from 'src/head-line/head-main-routing.module';
import { AuthRoutingModule } from 'src/auth/auth-routing.module';
import { AuthTestRoutingModule } from 'src/log-test/log-test-routing.module';
const routes: Routes = [
  {
    path: '', component:AppComponent,
  },
  {
    path: '**', component: SharedComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HeadLineRoutingModule,
    AuthRoutingModule,
    AuthTestRoutingModule,
    
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
