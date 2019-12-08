import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuccessModule } from './components/success/success.module';
import { WarningModule } from './components/warning/warning.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './components/card/card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MessageComponent } from './components/message/message.component';
import { TitleComponent } from './components/title/title.component';
import { FormsModule } from '@angular/forms';
import { ContentComponent } from './components/content/content.component';




@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MessageComponent,
    TitleComponent,
    ContentComponent
    ],
  imports: [
    BrowserModule,
    SuccessModule,
    WarningModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
