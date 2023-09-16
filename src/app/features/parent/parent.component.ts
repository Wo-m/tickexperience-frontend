import { Component, OnInit } from '@angular/core';
import { AuthUtils } from '../../core/Utils/auth.utils';
import { AuthService } from '../../core/service/auth.service';
import { PageEnum } from '../../core/constant/page.enum';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit{

  protected readonly PageEnum = PageEnum;

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
  }

  routeTo(page: PageEnum) {
    console.log(page)
    this.router.navigate([`${page}`], {relativeTo: this.route})
  }

  isAuthenticated() {
    return AuthUtils.isAuthenticated()
  }

  logout() {
    this.authService.logout();
  }
}
