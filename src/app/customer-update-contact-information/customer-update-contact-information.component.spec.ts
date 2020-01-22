import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerUpdateContactInformationComponent } from './customer-update-contact-information.component';

describe('CustomerUpdateContactInformationComponent', () => {
  let component: CustomerUpdateContactInformationComponent;
  let fixture: ComponentFixture<CustomerUpdateContactInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerUpdateContactInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerUpdateContactInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
