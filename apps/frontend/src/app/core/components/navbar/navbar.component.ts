import { Component } from '@angular/core'
import { ToolbarModule } from 'primeng/toolbar'
import { NavbarNotificationsComponent } from '../navbar-notifications/navbar-notifications.component'
import { NavbarProfileComponent } from '../navbar-profile/navbar-profile.component'

@Component({
  selector: 'fwks-navbar',
  standalone: true,
  imports: [
    ToolbarModule,
    NavbarNotificationsComponent,
    NavbarProfileComponent
  ],
  templateUrl: './navbar.component.html',
  styles: ''
})
export class NavbarComponent {

}
