import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * libraries
 */

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ParticlesModule } from 'angular-particle';
import { StorageServiceModule } from 'ngx-webstorage-service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { StepsComponent } from './components/steps/steps.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    StepsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ParticlesModule,
    FormsModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
