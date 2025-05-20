import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { CommonModule } from '@angular/common';

@Component({
  imports: [
    CommonModule
  ],
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent {
  user: any;
  loading: boolean = false;
  showHome: boolean = false;

  constructor(public userService: UserService) { }

  fetchUser() {
    this.loading = true;
    this.showHome = true;
    console.log("loading ...");

    this.userService.getUser().subscribe({
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

}
