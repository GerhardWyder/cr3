import {Component} from '@angular/core';

@Component({
  selector: 'app-general-information-step',
  templateUrl: './general-information-step.component.html',
  styleUrls: ['./general-information-step.component.scss']
})
export class GeneralInformationStepComponent {
  public type: string;
  public name: string;
  public street: string;
  public streetNr: string;
  public zipCode: string;
  public city: string;
  public latitude: string;
  public longitude: string;
  public properties: Property[] = [{
    name: '',
    value: ''
  }];
  public selectableObjectTypes: string[] = ["Fussballplatz", "Gemeinderaum", "Kirchengemeindshaus", "Sporthalle"]; //TODO replace with available types maybe from server?
  public uploadedImages: File[] = [];

  public uploadImage(images: File[]): void {
    for (let image of images) {
      this.uploadedImages.push(image);
    }
  }

  public addNewProperties(): void {
    this.properties.push({
      name: '',
      value: ''
    });
  }
}

export interface Property {
  name: string;
  value: string;
}
