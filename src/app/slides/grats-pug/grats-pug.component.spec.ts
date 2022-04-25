import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GratsPugComponent } from './grats-pug.component';

describe('GratsTenComponent', () => {
  let component: GratsPugComponent;
  let fixture: ComponentFixture<GratsPugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GratsPugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GratsPugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
