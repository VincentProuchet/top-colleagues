import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ColleguesComponent } from './collegues/collegues.component';
import { AddClientComponent } from './add-client/add-client.component';
import { SharedModule } from './shared/shared.module';
import { WelcomeModule } from './pages/welcome/welcome.module';
import { Comp01Component } from './demmobs/comp01/comp01.component';
import { Comp02Component } from './demmobs/comp02/comp02.component';
import { PostComponent } from './demohttp/post/post.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './demoRoutes/app.route';
@NgModule({
  declarations: [
    AppComponent,
    ColleguesComponent,
    AddClientComponent,
    Comp01Component,
    Comp02Component,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // à ajouter poour le support des formulaires
    SharedModule,
    WelcomeModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
