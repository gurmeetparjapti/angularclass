import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HedderComponent } from './hedder.component';

describe('HedderComponent', () => {
  let component: HedderComponent;
  let fixture: ComponentFixture<HedderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HedderComponent]
    });
    fixture = TestBed.createComponent(HedderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
