import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DocumentInterface} from "../../model/document.model";
import {environment} from "../../../environments/environment";
import {UserInterface, UserModel} from "../../model/user.model";
import {AuthenticationService} from "../security/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class GedBackClientService {
  private baseUrl;

  constructor(
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService
  ) {
    this.baseUrl = environment.gedBack.baseUrl;
  }

  public getAllDocuments(): Observable<DocumentInterface[]> {
    return this.httpClient.get<DocumentInterface[]>(
      this.baseUrl + '/documents',
      {
        headers: this.getAuthenticationHeader()
      }
    );
  }

  public postDocument(formData: FormData): Observable<DocumentInterface[]> {
    return this.httpClient.post<DocumentInterface[]>(
      this.baseUrl + '/documents',
      formData,
      {
        headers: this.getAuthenticationHeader()
      }
    );
  }

  public postUser(user: UserModel) {
    return this.httpClient.post<UserInterface>(
      this.baseUrl + '/users',
      user,
      {
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  }

  postLogin(user: UserModel) {
    return this.httpClient.post<UserInterface>(
      this.baseUrl + '/login',
      user,
      {
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  }

  private getAuthenticationHeader() {
    return {
      'X-Custom-Auth': this.authenticationService.getAuthenticatedToken()
    }
  }
}
