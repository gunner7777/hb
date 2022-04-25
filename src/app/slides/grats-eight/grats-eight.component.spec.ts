import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GratsEightComponent } from './grats-eight.component';

describe('GratsEightComponent', () => {
  let component: GratsEightComponent;
  let fixture: ComponentFixture<GratsEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GratsEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GratsEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
