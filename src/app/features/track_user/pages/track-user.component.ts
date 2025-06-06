import { Component } from '@angular/core';
import { TrackUserService } from '../services/track-user.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Router use for navigate to method
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { UserResponse } from '../models/track-user.model';
@Component({
  selector: 'app-track-user',
  imports: [CommonModule,LoadingComponent],
  templateUrl: './track-user.component.html',
  styleUrl: './track-user.component.scss'
})
export class TrackUserComponent {

  loading: boolean = false;
  showHome: boolean = false;

  constructor(public trackUserService: TrackUserService,
    private router: Router
  ) { }

   user?: UserResponse;

  fetchUser() {
    this.loading = true;
    this.showHome = true;
    console.log("loading ...");
    // this.loading = false; // for static data
    this.trackUserService.getTrackUser().subscribe({
      next: (data) => {
        this.user = data;
        console.log("User data:", this.user);
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  addProfileLink(): void {
    this.router.navigate(['/profile-link-crud'])
  }
}
