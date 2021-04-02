import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // Error message to be displayed if character length <= 3
  error: string;
  // Minimum length of characters to be entered
  minlen: number;
  // Events to search within the data
  @Output() searchByValue = new EventEmitter<string>();
  @Output() searchByOthers = new EventEmitter<string>();
  // Event to reset search results
  @Output() reset = new EventEmitter<void>();

  constructor() {
    // Minimum 3 characters needed to perform search
    this.minlen = 3;
  }

  // Checks for caharcter length and sets error message if applicable
  checkLength(str:string):boolean {
    if (str.length >= this.minlen) {
      this.error = "";
      return true;
    }
    this.error = "Please enter more than 3 characters";
    return false;
  }

  // Emits an event to search by value if character length >= 3
  searchValue(str: string) {
    if (this.checkLength(str)) {
      this.searchByValue.emit(str);
    }
  }

  // Emits an event to search by display/desc if character length >= 3
  searchOthers(str: string) {
    if (this.checkLength(str)) {
      this.searchByOthers.emit(str);
    }
  }

  // Resets search results
  resetSearch() {
    this.reset.emit();
  }

  ngOnInit(): void {
  }

}
