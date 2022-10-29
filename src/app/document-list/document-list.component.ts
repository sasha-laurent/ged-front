import { Component, OnInit } from '@angular/core';
import {GedBackClientService} from "../service/client/ged-back.client.service";
import {DocumentInterface} from "../model/document.model";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents: DocumentInterface[] = [];

  constructor(private gedBackClientService: GedBackClientService) { }

  ngOnInit(): void {
    this.gedBackClientService.getAllDocuments().subscribe((data) => {
      this.documents = data;
    })
  }
}
