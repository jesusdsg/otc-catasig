import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecreesComponent } from './components/decrees/decrees.component';
import { ResolutionsComponent } from './components/resolutions/resolutions.component';
import { RulesComponent } from './components/rules/rules.component';

const routes: Routes = [
  {
    path: '',
    component: RulesComponent
  },
  {
    path: 'rules', component: RulesComponent
  },
  {
    path: 'resolutions', component: ResolutionsComponent
  },
  {
    path: 'decrees', component: DecreesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NormativityRoutingModule { }
