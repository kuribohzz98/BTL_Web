import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSurveyComponent } from './class-survey.component';

describe('ClassSurveyComponent', () => {
  let component: ClassSurveyComponent;
  let fixture: ComponentFixture<ClassSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
