import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
      CommonModule,
      HomeRoutingModule,
      MatButtonModule
    ],
})
export class HomeModule {}
