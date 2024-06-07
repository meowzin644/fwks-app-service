import { NgModule } from '@angular/core'
import { NavbarComponent } from './components/navbar/navbar.component'
import { NavbarNotificationsComponent } from './components/navbar-notifications/navbar-notifications.component'

@NgModule({
  declarations: [],
  imports: [
    NavbarComponent,
    NavbarNotificationsComponent
  ],
  exports: [
    NavbarComponent,
    NavbarNotificationsComponent,
  ]
})
export class NavbarModule { }
