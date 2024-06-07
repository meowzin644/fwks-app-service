import { Component, WritableSignal, inject, signal, OnInit } from '@angular/core'
import { BadgeModule } from 'primeng/badge'
import { SidebarModule } from 'primeng/sidebar'
import { AvatarModule } from 'primeng/avatar'
import { Notification } from '@fwks/models'
import { NotificationApiService } from '@fwks/services'

@Component({
  selector: 'fwks-navbar-notifications',
  standalone: true,
  imports: [
    BadgeModule,
    SidebarModule,
    AvatarModule,
  ],
  templateUrl: './navbar-notifications.component.html',
  styles: ''
})
export class NavbarNotificationsComponent implements OnInit {
  api = inject(NotificationApiService)

  isOpen = false
  unread = signal(0)
  notifications: WritableSignal<Notification[]> = signal([])

  ngOnInit(): void {
    this.api.fetchAll().then(response => {
      this.unread.set(response.unread)
      this.notifications.set(response.notifications)
    })
  }

  markAllAsRead(): void {
    this.api.markAllAsRead().then(() => {
      this.unread.set(0)
      this.notifications.update(notifications =>
        notifications.map(notification => ({ ...notification, read: true })))
    })
  }
}
