import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DocumentInterface} from "../../model/document.model";

@Injectable({
  providedIn: 'root'
})
export class GedBackClientService {

  private baseUrl;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = 'http://localhost:8000/api';
  }

  public getAllDocuments(): Observable<DocumentInterface[]> {
    return this.httpClient.get<DocumentInterface[]>(
      this.baseUrl + '/documents'
    );
  }
}
