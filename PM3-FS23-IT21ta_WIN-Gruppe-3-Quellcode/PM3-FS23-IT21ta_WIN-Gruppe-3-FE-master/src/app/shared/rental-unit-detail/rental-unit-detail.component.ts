import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CardData} from "../card/card.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-rental-unit-detail',
  templateUrl: './rental-unit-detail.component.html',
  styleUrls: ['./rental-unit-detail.component.scss']
})
export class RentalUnitDetailComponent implements OnChanges {
  @Input() public rentalUnit: RentalUnit;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['rentalUnit'].firstChange === true && changes['rentalUnit'].currentValue !== this.rentalUnit) {
      this.rentalUnit = changes['rentalUnit'].currentValue;
    }
  }

  public getRentalUnitTitle(): string {
    return `${this.rentalUnit.unitType} ${this.rentalUnit.name}`
  }

  public getRentalUnitAddress(): string {
    return `${this.rentalUnit.location.street}, ${this.rentalUnit.location.zip} ${this.rentalUnit.location.city}`
  }


}

export interface RentalUnit {
  id: number;
  name: string;
  description: string;
  unitType: string;
  imagePath: string;
  infrastructures: Infrastructure[];
  inventories: Inventory[];
  location: Location;
  unitOwner: UnitOwner;
}

interface Infrastructure {
  name: string;
  quantity: number;
}

interface Inventory {
  name: string;
  quantity: number;
}

interface Location {
  street: string;
  city: string;
  zip: string;
  latitude: number;
  longitude: number;
}

interface UnitOwner {
  lastName: string;
  firstName: string;
  email: string;
  phoneNumber: string;
}
