import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietKsComponent } from './chi-tiet-ks.component';

describe('ChiTietKsComponent', () => {
  let component: ChiTietKsComponent;
  let fixture: ComponentFixture<ChiTietKsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietKsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietKsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
