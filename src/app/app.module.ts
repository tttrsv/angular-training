import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuccessModule } from './components/success/success.module';
import { WarningModule } from './components/warning/warning.module';

import { AppComponent } from './app.component';
import { SuccessComponent } from './components/success/success.component';
import { WarningComponent } from './components/warning/warning.component';


@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    WarningComponent
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
