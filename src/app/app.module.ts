import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { FastInfoComponent } from './components/fast-info/fast-info.component';
import { PhishingComponent } from './components/articles/phishing/phishing.component';
import { DetectPhisingComponent } from './components/articles/detect-phising/detect-phising.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuspiciousEmailAlertComponent } from './components/articles/suspicious-email-alert/suspicious-email-alert.component';
import { DetectSuspiciousEmailComponent } from './components/articles/detect-suspicious-email/detect-suspicious-email.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FastInfoComponent,
    PhishingComponent,
    DetectPhisingComponent,
    SuspiciousEmailAlertComponent,
    DetectSuspiciousEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
