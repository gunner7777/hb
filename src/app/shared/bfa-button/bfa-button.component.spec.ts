import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfaButtonComponent } from './bfa-button.component';

describe('BfaButtonComponent', () => {
  let component: BfaButtonComponent;
  let fixture: ComponentFixture<BfaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BfaButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BfaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
