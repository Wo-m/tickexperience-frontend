import { Component } from '@angular/core';
import { AuthService } from '../../core/service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private authService: AuthService,
              private router: Router) {
  }

  login() {
    this.authService.login(this.loginForm.value.username!, this.loginForm.value.password!);
    this.router.navigate(['/'])
  }
}
