import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  error: string;
  minlen: number;
  @Output() searchByValue = new EventEmitter<string>();
  @Output() searchByOthers = new EventEmitter<string>();
  @Output() reset = new EventEmitter<void>();

  constructor() {
    this.minlen = 3;
  }

  checkLength(str:string):boolean {
    if (str.length >= this.minlen) {
      this.error = "";
      return true;
    }
    this.error = "Please enter more than 3 characters";
    return false;
  }
  searchValue(str: string) {
    if (this.checkLength(str)) {
      this.searchByValue.emit(str);
    }
  }

  searchOthers(str: string) {
    if (this.checkLength(str)) {
      this.searchByOthers.emit(str);
    }
  }

  resetSearch() {
    this.reset.emit();
  }

  ngOnInit(): void {
  }

}
