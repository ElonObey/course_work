import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SharedComponent } from 'src/shared/shared.component';
import { HeadLineRoutingModule } from 'src/head-line/head-main-routing.module';
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
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
