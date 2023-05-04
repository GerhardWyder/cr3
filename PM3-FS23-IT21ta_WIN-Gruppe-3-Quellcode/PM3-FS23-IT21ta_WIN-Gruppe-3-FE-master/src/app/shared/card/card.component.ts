import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {RentalUnit} from "../rental-unit-detail/rental-unit-detail.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges {
  @Input() public rentalUnitData: RentalUnit;
  @Output() public onClick = new EventEmitter<MouseEvent | KeyboardEvent>;
  public card: CardData;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['rentalUnitData'].firstChange === true) {
      this.card = convertRentalUnitToCardData(this.rentalUnitData);
    }
    if (changes['rentalUnitData'].firstChange !== true && changes['rentalUnitData'].currentValue !== this.rentalUnitData) {
      this.rentalUnitData = changes['rentalUnitData'].currentValue;
      this.card = convertRentalUnitToCardData(this.rentalUnitData);
    }
  }

  public cardClicked($event: MouseEvent | KeyboardEvent): void {
    this.onClick.emit($event);
  }
}

export interface CardData {
  imagePath: string;
  title: string;
  subTitle: string;
  description: CardDescription[];
}

export interface CardDescription {
  description: string;
  iconName?: string;
  highlight?: boolean;
}

function convertRentalUnitToCardData(rentalUnit: RentalUnit): CardData {
  const cardDescriptions: CardDescription[] = convertInfrastructureToCardDescriptions(rentalUnit)
    .concat(convertInventoryToCardDescriptions(rentalUnit));
  return {
    title: rentalUnit.name,
    subTitle: `${rentalUnit.location.zip}, ${rentalUnit.location.city}`,
    imagePath: "assets/fussballplatz.png",
    description: cardDescriptions
  };
}

function convertInfrastructureToCardDescriptions(rentalUnit: RentalUnit): CardDescription[] {
  return rentalUnit.infrastructures.map((infrastructure) => {
    return {
      description: infrastructure.name,
      iconName: "pi-check"
    };
  });
}

function convertInventoryToCardDescriptions(rentalUnit: RentalUnit): CardDescription[] {
  return rentalUnit.inventories.map((inventory) => {
    return {
      description: inventory.name,
      iconName: "pi-check"
    };
  });
}
