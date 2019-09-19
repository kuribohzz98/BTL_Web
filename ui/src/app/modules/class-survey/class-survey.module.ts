import { ClassSurveyComponent } from './class-survey.component';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '',
            component: ClassSurveyComponent
        }
    ]),CommonModule],
    declarations: [ClassSurveyComponent]
})
export class ClassSurveyModule {}