import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColleguesComponent } from './collegues/collegues.component';
import { AddClientComponent } from './add-client/add-client.component';

@NgModule({
  declarations: [
    AppComponent,
    ColleguesComponent,
    AddClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // à ajouter poour le support des formulaires
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
