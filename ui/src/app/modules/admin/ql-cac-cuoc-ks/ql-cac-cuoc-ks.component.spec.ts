import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlCacCuocKsComponent } from './ql-cac-cuoc-ks.component';

describe('QlCacCuocKsComponent', () => {
  let component: QlCacCuocKsComponent;
  let fixture: ComponentFixture<QlCacCuocKsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlCacCuocKsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlCacCuocKsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
