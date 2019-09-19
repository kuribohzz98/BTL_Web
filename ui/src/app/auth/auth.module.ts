import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ], 
    declarations: [],
    providers: [
        // AuthService
    ],
    entryComponents: [
    ]
})
export class AuthModule {}