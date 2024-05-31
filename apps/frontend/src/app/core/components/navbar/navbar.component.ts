import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'fwks-navbar',
  standalone: true,
  imports: [
    ToolbarModule
  ],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {

}
