import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfaActionTitleComponent } from './bfa-action-title.component';

describe('BfaActionTitleComponent', () => {
  let component: BfaActionTitleComponent;
  let fixture: ComponentFixture<BfaActionTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BfaActionTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BfaActionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
