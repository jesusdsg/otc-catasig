import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredialTaxComponent } from './predial-tax/predial-tax.component';

const routes: Routes = [
  {
    path: '',
    component: PredialTaxComponent
  },
  {
    path: 'predial',
    component: PredialTaxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxesRoutingModule { }
