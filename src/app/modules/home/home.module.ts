import { NgModule } from '@angular/core';

import { HomeComponent } from './page/home.component';
import { HomeRoutingModule } from './home.routing';

import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        SharedModule,

        HomeRoutingModule
    ],
    exports: [],
    providers: [],
    entryComponents: []
})
export class HomeModule {}
