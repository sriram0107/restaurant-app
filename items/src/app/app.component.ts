import { Component } from '@angular/core';
import { Data } from './models/Data';
import { API_ENDPOINT } from '../config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: Data[];
  display_data: Data[];
  err: string;
  constructor() {
    this.data = [];
    this.display_data = [];
    this.err = "";
  }
  ngOnInit(): void {
    fetch(API_ENDPOINT)
      .then(data => data.json())
      .then(res => {
        this.display_data = res;
        this.data = this.display_data;
        console.log(this.data);
      })
      .catch(err => this.err = "Error in fetching data from the backend")
  }


  filterValue = (name: string) => {
    console.log("filtering by value", name);
    this.display_data = this.data.filter(item => {
      return item.value.toLowerCase() === name.toLowerCase();
    })
    console.log(this.data);
  }

  filterOthers = (name: string) => {
    console.log("filtering by display/desc", name);
    this.display_data = this.data.filter(item => {
      return item.display.toLowerCase() === name.toLowerCase() || item.desc.toLowerCase() === name.toLowerCase();
    })
  }

  resetSearch() {
    this.display_data = this.data;
  }
}
