import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { ProfileLinkListComponent } from "./pages/profile-link-list/profile-link-list.component";
import { ProfileLinkCreateComponent } from "./pages/profile-link-create/profile-link-create.component";

const routes:Routes = [
     {
          path: '',
          component: ProfileLinkListComponent
     },
     {
          path: 'create',
          component: ProfileLinkCreateComponent
     }
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports:[RouterModule]
})
export class ProfileLinkCRUDRoutingModule {

}