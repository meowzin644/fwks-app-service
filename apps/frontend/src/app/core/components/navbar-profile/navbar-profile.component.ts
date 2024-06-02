import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'fwks-navbar-profile',
  standalone: true,
  imports: [
    RippleModule,
  ],
  templateUrl: './navbar-profile.component.html',
  styles: ``
})
export class NavbarProfileComponent {
  
  avatar = 'https://placehold.co/80'
  
}
