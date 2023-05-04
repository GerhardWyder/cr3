import { Component } from '@angular/core';

@Component({
  selector: 'app-create-rental-unit-wizard',
  templateUrl: './create-rental-unit-wizard.component.html'
})
export class CreateRentalUnitWizardComponent {

  public activeTab: WizardStep = "general";

  public activeTabChangedHandler(newActiveTab: WizardStep) {
    this.activeTab = newActiveTab;
  }

  public createRentalUnit(): void {
    // ToDo
    console.log("create Rental Unit");
  }

}

export type WizardStep = "general" | "additionalBookings" | "blockedSlots"
