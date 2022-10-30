import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DocumentInterface, DocumentModel} from "../../model/document.model";

@Injectable({
  providedIn: 'root'
})
export class GedBackClientService {
  private baseUrl;

  constructor(
    private httpClient: HttpClient
  ) {
    // todo : manage envs
    this.baseUrl = 'http://localhost:8000/api';
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
