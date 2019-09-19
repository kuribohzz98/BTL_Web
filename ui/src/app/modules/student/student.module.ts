import { DanhGiaMonHocModule } from './danh-gia-mon-hoc/danh-gia-mon-hoc.module';
import { MyClassStudentComponent } from './my-class-student/my-class-student.component';
import { StudentRoutingModule } from './student-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DanhGiaMonHocModule
],
    declarations: [
        MyClassStudentComponent
    ]
})
export class StudentModule {}