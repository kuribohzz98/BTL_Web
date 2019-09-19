import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhGiaMonHocComponent } from './danh-gia-mon-hoc.component';

describe('DanhGiaMonHocComponent', () => {
  let component: DanhGiaMonHocComponent;
  let fixture: ComponentFixture<DanhGiaMonHocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhGiaMonHocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhGiaMonHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
