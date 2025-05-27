import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackUserRoutingModule } from './track-user-routing.module';
import { TrackUserComponent } from './pages/track-user.component';
 
@NgModule({
  imports: [CommonModule,TrackUserRoutingModule,TrackUserComponent],
})
export class TrackUserModule {}
