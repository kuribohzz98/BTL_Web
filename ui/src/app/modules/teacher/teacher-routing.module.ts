import { ChiTietKsComponent } from './ket-qua-danh-gia/chi-tiet-ks/chi-tiet-ks.component';
import { LopGiangDayComponent } from './lop-giang-day/lop-giang-day.component';
import { KetQuaDanhGiaComponent } from './ket-qua-danh-gia/ket-qua-danh-gia.component';
import { NgModule } from '@angular/core';
import { Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule} from '@angular/router';

const router : Routes = [
    {
        path: '',
        redirectTo: 'lop-giang-day',
        pathMatch: 'full'
    },
    {
        path: 'lop-giang-day',
        component: LopGiangDayComponent
    },
    {
        path: 'ket-qua-danh-gia',
        component: KetQuaDanhGiaComponent
    },
    {
        path: 'ket-qua-danh-gia/chi-tiet/:mamonhoc',
        component: ChiTietKsComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})
export class TeacherRoutingModule {}