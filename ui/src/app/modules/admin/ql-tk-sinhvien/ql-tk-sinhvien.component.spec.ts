import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlTkSinhvienComponent } from './ql-tk-sinhvien.component';

describe('QlTkSinhvienComponent', () => {
  let component: QlTkSinhvienComponent;
  let fixture: ComponentFixture<QlTkSinhvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlTkSinhvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlTkSinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
