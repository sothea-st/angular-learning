// src/app/contact/contact-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactCreateComponent } from './components/contact-create/contact-create.component';
import { ContactViewComponent } from './components/contact-view/contact-view.component';

const routes: Routes = [
     {
          path: '',
          component: ContactListComponent
     },
     {
          path: 'create',
          component: ContactCreateComponent
     },
     {
          path: 'view/:id',
          component: ContactViewComponent
     }
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule]
})
export class ContactRoutingModule { }
