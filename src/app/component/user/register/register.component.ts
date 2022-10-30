import { Component, OnInit } from '@angular/core';
import {GedBackClientService} from "../../../service/client/ged-back.client.service";
import {UserModel} from "../../../model/user.model";
import {AuthenticationService} from "../../../service/security/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: UserModel = new UserModel('', '');

  constructor(
    private gedBackClientService: GedBackClientService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.gedBackClientService.postUser(this.user).subscribe((data) => {
      this.gedBackClientService.postLogin(this.user).subscribe((data) => {
        this.authenticationService.setAuthenticatedToken(data.token);
        this.router.navigate(['/documents']);
      })
    })
  }
}
