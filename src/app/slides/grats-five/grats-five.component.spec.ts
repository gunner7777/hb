import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GratsFiveComponent } from './grats-five.component';

describe('GratsFiveComponent', () => {
  let component: GratsFiveComponent;
  let fixture: ComponentFixture<GratsFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GratsFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GratsFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
