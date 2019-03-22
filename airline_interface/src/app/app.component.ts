import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  searchResultEvent:boolean = false;
  sendRefineSearchValue:any;
  getSearchEvent(event){
    this.searchResultEvent = event;
    setTimeout(()=>{
      this.searchResultEvent =false;
    },0);
  }
  getrefineSearchValue(event){
    this.sendRefineSearchValue = event;
  }
}
