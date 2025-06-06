import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { ProfileLinkListComponent } from "./pages/profile-link-list/profile-link-list.component";
import { ProfileLinkCreateComponent } from "./pages/profile-link-create/profile-link-create.component";
import { ProfileLinkImportExcelComponent } from "./pages/profile-link-import-excel/profile-link-import-excel.component";

const routes:Routes = [
     {
          path: '',
          component: ProfileLinkListComponent
     },
     {
          path: 'create',
          component: ProfileLinkCreateComponent
     },
     {
          path: 'create/:id',
          component: ProfileLinkCreateComponent
     },
     {
          path: 'profile-link-import-excel',
          component: ProfileLinkImportExcelComponent
     }
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports:[RouterModule]
})
export class ProfileLinkCRUDRoutingModule {

}