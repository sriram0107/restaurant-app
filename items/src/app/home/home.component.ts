import { Component, OnInit , Input} from '@angular/core';
import { Data } from '../models/Data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() data: Data[];
  ngOnInit(): void {
  }

}
