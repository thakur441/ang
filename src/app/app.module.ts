import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule } from 'devextreme-angular';
import { DxTextBoxModule } from 'devextreme-angular';
import {  DxValidatorModule } from 'devextreme-angular';
 

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxTextBoxModule,
    DxButtonModule,
    DxValidatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
