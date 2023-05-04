import { Component } from '@angular/core';
import {CalendarOptions} from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";

@Component({
  selector: 'app-rent-object-calendar',
  templateUrl: './rental-unit-calendar.component.html',
  styleUrls: ['./rental-unit-calendar.component.scss']
})
export class RentalUnitCalendarComponent {
  public calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    height: '100%',
    plugins: [timeGridPlugin]
  };
}
