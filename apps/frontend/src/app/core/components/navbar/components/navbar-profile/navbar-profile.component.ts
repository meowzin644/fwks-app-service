import { Component, Input, inject } from '@angular/core'
import { Router } from '@angular/router'
import { MenuActions } from '@fwks/types'
import { AppSettingsService, SessionService } from '@fwks/services'
import { MenuItem } from 'primeng/api'
import { AvatarModule } from 'primeng/avatar'
import { Menu, MenuModule } from 'primeng/menu'

@Component({
  selector: 'fwks-navbar-profile',
  standalone: true,
  imports: [
    AvatarModule,
    MenuModule,
  ],
  templateUrl: './navbar-profile.component.html',
  styles: ''
})
export class NavbarProfileComponent {

  @Input() action: MenuActions = 'menu'

  router = inject(Router)
  settings = inject(AppSettingsService)
  session = inject(SessionService)

  items: MenuItem[] = []

  doAction(event: Event, menu: Menu): void {
    if (this.action === 'router') {
      this.router.navigate(['account', 'profile'])
    } else {
      menu.toggle(event)
    }
  }

}
