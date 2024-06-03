import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideHttpClient } from '@angular/common/http'
import { provideAppSettings, provideUserSession } from '@fwks/providers'
import './core/configuration'

import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    provideAppSettings(),
    provideUserSession()
  ]
}
