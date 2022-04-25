import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GratsTwoComponent } from './grats-two.component';

describe('GratsTwoComponent', () => {
  let component: GratsTwoComponent;
  let fixture: ComponentFixture<GratsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GratsTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GratsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
