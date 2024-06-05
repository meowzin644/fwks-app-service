import { Component, inject } from '@angular/core'
import { PanelMenuModule } from 'primeng/panelmenu'
import { AppSettingsService } from '@fwks/services'

@Component({
  selector: 'fwks-sidebar-menu',
  standalone: true,
  imports: [
    PanelMenuModule,
  ],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss'
})
export class SidebarMenuComponent {

  settings = inject(AppSettingsService)

}
