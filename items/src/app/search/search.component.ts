import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: boolean;
  @Output() searchByValue = new EventEmitter<string>();
  @Output() searchByOthers = new EventEmitter<string>();
  @Output() reset = new EventEmitter<void>();
 
  searchValue(str: string) {
    this.searchByValue.emit(str);
  }

  searchOthers(str: string) {
    this.searchByOthers.emit(str);
  }

  resetSearch() {
    this.reset.emit();
  }

  ngOnInit(): void {
  }

}
