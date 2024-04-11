import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { DfButtonModule } from "../../shared/components/df-button/df-button.module";
import { DfWrapperModule } from '../../features/df-wrapper/df-wrapper.module';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    DfButtonModule,
    DfWrapperModule
  ]
})
export class RegisterModule { }
