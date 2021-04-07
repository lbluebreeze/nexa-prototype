import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspiciousEmailAlertComponent } from './suspicious-email-alert.component';

describe('SuspiciousEmailAlertComponent', () => {
  let component: SuspiciousEmailAlertComponent;
  let fixture: ComponentFixture<SuspiciousEmailAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuspiciousEmailAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspiciousEmailAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
