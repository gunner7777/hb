import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GratsFourComponent } from './grats-four.component';

describe('GratsFourComponent', () => {
  let component: GratsFourComponent;
  let fixture: ComponentFixture<GratsFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GratsFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GratsFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
