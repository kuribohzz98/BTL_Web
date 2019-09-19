import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XemKqKsComponent } from './xem-kq-ks.component';

describe('XemKqKsComponent', () => {
  let component: XemKqKsComponent;
  let fixture: ComponentFixture<XemKqKsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XemKqKsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XemKqKsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
