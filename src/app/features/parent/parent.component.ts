import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AuthUtils } from '../../core/Utils/auth.utils';
import { AuthService } from '../../core/service/auth.service';
import { PageEnum } from '../../core/constant/page.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit {

  protected readonly PageEnum = PageEnum;

  @ViewChild('drawer')
  drawer: MatDrawer;

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngAfterViewInit(): void {
  }

  ngOnInit() {
  }

  routeTo(page: PageEnum) {
    this.drawer.close();
    this.router.navigate([`${page}`], {relativeTo: this.route});
  }

  isAuthenticated() {
    return AuthUtils.isAuthenticated();
  }

  logout() {
    this.authService.logout();
  }
}
