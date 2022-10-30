import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authenticatedToken = '';
  authenticationSubject = new Subject<boolean>();

  constructor() { }

  getAuthenticatedToken(): string {
    return this.authenticatedToken;
  }

  setAuthenticatedToken(value: string) {
    this.authenticatedToken = value;
    if ('' !== value) {
      this.authenticationSubject.next(true);
    }
  }
}
