import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GratsOneComponent } from './grats-one.component';

describe('GratsOneComponent', () => {
  let component: GratsOneComponent;
  let fixture: ComponentFixture<GratsOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GratsOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GratsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
