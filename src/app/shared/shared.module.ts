import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormArray } from '@angular/forms';

import { directives } from './directives'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...directives
  ],
  exports: [
    ...directives
  ]
})
export class SharedModule { }
