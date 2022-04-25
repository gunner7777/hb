import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfaHbTextComponent } from './bfa-hb-text.component';

describe('BfaHbTextComponent', () => {
  let component: BfaHbTextComponent;
  let fixture: ComponentFixture<BfaHbTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BfaHbTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BfaHbTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
