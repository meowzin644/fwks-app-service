import { Component } from '@angular/core'
import { ToolbarModule } from 'primeng/toolbar'
import { NavbarNotificationsComponent } from '../navbar-notifications/navbar-notifications.component'
import { NavbarProfileComponent } from '../navbar-profile/navbar-profile.component'
import { NavbarSidebarComponent } from '../navbar-sidebar/navbar-sidebar.component'

@Component({
  selector: 'fwks-navbar',
  standalone: true,
  imports: [
    ToolbarModule,
    NavbarProfileComponent,
    NavbarSidebarComponent,
    NavbarNotificationsComponent,
  ],
  templateUrl: './navbar.component.html',
  styles: ''
})
export class NavbarComponent {

}
