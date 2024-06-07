import { Component, inject } from '@angular/core'
import { AppSettingsService, SessionService } from '@fwks/services'
import { ButtonModule } from 'primeng/button'
import { PanelMenuModule } from 'primeng/panelmenu'
import { SidebarModule } from 'primeng/sidebar'
import { NavbarProfileComponent } from '../navbar-profile/navbar-profile.component'
import { DividerModule } from 'primeng/divider'

@Component({
  selector: 'fwks-navbar-sidenav',
  standalone: true,
  imports: [
    ButtonModule,
    SidebarModule,
    PanelMenuModule,
    DividerModule,
    NavbarProfileComponent
  ],
  templateUrl: './navbar-sidenav.component.html',
  styleUrl: './navbar-sidenav.component.scss'
})
export class NavbarSidenavComponent {

  session = inject(SessionService)
  settings = inject(AppSettingsService)

  isOpen = false

  open(): void {
    this.isOpen = true
  }

}
