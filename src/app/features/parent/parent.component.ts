import { Component } from '@angular/core';
import { AuthUtils } from '../../core/Utils/auth.utils';
import { AuthService } from '../../core/service/auth.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

constructor(private authService: AuthService) { }

  isAuthenticated() {
    return AuthUtils.isAuthenticated()
  }

  logout() {
    this.authService.logout();
  }

}
