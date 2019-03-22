import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AirResultModule } from 'src/app/air-result/air-result.module';
import { AirSearchModule } from 'src/app/air-search/air-search.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NouisliderModule } from 'ng2-nouislider';
import { SharedService } from 'src/app/app.service';
import { MyDatePickerModule } from 'mydatepicker';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AirResultModule,
    AirSearchModule,
    NouisliderModule,
    MyDatePickerModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
