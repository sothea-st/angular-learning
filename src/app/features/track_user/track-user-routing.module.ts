import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackUserComponent } from './pages/track-user.component';

const routes: Routes = [
  {
    path: '',
    component: TrackUserComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackUserRoutingModule { }
