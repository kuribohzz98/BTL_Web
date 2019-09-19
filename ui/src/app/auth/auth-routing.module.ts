import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router/';
import { LoginModule } from './login/login.module';  //ádsad

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      loadChildren: './login/login.module#LoginModule'
    }
  ])
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
