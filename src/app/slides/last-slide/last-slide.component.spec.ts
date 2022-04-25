import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastSlideComponent } from './last-slide.component';

describe('LastSlideComponent', () => {
  let component: LastSlideComponent;
  let fixture: ComponentFixture<LastSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
