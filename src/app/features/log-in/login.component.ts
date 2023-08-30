import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../core/service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AuthUtils } from '../../core/Utils/auth.utils';
import { Token } from '../../core/model/token.model';
import { CacheConstants } from '../../core/constant/cache.constant';

@Component({
  selector: 'app-log-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loggedOut: boolean
  failed: boolean = false;

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
    this.authService.login(this.loginForm.value.username!, this.loginForm.value.password!).subscribe({
      next: (data: Token) => {
        // update the auth token
        sessionStorage.setItem(CacheConstants.token, data.token!);
        this.failed = false;
        this.router.navigate(['/'])
      },
      error: (error) => {
        this.failed = true;
      }
    })
  }
}
