import { Component } from '@angular/core';
import { Data } from './models/Data';

const API_ENDPOINT = 'http://localhost:5000';

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
      .catch(err => this.err = err)
  }


  filterValue = (name: string) => {
    console.log("filtering y value", name);
    this.display_data = this.data.filter(item => {
      item.value === name;
    })
    console.log(this.data);
  }

  filterOthers = (name: string) => {
    console.log("filtering y value", name);
    this.display_data = this.data.filter(item => {
      item.display === name || item.desc === name;
    })
  }

  resetSearch() {
    this.display_data = this.data;
  }
}
