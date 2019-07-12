import { TestBed } from '@angular/core/testing';

import { ProduktServService } from './produkt-serv.service';

describe('ProduktServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProduktServService = TestBed.get(ProduktServService);
    expect(service).toBeTruthy();
  });
});
