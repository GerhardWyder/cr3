import {TestBed} from '@angular/core/testing';

import {RentalUnitService} from './rental-unit.service';

describe('CoreService', () => {
  let service: RentalUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
