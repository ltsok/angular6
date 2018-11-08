import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { directives } from './directives';
import { LoggerService } from './../core/service/logger/logger.service';

import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
} from '@angular/material';


const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatSidenavModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [
    ...modules,
  ],
  declarations: [
    ...directives
  ],
  exports: [
    ...modules,
    ...directives
  ]
})
export class SharedModule {

  constructor(
    private logger: LoggerService
  ) {
    this.logger.info('sharee', 'Initialize shared module.');
  }
}
