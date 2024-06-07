import { Component, OnInit, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { PrimeNGConfig } from 'primeng/api'
import { MainComponent, NavbarModule } from '@fwks/components'

@Component({
  selector: 'fwks-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarModule,
    MainComponent
  ],
  templateUrl: './app.component.html',
  styles: ''
})
export class AppComponent implements OnInit {

  primeConfig = inject(PrimeNGConfig)

  ngOnInit(): void {
    this.primeConfig.ripple = true
  }
}
