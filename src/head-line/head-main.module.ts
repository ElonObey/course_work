import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadLineRoutingModule } from './head-main-routing.module';
import { LineComponent } from './line/line.component';
import { HeadComponent } from './head/head.component';
import { BodyComponent } from './body/body.component';


@NgModule({
  declarations: [
    LineComponent,
    HeadComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    HeadLineRoutingModule
  ]
})
export class HeadLineModule { }
