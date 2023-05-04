import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.scss']
})
export class FilterSidebarComponent implements OnInit {
  facilities: any[];

  ngOnInit() {
    this.facilities = [
      { type: 'Fussballplatz' },
      { type: 'Tennisplatz' },
      { type: 'Kunstrasen' }
    ];
  }
  filterForm = new FormGroup({
    selectedFacilityTypes: new FormControl(),
    location: new FormControl(),
    radius: new FormControl(),
    date: new FormControl(),
    priceRange: new FormControl([15, 80])
  });

  get getMinSelectedPrice() {
    return this.filterForm.controls["priceRange"].value?.[0];
  }

  get getMaxSelectedPrice() {
    return this.filterForm.controls["priceRange"].value?.[1];
  }

  onFormSubmit() {
    console.log(this.filterForm.value )
  }
}
