import { Component, OnInit } from '@angular/core';
import {DocumentModel} from "../model/document.model";
import {GedBackClientService} from "../service/client/ged-back.client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.css']
})
export class DocumentFormComponent implements OnInit {
  document: DocumentModel = new DocumentModel('', '', null);

  constructor(private gedBackClientService: GedBackClientService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (
      '' === this.document.name
      || '' === this.document.authorId
      || null === this.document.file
    ) {
      // Todo : display errors && improve validation
      return;
    }

    const formData = new FormData();

    formData.append('name', this.document.name);
    formData.append('authorId', this.document.authorId);
    formData.append('file', this.document.file);

    // todo : manage errors
    this.gedBackClientService.postDocument(formData).subscribe((data) => {
      this.router.navigate(['/documents']);
    });
  }

  onChange(event: any) {
    this.document.file = event.target.files[0];
  }
}
