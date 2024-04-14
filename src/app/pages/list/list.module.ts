import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';
import { DfWrapperModule } from "../../features/df-wrapper/df-wrapper.module";



@NgModule({
    declarations: [
        ListComponent
    ],
    imports: [
        CommonModule,
        ListRoutingModule,
        DfWrapperModule
    ]
})
export class ListModule { }
