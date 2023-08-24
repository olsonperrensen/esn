import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PartnersComponent } from './partners/partners.component';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import { HeadComponent } from './head/head.component';
import {MatIconModule} from "@angular/material/icon";
import {NgbCarouselModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FootComponent } from './foot/foot.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PartnersComponent,
    HeadComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgbModule,
    NgbCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
