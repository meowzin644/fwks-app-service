import { Component, inject } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { PanelMenuModule } from 'primeng/panelmenu'
import { SidebarModule } from 'primeng/sidebar'
import { AppSettingsService, SessionService } from '@fwks/services'
import { AvatarDetailComponent } from '@fwks/components'
import { DividerModule } from 'primeng/divider'

@Component({
  selector: 'fwks-navbar-sidebar',
  standalone: true,
  imports: [
    ButtonModule,
    SidebarModule,
    PanelMenuModule,
    DividerModule,
    AvatarDetailComponent
  ],
  templateUrl: './navbar-sidebar.component.html',
  styleUrl: './navbar-sidebar.component.scss'
})
export class NavbarSidebarComponent {

  session = inject(SessionService)
  settings = inject(AppSettingsService)

  isOpen = false

  open(): void {
    this.isOpen = true
  }
}
