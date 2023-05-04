import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {RentalUnit} from "../rental-unit-detail/rental-unit-detail.component";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RentalUnitService {

  constructor(private http: HttpClient) {
  }

  public getAllRentalUnits(): Observable<RentalUnit[]> {
    return this.http.get<RentalUnit[]>(environment.apiUrl + '/rental').pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
