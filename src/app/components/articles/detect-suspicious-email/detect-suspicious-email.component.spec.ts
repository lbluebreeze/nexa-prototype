import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectSuspiciousEmailComponent } from './detect-suspicious-email.component';

describe('DetectSuspiciousEmailComponent', () => {
  let component: DetectSuspiciousEmailComponent;
  let fixture: ComponentFixture<DetectSuspiciousEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectSuspiciousEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectSuspiciousEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
