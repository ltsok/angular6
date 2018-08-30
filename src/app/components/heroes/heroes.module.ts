import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ROUTER_CONFIG } from './heroes.routes';
import { HeroesComponent } from './heroes.component'
import { HeroService } from './heroes.service';

import { HeroJobAdComponent, HeroProfileComponent, AdItem, SharedModule } from '@shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ],
  declarations: [HeroesComponent],
  providers: [HeroService],
  entryComponents: [HeroJobAdComponent, HeroProfileComponent]
})
export class HeroesModule { }
