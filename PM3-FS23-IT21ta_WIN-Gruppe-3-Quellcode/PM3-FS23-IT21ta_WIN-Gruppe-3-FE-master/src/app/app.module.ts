import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {AppRoutingModule} from './app-routing.module';
import {ToastModule} from "primeng/toast";
import {HttpClientModule} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DevelComponent} from "./devel/devel.component";
import {CardModule} from "primeng/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MultiSelectModule} from "primeng/multiselect";
import {CalendarModule} from "primeng/calendar";
import {SliderModule} from "primeng/slider";
import {RentalUnitDetailComponent} from './shared/rental-unit-detail/rental-unit-detail.component';
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {RentalUnitCalendarComponent} from './shared/rental-unit-calendar/rental-unit-calendar.component';
import {FullCalendarModule} from "@fullcalendar/angular";
import {HeaderComponent} from './shared/header/header.component';
import {MenubarModule} from "primeng/menubar";
import {RentalUnitCostsComponent} from "./shared/rental-unit-costs/rental-unit-costs.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {FilterSidebarComponent} from "./shared/filter-sidebar/filter-sidebar.component";
import {InputTextModule} from "primeng/inputtext";
import {AccordionModule} from "primeng/accordion";
import {MenuModule} from 'primeng/menu';
import {
  GeneralInformationStepComponent
} from "./admin/create-rental-unit-wizard/general-information-step/general-information-step.component";
import {FileUploadModule} from "primeng/fileupload";
import {DropdownModule} from "primeng/dropdown";
import {
  RentalUnitWizardNavigationSidebarComponent
} from './admin/create-rental-unit-wizard/navigation-sidebar/rental-unit-wizard-navigation-sidebar.component';
import {CreateRentalUnitWizardComponent} from './admin/create-rental-unit-wizard/create-rental-unit-wizard.component';
import {RentalUnitDetailViewComponent} from "./user/rental-unit-detail-view/rental-unit-detail-view.component";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DevelComponent,
    RentalUnitDetailComponent,
    RentalUnitCalendarComponent,
    HeaderComponent,
    RentalUnitCostsComponent,
    FilterSidebarComponent,
    RentalUnitDetailViewComponent,
    GeneralInformationStepComponent,
    RentalUnitWizardNavigationSidebarComponent,
    CreateRentalUnitWizardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastModule,
    HttpClientModule,
    CardModule,
    ReactiveFormsModule,
    MultiSelectModule,
    CalendarModule,
    SliderModule,
    ProgressSpinnerModule,
    FullCalendarModule,
    MenubarModule,
    InputTextModule,
    AccordionModule,
    FileUploadModule,
    FormsModule,
    DropdownModule,
    AccordionModule,
    MenuModule,
    SharedModule
  ],
  providers: [MessageService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
