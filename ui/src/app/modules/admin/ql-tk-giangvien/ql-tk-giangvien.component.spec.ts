import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlTkGiangvienComponent } from './ql-tk-giangvien.component';

describe('QlTkGiangvienComponent', () => {
  let component: QlTkGiangvienComponent;
  let fixture: ComponentFixture<QlTkGiangvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlTkGiangvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlTkGiangvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
