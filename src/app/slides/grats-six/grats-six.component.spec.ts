import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GratsSixComponent } from './grats-six.component';

describe('GratsSixComponent', () => {
  let component: GratsSixComponent;
  let fixture: ComponentFixture<GratsSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GratsSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GratsSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
