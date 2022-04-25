import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GratsThreeComponent } from './grats-three.component';

describe('GratsThreeComponent', () => {
  let component: GratsThreeComponent;
  let fixture: ComponentFixture<GratsThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GratsThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GratsThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
