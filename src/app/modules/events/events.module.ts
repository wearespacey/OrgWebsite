import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { EventsComponent } from './page/events.component';
import { EventsRoutingModule } from './events.routing';

@NgModule({
    declarations: [
      EventsComponent
    ],
    imports: [
        SharedModule,

        EventsRoutingModule
    ],
    exports: [],
    providers: [],
    entryComponents: []
})
export class EventsModule {}
