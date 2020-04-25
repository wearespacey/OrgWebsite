import { NgModule } from '@angular/core';
import { EventsRoutingModule } from './events.routing';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
