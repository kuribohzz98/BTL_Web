import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TienHanhDanhGiaComponent } from './tien-hanh-danh-gia.component';

describe('TienHanhDanhGiaComponent', () => {
  let component: TienHanhDanhGiaComponent;
  let fixture: ComponentFixture<TienHanhDanhGiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TienHanhDanhGiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TienHanhDanhGiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
