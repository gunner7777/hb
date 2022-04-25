import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GratsNineComponent } from './grats-nine.component';

describe('GratsNineComponent', () => {
  let component: GratsNineComponent;
  let fixture: ComponentFixture<GratsNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GratsNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GratsNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
