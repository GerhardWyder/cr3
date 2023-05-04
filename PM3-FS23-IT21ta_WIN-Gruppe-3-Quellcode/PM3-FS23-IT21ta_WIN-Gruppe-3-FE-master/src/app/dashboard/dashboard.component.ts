import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RentalUnitService} from "../shared/services/rental-unit.service";
import {RentalUnit} from "../shared/rental-unit-detail/rental-unit-detail.component";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";


@UntilDestroy()
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public rentalUnits: RentalUnit[];

  constructor(private router: Router,
              private rentalUnitService: RentalUnitService,) {
  }

  public ngOnInit(): void {
    this.rentalUnitService.getAllRentalUnits()
      .pipe(untilDestroyed(this))
      .subscribe((rentalUnits: RentalUnit[]) => {
        this.rentalUnits = rentalUnits;
      });
  }

  public openDetailView(rentalUnit: RentalUnit): void {
    this.router.navigate(["/detail"], {state: {rentalUnit}});
  }
}

