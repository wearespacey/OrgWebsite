import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home.routing';
import { SharedModule } from '@shared/shared.module';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PresentationClipComponent } from './components/presentation-clip/presentation-clip.component';
import { MembersComponent } from './components/members/members.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './page/home.component';

@NgModule({
  declarations: [
    PresentationClipComponent,
    AboutusComponent,
    MembersComponent,
    ProjectsComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
