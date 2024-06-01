import { Component, OnInit, inject } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { NotificationCenter } from '@fwks/models'
import { NotificationApiService } from '@fwks/services';


@Component({
  selector: 'fwks-navbar-notifications',
  standalone: true,
  imports: [
    BadgeModule,
    RippleModule,
    SidebarModule,
    ButtonModule,
    AvatarModule,
  ],
  templateUrl: './navbar-notifications.component.html',
  styles: ``
})
export class NavbarNotificationsComponent implements OnInit {

  api = inject(NotificationApiService)

  isOpen = false
  model: NotificationCenter = { unread: 0, notifications: [] }

  ngOnInit(): void {
    this.api.fetchAll().then(response => this.model = response)
  }

  markAllAsRead(): void {
    this.api.markAllAsRead().then(() => {
      this.model.unread = 0
      this.model.notifications.forEach(x => x.read = true)
    })
  }

}