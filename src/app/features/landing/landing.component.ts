import { Component } from '@angular/core';
import { AuthUtils } from '../../core/Utils/auth.utils';
import { AuthService } from '../../core/service/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

constructor(private authService: AuthService) { }

  isAuthenticated() {
    return AuthUtils.isAuthenticated()
  }

  logout() {
    this.authService.logout();
  }

}
