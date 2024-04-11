import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { DfButtonModule } from "../../shared/components/df-button/df-button.module";
import { DfWrapperModule } from '../../features/df-wrapper/df-wrapper.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    DfButtonModule,
    DfWrapperModule,
    MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule
  ]
})
export class RegisterModule { }
