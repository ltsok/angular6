import { NgModule } from "@angular/core";
import { SharedModule } from '@shared';
import { GlobalComponent } from './global.component';
import { GlobalService } from './service/global.service';


@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        GlobalComponent
    ],
    providers: [
        { provide: 'tpi.global', useClass: GlobalService }
    ]
})

export class GlobalModule {}