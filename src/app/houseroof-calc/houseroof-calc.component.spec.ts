import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseroofCalcComponent } from './houseroof-calc.component';

describe('HouseroofCalcComponent', () => {
  let component: HouseroofCalcComponent;
  let fixture: ComponentFixture<HouseroofCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseroofCalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseroofCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
