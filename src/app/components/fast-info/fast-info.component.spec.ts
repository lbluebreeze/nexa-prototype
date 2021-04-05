import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastInfoComponent } from './fast-info.component';

describe('FastInfoComponent', () => {
  let component: FastInfoComponent;
  let fixture: ComponentFixture<FastInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
