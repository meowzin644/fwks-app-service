import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { firstValueFrom } from 'rxjs'
import { AppSettings } from '@fwks/models'

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  http = inject(HttpClient)
  current: AppSettings = Object.assign({})

  async load(): Promise<void> {
    try {
      this.current = await firstValueFrom(this.http.get<AppSettings>('/assets/configuration/appsettings.json'))
      this.loadMenus()
    } catch (error) {
      console.error('Error loading settings', error)
      throw error
    }
  }

  private loadMenus(): void {
    this.current.menus = {
      profile: [
        { label: 'Profile', icon: 'pi pi-user', routerLink: 'account/profile' },
        { label: 'Settings', icon: 'pi pi-cog', routerLink: 'account/settings' },
        { separator: true },
        { label: 'Logout', icon: 'pi pi-sign-out', routerLink: 'account/logout' },
      ],
      navigation: [
        {
          label: 'Main',
          expanded: true,
          items: [
            {
              label: 'Dashboards',
              icon: 'pi pi-objects-column',
              routerLink: ['/dashboards'],
            }
          ]
        },
        {
          label: 'Management',
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
      ],
    }
  }

}
