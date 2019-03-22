/**
 * This component for Flight search --
 */

import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LocationSource } from "./air-location-data";
import { SharedService } from 'src/app/app.service';
import { Output } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { config_data } from 'src/app/data';
@Component({
  selector: 'air-search',
  templateUrl: './air-search.component.html',
  styleUrls: ['./air-search.component.scss']
})
export class AirSearchComponent implements OnInit {
  formInvalid: boolean;
  errorMsg: string = 'Please select all required manidatory fields';
  searchForm: FormGroup;
  selectedDir: string = 'return';
  locationList = LocationSource;
  totalPassengers = [];
  someRange: any;
  submitted: boolean = false;
  todayDate: any=new Date();
  public myDatePickerOptions: IMyDpOptions;
  // Initialized to specific date (09.10.2018).
  public model: any = { date: { year: 2018, month: 10, day: 9 } };

  @Output() searchSubmit: EventEmitter<any> = new EventEmitter();
  @Output() refineSearchValue: EventEmitter<any> = new EventEmitter();
  constructor(private _fb: FormBuilder, public sharedService: SharedService) {
    for (let i = 0; i < config_data.max_passengers; i++) {
      this.totalPassengers.push(i + 1);
    }
    this.someRange = JSON.parse(JSON.stringify(this.sharedService.searchRange));
    this.todayDate.setDate(this.todayDate.getDate()-1);
    this.myDatePickerOptions= {
      dateFormat: 'yyyy-mm-dd',
      disableUntil: {year: this.todayDate.getFullYear(), month: this.todayDate.getMonth()+1, day:this.todayDate.getDate()}
    };
  
  }

  ngOnInit() {
    this.intializeForm();
  }
  /**
   * 
   * @param selectedItem Direction whether its one way or two way booking
   */
  direction(selectedItem: string) {
    this.selectedDir = selectedItem;
  }

  /* Initialize form with setup validations*/
  intializeForm() {
    this.searchForm = this._fb.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      dapartureDate: ['', Validators.required],
      returnDate: [''],
      passengers: ['', Validators.required]
    });
  }
  /**
   * 
   * @param data Searching flight
   * @param valid 
   */
  searchFlights(data, valid) {
    data['dapartureDate'] = data.dapartureDate['formatted'] ? data.dapartureDate['formatted'] : data.dapartureDate;
    data['returnDate'] = data.returnDate['formatted'] ? data.returnDate['formatted'] : data.returnDate;
    this.submitted = true;
    this.formInvalid = false;
    this.errorMsg = config_data.error_msg_required;
    if ((data['destination']['name'] === data['source']['name'])) {
      this.errorMsg = config_data.error_msg_validentries;
      this.formInvalid = true;
    }
    if ((data['destination']['name'] !== data['source']['name']) && valid) {
      this.sharedService.searchObject = data;
      this.sharedService.selectedDir = this.selectedDir;
      this.searchSubmit.emit(true);
    }
  }

  onChangeRange(event) {
    let eventvalue = event;
    this.sendFinalValue(event);

  }

  /**
   * 
   * @param event emitting for check refined vlaues data 
   */
  sendFinalValue(event) {
    this.refineSearchValue.emit(event);
  }

}
