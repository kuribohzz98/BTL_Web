import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router/';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: LoginComponent
            }
        ]),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule {}