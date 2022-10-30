import { Component, OnInit } from '@angular/core';
import {GedBackClientService} from "../../service/client/ged-back.client.service";
import {DocumentInterface} from "../../model/document.model";
import {AuthenticationService} from "../../service/security/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents: DocumentInterface[] = [];

  constructor(
    private gedBackClientService: GedBackClientService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if ('' === this.authenticationService.getAuthenticatedToken()) {
      this.router.navigate(['/login']);
    }

    this.gedBackClientService.getAllDocuments().subscribe((data) => {
      this.documents = data;
    })
  }
}
