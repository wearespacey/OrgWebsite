import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { OcticonDirective } from './octicon.directive';

@NgModule({
  declarations: [
    OcticonDirective
  ],
  imports: [
    // vendor
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // material
    MaterialModule
  ],
  exports: [
    // vendor
    CommonModule,           // ngIf, ngFor
    RouterModule,           // routerLink, <router-outlet>
    FormsModule,
    ReactiveFormsModule,

    // material
    MaterialModule,

    // local
    OcticonDirective,
  ]
})
export class SharedModule { }
