import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { HightLightDirective } from '../directives/hight-light.directive';
import { RolePipe } from '../pipes/role.pipe';
import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [HightLightDirective, RolePipe, NgFor, NgIf],  
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],  
  standalone: true,
})
export class UserListComponent implements OnInit {
  title = "User Management";
  count = 0;
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      // Assign random roles to users
      this.users = data.map((user) => ({
        ...user,
        role: this.getRandomRole(),
      }));
    });
  }

  getRandomRole(): 'admin' | 'user' | 'editor' {
    const roles: ('admin' | 'user' | 'editor')[] = ['admin', 'user', 'editor'];
    return roles[Math.floor(Math.random() * roles.length)];
  }

 

  view() {
    this.count++;
    console.log(`Role : ${this.count}`);
  }

}
