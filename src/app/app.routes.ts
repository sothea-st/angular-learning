// app.routes.ts
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
     {
          path: '',
          redirectTo: 'track-user',
          pathMatch: 'full'
     },
     {
          path: 'track-user',
          loadChildren: () => import('./features/track_user/track-user.module').then(m => m.TrackUserModule)
     },
     {
          path: 'user-list',
          loadChildren: () => import('./features/user/user.module').then(m => m.UserModule)
     },
     {
          path:'profile-link-crud',
          loadChildren: () => import('./features/profile_link_crud/profile-link-crud.module').then( m => m.ProfileLinkCRUDModule)
     }
];
