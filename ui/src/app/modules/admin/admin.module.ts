import { QlDanhsachLopHocComponent } from './ql-danhsach-lop-hoc/ql-danhsach-lop-hoc.component';
import { QlTkSinhvienComponent } from './ql-tk-sinhvien/ql-tk-sinhvien.component';
import { QlTkGiangvienComponent } from './ql-tk-giangvien/ql-tk-giangvien.component';
import { QlPksComponent } from './ql-pks/ql-pks.component';
import { QlCacCuocKsComponent } from './ql-cac-cuoc-ks/ql-cac-cuoc-ks.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XemKqKsComponent } from './xem-kq-ks/xem-kq-ks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    QlCacCuocKsComponent,
    QlPksComponent,
    QlTkGiangvienComponent,
    QlTkSinhvienComponent,
    XemKqKsComponent,
    QlDanhsachLopHocComponent
  ]
})
export class AdminModule { }
