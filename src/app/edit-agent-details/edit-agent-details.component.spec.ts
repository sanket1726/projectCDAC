import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAgentDetailsComponent } from './edit-agent-details.component';

describe('EditAgentDetailsComponent', () => {
  let component: EditAgentDetailsComponent;
  let fixture: ComponentFixture<EditAgentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAgentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAgentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
