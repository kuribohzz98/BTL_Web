import { QlDanhsachLopHocComponent } from './ql-danhsach-lop-hoc/ql-danhsach-lop-hoc.component';
import { NgModule } from '@angular/core';
import { QlCacCuocKsComponent } from './ql-cac-cuoc-ks/ql-cac-cuoc-ks.component';
import { QlPksComponent } from './ql-pks/ql-pks.component';
import { QlTkGiangvienComponent } from './ql-tk-giangvien/ql-tk-giangvien.component';
import { QlTkSinhvienComponent } from './ql-tk-sinhvien/ql-tk-sinhvien.component';
import { Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule} from '@angular/router';
import { XemKqKsComponent } from './xem-kq-ks/xem-kq-ks.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'ql-tk-sinhvien',
    pathMatch: 'full'
  },
  {
    path: 'ql-tk-sinhvien',
    component: QlTkSinhvienComponent
  },
  {
    path: 'ql-tk-giangvien',
    component: QlTkGiangvienComponent
  },
  {
    path: 'ql-danhsach-lop-hoc',
    component: QlDanhsachLopHocComponent
  },
  {
    path: 'ql-pks',
    component: QlPksComponent
  },
  {
    path: 'ql-cac-cuoc-ks',
    component: QlCacCuocKsComponent
  },
  {
    path: 'xem-kq-ks',
    component: XemKqKsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}