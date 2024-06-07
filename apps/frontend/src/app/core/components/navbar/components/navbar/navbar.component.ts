import { Component } from '@angular/core'
import { ToolbarModule } from 'primeng/toolbar'
import { NavbarNotificationsComponent } from '../navbar-notifications/navbar-notifications.component'
import { NavbarSidenavComponent } from '../navbar-sidenav/navbar-sidenav.component'
import { NavbarProfileComponent } from '../navbar-profile/navbar-profile.component'

@Component({
  selector: 'fwks-navbar',
  standalone: true,
  imports: [
    ToolbarModule,
    NavbarSidenavComponent,
    NavbarNotificationsComponent,
    NavbarProfileComponent
  ],
  templateUrl: './navbar.component.html',
  styles: ''
})
export class NavbarComponent {

}
