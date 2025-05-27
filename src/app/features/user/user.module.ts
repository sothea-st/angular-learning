import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
@NgModule({
  imports: [CommonModule, UserRoutingModule,UserListComponent],
})
export class UserModule {}
