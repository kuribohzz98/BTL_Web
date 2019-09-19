import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlPksComponent } from './ql-pks.component';

describe('QlPksComponent', () => {
  let component: QlPksComponent;
  let fixture: ComponentFixture<QlPksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlPksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlPksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
