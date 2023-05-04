import {Component, ElementRef, ViewChild} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('menuBar', {read: ElementRef, static:false}) menuBar: ElementRef;
  public title = 'Find-Your-Space';
}
