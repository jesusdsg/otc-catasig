import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NormativityRoutingModule } from './normativity-routing.module';
import { DirectivesComponent } from './components/directives/directives.component';
import { RulesComponent } from './components/rules/rules.component';
import { DecreesComponent } from './components/decrees/decrees.component';
import { ResolutionsComponent } from './components/resolutions/resolutions.component';


@NgModule({
  declarations: [
    DirectivesComponent,
    RulesComponent,
    DecreesComponent,
    ResolutionsComponent
  ],
  imports: [
    CommonModule,
    NormativityRoutingModule
  ]
})
export class NormativityModule { }
