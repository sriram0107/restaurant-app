import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data = "";
  err = "";
  ngOnInit(): void {
    fetch("http://localhost:5000")
      .then(data => data.json())
      .then(res => {
        this.data = JSON.stringify(res);
        console.log(this.data);
      })
      .catch(err=>this.err = err)
  }

}
