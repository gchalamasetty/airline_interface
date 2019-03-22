/**
 *  This component for showing results for searched flight data
 */
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/app.service';
import { Input } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { flight_data } from 'src/app/data';
@Component({
  selector: 'air-result',
  templateUrl: './air-result.component.html',
  styleUrls: ['./air-result.component.scss']

})
export class AirResultComponent implements OnInit {
  no_data_found: boolean = false;
  returnTicketCheck: { 
    source: string; destination: 
    string; flightName: string; 
    departure_time: string; 
    arrival_time: string; 
    cost: string; }[];
  @Input() getSearchTriggered: boolean = false;
  @Input() recieveRefineSearchValue: any;
  searchRangeValue: any;
  public flight_route_info = flight_data;
  filteredData: any = [];
  constructor(public sharedService: SharedService) {
    this.searchRangeValue = JSON.parse(JSON.stringify(this.sharedService.searchRange));
  }

  ngOnInit() {

  }
  /**
   * 
   * @param changes 
   * Lets see any one searching flight ,here we can notice and triggred get appropriate data form service
   */
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    if (changes['getSearchTriggered']) {
      this.showSearchResult();
    }
    if (changes['recieveRefineSearchValue']) {
      this.searchRangeValue = this.recieveRefineSearchValue;
      setTimeout(() => {
        this.refineResult();
        this.checkNodataForRefined();
      }, 1000);

    }

  }
/**
 * 
 * @param searchRefine 
 * Showing flight result based on search items
 */
  showSearchResult(searchRefine?: string) {
    this.no_data_found = false;
    let depDate = this.sharedService.searchObject['dapartureDate'];
    let returnDate = this.sharedService.searchObject['returnDate'];
    let source = '';
    let destination = '';
    if (this.sharedService.searchObject['source'] && this.sharedService.searchObject['source']['iata']) {
      source = this.sharedService.searchObject['source']['iata'];
    }
    if (this.sharedService.searchObject['destination'] && this.sharedService.searchObject['destination']['iata']) {
      destination = this.sharedService.searchObject['destination']['iata'];
    }
    let min = this.sharedService.searchRange ? this.sharedService.searchRange[0] : 0;
    let max = this.sharedService.searchRange ? this.sharedService.searchRange[1] : 5000;
    this.filteredData = this.flight_route_info.filter(function (el) {
      return el.source === source &&
        el.destination === destination &&
        el.departure_time.split(':')[0] === depDate &&
        Number(el.cost) <= max &&
        Number(el.cost) > min
    });
    this.returnTicketCheck = this.flight_route_info.filter(function (el) {
      return el.source === destination &&
        el.destination === source &&
        el.departure_time.split(':')[0] === returnDate
    });

  }
/**
 * 
 * @param timeValue 
 * Here checking time whether its am / pm
 */
  getTime(timeValue) {
    let timeV = timeValue.split(':');
    let amOrPm = timeV[1] < 12 ? 'AM' : 'PM';
    timeV.shift();
    let getTimeValue = timeV.join(':') + amOrPm;
    return getTimeValue;

  }

  /**
   * 
   * @param firstWay 
   * @param returnWay  Get Total amount based on source and destination
   */
  getTotalAmount(firstWay, returnWay) {
    let total = Number(firstWay.cost) + Number(returnWay.cost);
    return total;
  }
  /**
   * Here we can filter the data based on price bar selection
   */
  refineResult() {
    setTimeout(() => {
      this.sharedService.searchRange = (this.searchRangeValue) ? this.searchRangeValue : this.sharedService.searchRange;
      this.showSearchResult('search_refine');
    }, 1000)

  }

  checkWithRefinePrice(oneWay, returnCheck) {
    let total = this.getTotalAmount(oneWay, returnCheck);
    if (this.sharedService.searchRange && (total >= this.sharedService.searchRange[0] && (total <= this.sharedService.searchRange[1]))) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Check for no data based on inputs
   */
  checkNodataForRefined() {
    let count = 0;
    let min = this.sharedService.searchRange ? this.sharedService.searchRange[0] : 0;
    let max = this.sharedService.searchRange ? this.sharedService.searchRange[1] : 5000;
    this.filteredData.forEach((item, index, arr) => {
      this.returnTicketCheck.forEach((value, index, arr1) => {
        if ((Number(item.cost) + Number(value.cost) <= max) && (Number(item.cost) + Number(value.cost) >= min)) {

        } else {
          count++;
          if (count === this.returnTicketCheck.length) {
            this.no_data_found = true;
          }
        }
      })
    })
  }

}
