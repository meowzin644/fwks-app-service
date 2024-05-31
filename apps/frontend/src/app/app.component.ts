import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppSettingsService } from '@fwks/services';
import { NavbarComponent } from '@fwks/components';

@Component({
  selector: 'fwks-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  
  title = 'fwks-app-ui';

  appSettings = inject(AppSettingsService)

}
