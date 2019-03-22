import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirSearchComponent } from 'src/app/air-search/air-search.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NouisliderModule } from 'ng2-nouislider';
import { SharedService } from 'src/app/app.service';
import { MyDatePickerModule } from 'mydatepicker';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NouisliderModule,
    MyDatePickerModule
  ],
  declarations: [AirSearchComponent],
  exports:[AirSearchComponent],
  providers:[SharedService]
  
  
})
export class AirSearchModule { }
