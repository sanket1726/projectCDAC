import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPlansComponent } from './add-new-plans.component';

describe('AddNewPlansComponent', () => {
  let component: AddNewPlansComponent;
  let fixture: ComponentFixture<AddNewPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
