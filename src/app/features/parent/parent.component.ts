import { Component, OnInit } from '@angular/core';
import { AuthUtils } from '../../core/Utils/auth.utils';
import { AuthService } from '../../core/service/auth.service';
import { PageEnum } from '../../core/constant/page.enum';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit{

  protected readonly PageEnum = PageEnum;
  page: PageEnum;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.page = PageEnum.LANDING;
  }

  checkPage(page: PageEnum) {
    return page === this.page;
  }

  selectPage(page: PageEnum) {
    this.page = page;
  }

  isAuthenticated() {
    return AuthUtils.isAuthenticated()
  }

  logout() {
    this.authService.logout();
  }
}
