import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * libraries
 */

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParticlesModule } from 'angular-particle';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { CarouselModule } from 'ngx-owl-carousel-o';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { StepsComponent } from './components/steps/steps.component';
import { CarouselHomeComponent } from './components/carousel-home/carousel-home.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormComponent } from './pages/form/form.component';
import { QuestionComponent } from './components/question/question.component';

/**
 * material
 */

import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    StepsComponent,
    CarouselHomeComponent,
    HomeComponent,
    NotFoundComponent,
    FormComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    ParticlesModule,
    FormsModule,
    StorageServiceModule,
    CarouselModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
