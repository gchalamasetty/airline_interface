import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirResultComponent } from 'src/app/air-result/air-result.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedService } from 'src/app/app.service';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [AirResultComponent],
  exports:[AirResultComponent],
  providers:[SharedService]
})
export class AirResultModule { }
