// ✅ CORRECT (app.config.ts)
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient()
  ]
};
