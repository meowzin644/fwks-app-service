import { Component, Input, inject } from '@angular/core'
import { Router } from '@angular/router'
import { SessionService } from '@fwks/services'
import { MenuItem } from 'primeng/api/menuitem'
import { AvatarModule } from 'primeng/avatar'
import { Menu, MenuModule } from 'primeng/menu'
import { RippleModule } from 'primeng/ripple'

type Action = 'router' | 'menu'

@Component({
  selector: 'fwks-avatar-detail',
  standalone: true,
  imports: [
    RippleModule,
    AvatarModule,
    MenuModule,
  ],
  templateUrl: './avatar-detail.component.html',
  styles: ''
})
export class AvatarDetailComponent {

  @Input() action: Action = 'menu'
  @Input() model: MenuItem[] | undefined

  session = inject(SessionService)
  router = inject(Router)
  
  doAction(event: Event, menu: Menu ): void {
    if (this.action === 'router') {
      this.router.navigate(['account', 'profile'])
    } else {
      menu.toggle(event)
    }
  }

}
