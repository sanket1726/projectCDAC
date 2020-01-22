import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMeetComponent } from './request-meet.component';

describe('RequestMeetComponent', () => {
  let component: RequestMeetComponent;
  let fixture: ComponentFixture<RequestMeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestMeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
