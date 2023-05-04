import {Component} from '@angular/core';
import {RentalUnit} from "../../shared/rental-unit-detail/rental-unit-detail.component";
import {RentalUnitCosts} from "../../shared/rental-unit-costs/rental-unit-costs.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-rental-unit-detail-view',
  templateUrl: './rental-unit-detail-view.component.html',
  styleUrls: ['./rental-unit-detail-view.component.scss']
})
export class RentalUnitDetailViewComponent {
public  rentalUnit: RentalUnit;
  constructor(private router: Router) {
    const selectedRentalUnit = this.router.getCurrentNavigation()?.extras?.state?.['rentalUnit'];
    if (selectedRentalUnit){
      this.rentalUnit = selectedRentalUnit;
    }
  }
  /*public rentalUnit: RentalUnit = {
    id: 1,
    name: "Breite",
    description: "Fussballplatz mit Clubhaus",
    unitType: "Kunstrasen",
    imagePath: "assets/fussballplatz.png",
    infrastructures: [
      {
        name: "Duschen",
        quantity: 10
      },
      {
        name: "Garderoben",
        quantity: 2
      }
    ],
    inventories: [
      {
        name: "Fussbälle",
        quantity: 20
      },
      {
        name: "Goals",
        quantity: 4
      }
    ],
    location: {
      street: "Musterstrasse",
      city: "Winterthur",
      zip: "8307",
      latitude: 47.6654,
      longitude: 8.98314
    },
    contactPerson: {
      firstName: "Elias",
      lastName: "Keller",
      eMail: "kelleel5@students.zhaw.ch",
      phoneNumber: "079 123 12 12",
    }
  }*/
  public rentalUnitCosts: RentalUnitCosts = {
    name: 'Basispreis für 4h',
    price: 120,
    extras: [
      {
        name: 'Garderobe',
        price: 10
      },
      {
        name: 'Duschen',
        price: 20
      },
      {
        name: 'Überzieher',
        price: 26
      }
    ]
  }
}
