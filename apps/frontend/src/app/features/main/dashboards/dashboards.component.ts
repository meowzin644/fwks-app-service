import { Component } from '@angular/core'
import { BlankPageComponent } from '@fwks/components';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'fwks-dashboards',
  standalone: true,
  imports: [
    BlankPageComponent,
    ButtonModule,
  ],
  templateUrl: './dashboards.component.html',
  styles: ''
})
export class DashboardsComponent {

  breadcrumbs: MenuItem[] = [{ label: 'dashboards' }]

}
