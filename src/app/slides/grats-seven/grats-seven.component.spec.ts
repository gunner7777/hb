import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GratsSevenComponent } from './grats-seven.component';

describe('GratsSevenComponent', () => {
  let component: GratsSevenComponent;
  let fixture: ComponentFixture<GratsSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GratsSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GratsSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
