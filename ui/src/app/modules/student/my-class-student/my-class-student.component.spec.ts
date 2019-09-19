import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClassStudentComponent } from './my-class-student.component';

describe('MyClassStudentComponent', () => {
  let component: MyClassStudentComponent;
  let fixture: ComponentFixture<MyClassStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyClassStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyClassStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
