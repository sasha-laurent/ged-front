import { Component, OnInit } from '@angular/core';
import {UserModel} from "../../../model/user.model";
import {GedBackClientService} from "../../../service/client/ged-back.client.service";
import {AuthenticationService} from "../../../service/security/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserModel = new UserModel('', '');

  constructor(
    private gedBackClientService: GedBackClientService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.gedBackClientService.postLogin(this.user).subscribe((data) => {
      this.authenticationService.setAuthenticatedToken(data.token);
      this.router.navigate(['/documents']);
    })
  }

}
