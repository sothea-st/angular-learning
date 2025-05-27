import { NgModule } from "@angular/core";
import { ProfileLinkCRUDRoutingModule } from "./profile-link-crud-routing.module";
import { ProfileLinkListComponent } from "./pages/profile-link-list/profile-link-list.component";
import { ProfileLinkCreateComponent } from "./pages/profile-link-create/profile-link-create.component";

@NgModule({
     imports: [
          ProfileLinkCRUDRoutingModule,
          ProfileLinkListComponent,
          ProfileLinkCreateComponent
     ]
})
export class ProfileLinkCRUDModule {

}