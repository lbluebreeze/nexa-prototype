import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectPhisingComponent } from './detect-phising.component';

describe('DetectPhisingComponent', () => {
  let component: DetectPhisingComponent;
  let fixture: ComponentFixture<DetectPhisingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectPhisingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectPhisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
