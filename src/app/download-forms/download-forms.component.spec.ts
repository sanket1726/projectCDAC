import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadFormsComponent } from './download-forms.component';

describe('DownloadFormsComponent', () => {
  let component: DownloadFormsComponent;
  let fixture: ComponentFixture<DownloadFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
