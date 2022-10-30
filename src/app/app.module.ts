import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentFormComponent } from './document-form/document-form.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

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
      {enableTracing: true} // <-- debugging purposes only
    ),
    HttpClientModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
