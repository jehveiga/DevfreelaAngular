import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DfWrapperComponent } from './df-wrapper.component';
import { DfHeaderModule } from "../df-header/df-header.module";



@NgModule({
    declarations: [
        DfWrapperComponent
    ],
    exports: [
        DfWrapperComponent
    ],
    imports: [
        CommonModule,
        DfHeaderModule
    ]
})
export class DfWrapperModule { }
