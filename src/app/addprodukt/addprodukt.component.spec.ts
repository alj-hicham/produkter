import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproduktComponent } from './addprodukt.component';

describe('AddproduktComponent', () => {
  let component: AddproduktComponent;
  let fixture: ComponentFixture<AddproduktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddproduktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproduktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
