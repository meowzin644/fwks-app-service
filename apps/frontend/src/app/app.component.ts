import { Component, OnInit, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { AppSettingsService } from '@fwks/services'
import { NavbarComponent, NavbarSidebarComponent, SidebarMenuComponent } from '@fwks/components'
import { PrimeNGConfig } from 'primeng/api'

@Component({
  selector: 'fwks-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    NavbarSidebarComponent,
    SidebarMenuComponent,
  ],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {

  title = 'fwks-app-ui'

  appSettings = inject(AppSettingsService)
  primeConfig = inject(PrimeNGConfig)

  ngOnInit(): void {
    this.primeConfig.ripple = true    
  }

}
