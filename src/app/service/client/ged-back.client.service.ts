import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DocumentInterface} from "../../model/document.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GedBackClientService {
  private baseUrl;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.baseUrl = environment.gedBack.baseUrl;
  }

  public getAllDocuments(): Observable<DocumentInterface[]> {
    return this.httpClient.get<DocumentInterface[]>(
      this.baseUrl + '/documents'
    );
  }

  public postDocument(formData: FormData): Observable<DocumentInterface[]> {
    return this.httpClient.post<DocumentInterface[]>(
      this.baseUrl + '/documents',
      formData
    );
  }
}
