import {Component} from '@angular/core';
import {RentalUnit} from "../shared/rental-unit-detail/rental-unit-detail.component";

@Component({
  selector: 'app-devel',
  templateUrl: './devel.component.html',
})
export class DevelComponent {
    public rentalUnits: RentalUnit[] = [{
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
      unitOwner: {
        firstName: "Elias",
        lastName: "Keller",
        email: "kelleel5@students.zhaw.ch",
        phoneNumber: "079 123 12 12",
      }
    },
      {
        id: 2,
        name: "Bülach",
        description: "Fussballplatz mit Clubhaus",
        unitType: "Kunstrasen",
        imagePath: "assets/fussballplatz.png",
        infrastructures: [
          {
            name: "Duschen",
            quantity: 22
          },
          {
            name: "Garderoben",
            quantity: 4
          }
        ],
        inventories: [
          {
            name: "Fussbälle",
            quantity: 3
          },
          {
            name: "Goals",
            quantity: 10
          }
        ],
        location: {
          street: "Doestrasse",
          city: "Winterthur",
          zip: "8402",
          latitude: 47.6654,
          longitude: 8.98314
        },
        unitOwner: {
          firstName: "Martin",
          lastName: "Muster",
          email: "musterma@students.zhaw.ch",
          phoneNumber: "012 141 51 51",
        }
      }]

  public showRentalUnitDetails(rentalUnit: RentalUnit): void {
    console.log(rentalUnit);

  }
}
