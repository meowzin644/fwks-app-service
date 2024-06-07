import { Component, inject} from '@angular/core'
import { PanelMenuModule } from 'primeng/panelmenu'
import { AppSettingsService } from '@fwks/services'

@Component({
  selector: 'fwks-main',
  standalone: true,
  imports: [
    PanelMenuModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  settings = inject(AppSettingsService)

}
