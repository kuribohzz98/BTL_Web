import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlDanhsachLopHocComponent } from './ql-danhsach-lop-hoc.component';

describe('QlDanhsachLopHocComponent', () => {
  let component: QlDanhsachLopHocComponent;
  let fixture: ComponentFixture<QlDanhsachLopHocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlDanhsachLopHocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlDanhsachLopHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
