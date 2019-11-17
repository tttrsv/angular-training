import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuccessModule } from './components/success/success.module';
import { WarningModule } from './components/warning/warning.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    SuccessModule,
    WarningModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
