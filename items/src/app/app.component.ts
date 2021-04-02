import { Component } from '@angular/core';
import { Data } from './models/Data';
import { API_ENDPOINT } from '../config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // original data from API
  data: Data[];
  // data to be displayed - changes upon search results
  display_data: Data[];
  // Error message that displays if backend produces an error
  err: string;

  constructor() {
    this.data = [];
    this.display_data = [];
    this.err = "";
  }

  // Lifecycle hook to get data from the backend
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

// filters results by value
  filterValue = (name: string) => {
    console.log("filtering by value", name);
    name = name.toLowerCase();
    this.display_data = this.data.filter(item => {
      return item.value.toLowerCase() === name;
    })
    console.log(this.data);
  }

  // filters results by display/desc value
  filterOthers = (name: string) => {
    console.log("filtering by display/desc", name);
    name = name.toLowerCase();
    this.display_data = this.data.filter(item => {
      return item.display.toLowerCase() === name || item.desc.toLowerCase() === name;
    })
  }

  // Resets display data
  resetSearch() {
    this.display_data = this.data;
  }
}
