import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { NavbarNotificationsComponent } from '../navbar-notifications/navbar-notifications.component';

@Component({
  selector: 'fwks-navbar',
  standalone: true,
  imports: [
    ToolbarModule,
    NavbarNotificationsComponent,
  ],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {

}
