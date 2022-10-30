import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./service/security/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ged-front';
  isAuthenticated: boolean = false;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.authenticationService.authenticationSubject.subscribe((value: boolean) => {
      this.isAuthenticated = value;
    })
  }

  logout() {
    this.authenticationService.setAuthenticatedToken('');
  }
}
