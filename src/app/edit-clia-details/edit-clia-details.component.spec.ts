import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCliaDetailsComponent } from './edit-clia-details.component';

describe('EditCliaDetailsComponent', () => {
  let component: EditCliaDetailsComponent;
  let fixture: ComponentFixture<EditCliaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCliaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCliaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
