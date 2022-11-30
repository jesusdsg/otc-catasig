import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxesRoutingModule } from './taxes-routing.module';
import { PredialTaxComponent } from './predial-tax/predial-tax.component';


@NgModule({
  declarations: [
    PredialTaxComponent
  ],
  imports: [
    CommonModule,
    TaxesRoutingModule
  ]
})
export class TaxesModule { }
