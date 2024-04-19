import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DfWrapperModule } from "../../features/df-wrapper/df-wrapper.module";
import { DfButtonModule } from "../../shared/components/df-button/df-button.module";
import { CreateEditRoutingModule } from './create-edit-routing.module';
import { CreateEditComponent } from './create-edit.component';

@NgModule({
  declarations: [
    CreateEditComponent
  ],
  imports: [
    CommonModule,
    CreateEditRoutingModule,
    DfWrapperModule,
    DfButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class CreateEditModule { }
