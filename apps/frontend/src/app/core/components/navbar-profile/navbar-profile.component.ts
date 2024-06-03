import { Component, inject } from '@angular/core'
import { RippleModule } from 'primeng/ripple'
import { SessionService } from '@fwks/services'
import { MenuModule } from 'primeng/menu'
import { MenuItem } from 'primeng/api'
import { BadgeModule } from 'primeng/badge'
import { ButtonModule } from 'primeng/button'
import { AvatarModule } from 'primeng/avatar'

@Component({
  selector: 'fwks-navbar-profile',
  standalone: true,
  imports: [
    RippleModule,
    AvatarModule,
    MenuModule,
    ButtonModule,
    BadgeModule,
  ],
  templateUrl: './navbar-profile.component.html',
  styles: ''
})
export class NavbarProfileComponent {

  session = inject(SessionService)

  items = this.build()

  private build(): MenuItem[] {
    return [
      { separator: true },
      { label: 'Settings', icon: 'pi pi-cog', routerLink: 'account/settings' },
      { separator: true },
    ]
  }

}