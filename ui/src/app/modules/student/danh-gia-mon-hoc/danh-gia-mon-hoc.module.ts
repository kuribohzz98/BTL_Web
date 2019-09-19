import { RouterModule } from '@angular/router/';
import { Routes } from '@angular/router';
import { TienHanhDanhGiaComponent } from './tien-hanh-danh-gia/tien-hanh-danh-gia.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DanhGiaMonHocComponent } from './danh-gia-mon-hoc.component';

const routes: Routes = [
    {
        path:'',
        component: DanhGiaMonHocComponent
    },
    {
        path:'tien-hanh-danh-gia/:mamonhoc',
        component: TienHanhDanhGiaComponent
    }
]
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        DanhGiaMonHocComponent,
        TienHanhDanhGiaComponent
    ],
    exports: [RouterModule]
})
export class DanhGiaMonHocModule {}