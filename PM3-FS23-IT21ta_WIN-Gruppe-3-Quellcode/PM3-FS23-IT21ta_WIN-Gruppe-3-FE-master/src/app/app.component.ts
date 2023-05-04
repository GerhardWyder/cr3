import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {HeaderComponent} from "./shared/header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(HeaderComponent) headerComponent: HeaderComponent;
  @ViewChild('content') content: ElementRef<HTMLElement>;

  public ngAfterViewInit() {
    const menubarHeight = this.headerComponent.menuBar.nativeElement.offsetHeight;
    this.content.nativeElement.style.paddingTop = menubarHeight + 'px';
  }
}
