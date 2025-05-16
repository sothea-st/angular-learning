// src/app/contact/contact.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactCreateComponent } from './components/contact-create/contact-create.component';
import { ContactViewComponent } from './components/contact-view/contact-view.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
     declarations: [
          
     ],
     imports: [
          CommonModule,
          ReactiveFormsModule,
          ContactRoutingModule,
          ContactListComponent,
          ContactCreateComponent,
          ContactViewComponent
     ]
})
export class ContactModule { }
