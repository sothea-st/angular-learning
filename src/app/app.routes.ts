// app.routes.ts
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
     {
          path: 'home',
          loadChildren: () => import('../feature/home/home.module').then(m => m.HomeModule)
     }
];
