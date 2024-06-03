import { APP_INITIALIZER, Provider } from '@angular/core'
import { SessionService } from '@fwks/services'

export const provideUserSession = (): Provider => {
    return {
        provide: APP_INITIALIZER,
        useFactory: (service: SessionService) => () => service.load(),
        deps: [SessionService],
        multi: true
    }
}