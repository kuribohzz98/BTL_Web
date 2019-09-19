import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KetQuaDanhGiaComponent } from './ket-qua-danh-gia.component';

describe('KetQuaDanhGiaComponent', () => {
  let component: KetQuaDanhGiaComponent;
  let fixture: ComponentFixture<KetQuaDanhGiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetQuaDanhGiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KetQuaDanhGiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
