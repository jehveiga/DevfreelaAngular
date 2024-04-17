import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEditComponent } from './create-edit.component';
import { CreateEditRoutingModule } from './create-edit-routing.module';
import { DfWrapperModule } from "../../features/df-wrapper/df-wrapper.module";



@NgModule({
    declarations: [
        CreateEditComponent
    ],
    imports: [
        CommonModule,
        CreateEditRoutingModule,
        DfWrapperModule
    ]
})
export class CreateEditModule { }
