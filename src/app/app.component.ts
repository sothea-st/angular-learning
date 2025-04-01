import { Component } from '@angular/core';
import { UserListComponent } from '../features/user-list/component/user-list.component'; 


@Component({
  selector: 'app-root',
  imports: [UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'user-management';
}
