import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCustByAIdComponent } from './show-cust-by-aid.component';

describe('ShowCustByAIdComponent', () => {
  let component: ShowCustByAIdComponent;
  let fixture: ComponentFixture<ShowCustByAIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCustByAIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCustByAIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
