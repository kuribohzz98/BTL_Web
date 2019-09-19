import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ComponentPageRoutingModule } from './component-page-routing.module';
import { NavbarModule } from './navbar/navbar.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        NavbarModule,
        ComponentPageRoutingModule
    ], 
    declarations: [MainLayoutComponent],
    providers: [
    ],
    entryComponents: [
    ]
})
export class ComponentPageModule {}