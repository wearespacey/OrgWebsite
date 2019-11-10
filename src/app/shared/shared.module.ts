import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';
import { OcticonDirective } from './octicon.directive';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { MembersComponent } from './components/members/members.component';
import { PresentationClipComponent } from './components/presentation-clip/presentation-clip.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    OcticonDirective,

    AboutusComponent,
    ContactComponent,
    MembersComponent,
    PresentationClipComponent,
    ProjectsComponent,
    ScrollTopComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    MaterialModule,
    OcticonDirective,

    AboutusComponent,
    ContactComponent,
    MembersComponent,
    PresentationClipComponent,
    ProjectsComponent,
    ScrollTopComponent
  ]
})
export class SharedModule {}
