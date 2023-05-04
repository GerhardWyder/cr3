import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {MenuItem} from "primeng/api";
import {WizardStep} from "../create-rental-unit-wizard.component";

@Component({
  selector: 'app-rental-unit-wizard-navigation-sidebar',
  templateUrl: './rental-unit-wizard-navigation-sidebar.component.html',
  styleUrls: ['./rental-unit-wizard-navigation-sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RentalUnitWizardNavigationSidebarComponent {

  @Input() public title: string = "Title";
  @Input() public buttonText:string = "Button Text";
  public navigationMenuItems: MenuItem[];
  @Input() public activeTab: WizardStep;
  @Output() public activeTabChanged: EventEmitter<WizardStep> = new EventEmitter();
  @Output() public onButtonClick: EventEmitter<MouseEvent | KeyboardEvent> = new EventEmitter();

  ngOnInit() {
    this.navigationMenuItems = [
      {
        label: "Generelle Angaben",
        icon: "pi pi-fw pi-pencil",
        command: () => {
          this.activeTab = "general";
          this.activeTabChanged.emit(this.activeTab);
        }
      },
      {
        label: "Dazubuchbares",
        icon: "pi pi-fw pi-plus-circle",
        command: () => {
          this.activeTab = "additionalBookings";
          this.activeTabChanged.emit(this.activeTab);
        }
      },
      {
        label: "Gesperrte Zeitslots",
        icon: "pi pi-fw pi-calendar-times",
        command: () => {
          this.activeTab = "blockedSlots";
          this.activeTabChanged.emit(this.activeTab);
        }
      }
    ];
  }

  public buttonClicked($event: MouseEvent | KeyboardEvent): void {
    this.onButtonClick.emit($event);
  }

}
