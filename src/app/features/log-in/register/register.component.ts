import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/service/auth.service';
import { ResponsiveService } from '../../../core/service/responsive.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  validatePasswordMatch = (control: AbstractControl): {[key: string]: any} | null => {
    const password = this.registerForm?.get('password')?.value as string;
    const passwordConfirm = control.value as string;

    if (password !== passwordConfirm) {
      return {passwordMatch: true};
    }

    return null;
  };

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', [Validators.required, this.validatePasswordMatch]),
  })

  constructor(private authService: AuthService,
              private router: Router,
              public responsive: ResponsiveService) {
  }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.registerForm.value.username!, this.registerForm.value.name!, this.registerForm.value.password!).subscribe({
      next: () => {
        this.router.navigate(['/log-in', 'false'])
      },
      error: (error) => {
        console.log(error);
      }
    })
  }


}
