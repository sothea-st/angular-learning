// ✅ CORRECT (app.config.ts)
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { globalErrorInterceptor  } from './shared/exceptions/global-error-interceptor';


export const appConfig = {
  providers: [
    provideRouter(appRoutes),

    provideHttpClient(
      withInterceptors([globalErrorInterceptor ])
    ),
    
  ]
};
