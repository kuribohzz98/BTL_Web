import { NgModule } from '@angular/core';
import { Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule} from '@angular/router';
import { MyClassStudentComponent } from './my-class-student/my-class-student.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'my-class',
    pathMatch: 'full'
  },
  {
    path: 'my-class',
    component: MyClassStudentComponent
  },
  {
    path: 'danh-gia-mon-hoc',
    loadChildren: './danh-gia-mon-hoc/danh-gia-mon-hoc.module#DanhGiaMonHocModule',
    data: {
      preload: true
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {}