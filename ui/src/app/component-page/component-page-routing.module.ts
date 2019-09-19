import { AuthGuard } from './../auth/guards/auth.guard';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule, Routes } from '@angular/router/';
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path:'',
        redirectTo: 'classSurvey',
        pathMatch: 'full'
    },
    {
        path:'classSurvey',
        component: MainLayoutComponent,
        children: [{
            path:'',
            children: [
                {
                    path:'',
                    loadChildren: '../modules/class-survey/class-survey.module#ClassSurveyModule',
                    data: {
                        preload: true
                    }
                }
            ]
        }]
    },
    {
        path:'teacher',
        component: MainLayoutComponent,
        children: [{
            path:'',
            children: [
                {
                    path:'',
                    loadChildren: '../modules/teacher/teacher.module#TeacherModule',
                    data: {
                        preload: true
                    }
                }
            ]
        }]
    },
    {
        path:'student',
        component: MainLayoutComponent,
        children: [{
            path:'',
            children: [
                {
                    path:'',
                    loadChildren: '../modules/student/student.module#StudentModule',
                    data: {
                        preload: true
                    }
                }
            ]
        }]
    },
    {
        path:'admin',
        component: MainLayoutComponent,
        children: [{
            path:'',
            children: [
                {
                    path:'',
                    loadChildren: '../modules/admin/admin.module#AdminModule'
                }
            ]
        }]
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ComponentPageRoutingModule {}