import { Component } from '@angular/core'
import { MenuItem } from 'primeng/api'
import { ButtonModule } from 'primeng/button'
import { PanelMenuModule } from 'primeng/panelmenu'
import { SidebarModule } from 'primeng/sidebar'

@Component({
  selector: 'fwks-navbar-sidebar',
  standalone: true,
  imports: [
    ButtonModule,
    SidebarModule,
    PanelMenuModule,
  ],
  templateUrl: './navbar-sidebar.component.html',
  styleUrl: './navbar-sidebar.component.scss'
})
export class NavbarSidebarComponent {

  isOpen = false
  year = new Date().getFullYear()
  menus: MenuItem[] = this.load()

  open(): void {
    this.isOpen = true
  }

  private load(): MenuItem[] {
    return [
      {
        label: 'Dashboard',
        icon: 'pi pi-objects-column',
        routerLink: ['/dashboard'],
      },
      {
        label: 'Management',
        icon: 'pi pi-cog',
        expanded: false,
        items: [
          {
            label: 'Users',
            icon: 'pi pi-user',
            routerLink: ['/users'],
          },
          {
            label: 'Orders',
            icon: 'pi pi-box',
            routerLink: ['/orders']
          }
        ]
      },
      {
        label: 'Reports',
        icon: 'pi pi-book',
        expanded: false,
        items: [
          {
            label: 'Earnings',
            icon: 'pi pi-arrow-up-right',
            routerLink: ['/reports'],
            queryParams: {
              t: 'earnings'
            }
          },
          {
            label: 'Expenses',
            icon: 'pi pi-arrow-down-left',
            routerLink: ['/reports'],
            queryParams: {
              t: 'expenses'
            }
          }
        ]
      }
    ]
  }
}
