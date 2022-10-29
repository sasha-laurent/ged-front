import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { DocumentListComponent } from './documents-list/document-list.component';
import { DocumentFormComponent } from './document-form/document-form.component';

const appRoutes: Routes = [
  { path: 'documents', component: DocumentListComponent },
  { path: 'documents/new', component: DocumentFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DocumentListComponent,
    DocumentFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
