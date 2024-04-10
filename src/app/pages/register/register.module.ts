import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { DfHeaderModule } from '../../features/df-header/df-header.module';
import { DfButtonModule } from "../../shared/components/df-button/df-button.module";

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        RegisterRoutingModule,
        DfHeaderModule,
        DfButtonModule
    ]
})
export class RegisterModule { }
