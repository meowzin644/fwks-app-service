import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppSettingsService } from '@fwks/services';

@Component({
  selector: 'fwks-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  
  title = 'fwks-app-ui';

  appSettings = inject(AppSettingsService)

  ngOnInit(): void {
    console.log(this.appSettings.current)
  }

}
