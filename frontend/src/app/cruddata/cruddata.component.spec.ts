import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruddataComponent } from './cruddata.component';

describe('CruddataComponent', () => {
  let component: CruddataComponent;
  let fixture: ComponentFixture<CruddataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CruddataComponent]
    });
    fixture = TestBed.createComponent(CruddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
