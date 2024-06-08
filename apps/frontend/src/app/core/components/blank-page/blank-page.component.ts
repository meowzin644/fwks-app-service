import { Component, Input } from '@angular/core'
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'fwks-blank-page',
  standalone: true,
  imports: [
    BreadcrumbModule,
  ],
  templateUrl: './blank-page.component.html',
  styleUrl: './blank-page.component.scss'
})
export class BlankPageComponent {

  @Input() title: string = ''
  @Input() breadcrumbs: MenuItem[] = []

}
