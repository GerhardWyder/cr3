import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import {RentalUnit} from "../rental-unit-detail/rental-unit-detail.component";

@Component({
  selector: 'app-booking-costs',
  templateUrl: './rental-unit-costs.component.html',
  styleUrls: ['./rental-unit-costs.component.scss']
})
export class RentalUnitCostsComponent implements OnChanges {
  @Input() public rentalUnitCosts: RentalUnitCosts;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['rentalUnitCosts'].firstChange === true && changes['rentalUnitCosts'].currentValue !== this.rentalUnitCosts) {
      this.rentalUnitCosts = changes['rentalUnitCosts'].currentValue;
    }
  }

  datesForm = new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl()
  });

  public calcTotalPrice(): number {
    let totalCosts: number;
    totalCosts = this.rentalUnitCosts.price;
    this.rentalUnitCosts.extras.forEach((extra) =>{
      totalCosts += extra.price;
    })
    return totalCosts;
  }

  public bookUnit(): void {
    // ToDo
  }
}

export interface RentalUnitCosts {
  name: string;
  price: number;
  extras: Extras[];
}

interface Extras {
  name: string;
  price: number;
}

