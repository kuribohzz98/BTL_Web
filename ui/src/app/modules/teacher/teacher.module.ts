import { SqrtPipe } from './../../shared/app.sqrt';
import { ChiTietKsComponent } from './ket-qua-danh-gia/chi-tiet-ks/chi-tiet-ks.component';
import { LopGiangDayComponent } from './lop-giang-day/lop-giang-day.component';
import { KetQuaDanhGiaComponent } from './ket-qua-danh-gia/ket-qua-danh-gia.component';
import { TeacherRoutingModule } from './teacher-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        TeacherRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        KetQuaDanhGiaComponent,
        LopGiangDayComponent,
        ChiTietKsComponent,
        SqrtPipe
    ]
})
export class TeacherModule {}