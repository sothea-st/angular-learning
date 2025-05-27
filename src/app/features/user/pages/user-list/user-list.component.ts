import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  users: UserModel[] = [];
  constructor(
    private userService: UserService
  ) {

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        console.log("User data:", this.users);
      }
    }
    );
  }

}
