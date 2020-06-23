import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from "../environments/environment";
import { LinkDetailsComponent } from './links/link-details/link-details.component';
import { LinksListComponent } from './links/links-list/links-list.component';
import { CreateLinkComponent } from './links/create-link/create-link.component';
import { RedirectLinkComponent } from './links/redirect-link/redirect-link.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    LinkDetailsComponent,
    LinksListComponent,
    CreateLinkComponent,
    RedirectLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
