import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../core/service/user.service";
import {MyAccountDetails} from "../../../core/model/my-account.model";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit{

  myAccountDetails: MyAccountDetails = {
    name: 'John Doe',
    username: 'johndoe123',
    password: '********', // You can replace this with a real hashed password if needed
    email: 'johndoe@example.com',
    mobile: '+61462535294',
  };

  constructor(private userService: UserService) {}

  ngOnInit() {
    // Fetch user data when the component initializes
    this.userService.getMyAccountDetails().subscribe((userData) => {
      this.myAccountDetails = userData;
    });
  }
}
