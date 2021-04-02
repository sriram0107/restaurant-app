import { Component, Input} from '@angular/core';
import { Data } from '../models/Data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Data to be displayed
  @Input() data: Data[];
}
