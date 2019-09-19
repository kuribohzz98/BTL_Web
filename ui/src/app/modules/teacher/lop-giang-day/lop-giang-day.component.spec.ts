import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LopGiangDayComponent } from './lop-giang-day.component';

describe('LopGiangDayComponent', () => {
  let component: LopGiangDayComponent;
  let fixture: ComponentFixture<LopGiangDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LopGiangDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LopGiangDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
