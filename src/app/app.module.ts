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
import { StudentsComponent } from './students/students.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PartnersComponent,
    HeadComponent,
    FootComponent,
    StudentsComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    NgbModule,
    NgbCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
