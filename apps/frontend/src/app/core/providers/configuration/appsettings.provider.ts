import { APP_INITIALIZER, Provider } from '@angular/core'
import { AppSettingsService } from '@fwks/services'

export const provideAppSettings = (): Provider => {
    return {
        provide: APP_INITIALIZER,
        useFactory: (service: AppSettingsService) => () => service.load(),
        deps: [AppSettingsService],
        multi: true
    }
}