import { Component, inject } from '@angular/core'
import { RippleModule } from 'primeng/ripple'
import { AppSettingsService, SessionService } from '@fwks/services'
import { MenuModule } from 'primeng/menu'
import { AvatarModule } from 'primeng/avatar'
import { AvatarDetailComponent } from '@fwks/components'
import { ButtonModule } from 'primeng/button'
import { DividerModule } from 'primeng/divider'

@Component({
  selector: 'fwks-navbar-profile',
  standalone: true,
  imports: [
    RippleModule,
    AvatarModule,
    ButtonModule,
    MenuModule,
    DividerModule,
    AvatarDetailComponent
  ],
  templateUrl: './navbar-profile.component.html',
  styles: ''
})
export class NavbarProfileComponent {

  session = inject(SessionService)
  settings = inject(AppSettingsService)

}