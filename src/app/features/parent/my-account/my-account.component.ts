import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../core/service/user.service";
import {MyAccountDetails} from "../../../core/model/my-account.model";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit{

  myAccountDetails: MyAccountDetails;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getMyAccountDetails().subscribe((userData) => {
      this.myAccountDetails = userData;
    });
  }
}
