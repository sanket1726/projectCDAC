import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPolByAidComponent } from './show-pol-by-aid.component';

describe('ShowPolByAidComponent', () => {
  let component: ShowPolByAidComponent;
  let fixture: ComponentFixture<ShowPolByAidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPolByAidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPolByAidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
