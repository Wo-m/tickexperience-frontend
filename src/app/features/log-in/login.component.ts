import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../core/service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loggedOut: boolean

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.loggedOut = params.get('loggedOut') === 'true';
    });
  }


  login() {
    this.authService.login(this.loginForm.value.username!, this.loginForm.value.password!);
    this.router.navigate(['/'])
  }
}
