import { AuthGuard } from './auth/guards/auth.guard';
import { RouterModule } from '@angular/router/';
import { NgModule } from "@angular/core";
import { Routes, PreloadAllModules } from "@angular/router";
import { AuthModule } from './auth/auth.module';
import { ComponentPageModule } from './component-page/component-page.module';

const routes: Routes = [
    {
        path:'login',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path:'',
        loadChildren: './component-page/component-page.module#ComponentPageModule',
        canActivate:[AuthGuard]
    },
    { 
        path: '**',
        redirectTo: '' 
    }
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}