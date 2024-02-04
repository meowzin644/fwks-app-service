import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAppSettings } from '@fwks/providers';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAppSettings(),
  ]
};
