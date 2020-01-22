import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliaComponent } from './clia.component';

describe('CliaComponent', () => {
  let component: CliaComponent;
  let fixture: ComponentFixture<CliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
