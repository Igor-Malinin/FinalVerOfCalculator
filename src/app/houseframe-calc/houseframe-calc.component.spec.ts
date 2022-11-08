import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseframeCalcComponent } from './houseframe-calc.component';

describe('HouseframeCalcComponent', () => {
  let component: HouseframeCalcComponent;
  let fixture: ComponentFixture<HouseframeCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseframeCalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseframeCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
