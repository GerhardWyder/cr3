import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DevelComponent} from "./devel/devel.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RentalUnitDetailViewComponent} from "./user/rental-unit-detail-view/rental-unit-detail-view.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: "dashboard", component: DashboardComponent},
  {path: "detail", component: RentalUnitDetailViewComponent},
  {path: 'devel', component: DevelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
