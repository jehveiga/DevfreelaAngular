import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';
import { DfWrapperModule } from "../../features/df-wrapper/df-wrapper.module";
import { DfButtonModule } from "../../shared/components/df-button/df-button.module";

@NgModule({
    declarations: [
        ListComponent
    ],
    imports: [
        CommonModule,
        ListRoutingModule,
        DfWrapperModule,
        DfButtonModule
    ]
})
export class ListModule { }
