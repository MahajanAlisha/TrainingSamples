import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';  

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { FormsModule, NgForm } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    DataService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
