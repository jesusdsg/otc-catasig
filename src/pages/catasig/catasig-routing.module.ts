import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatasigComponent } from './components/catasig/catasig.component';
import { JoinUsComponent } from './components/join-us/join-us.component';
import { OtcCatasigComponent } from './components/otc-catasig/otc-catasig.component';
const routes: Routes = [
  {
    path: '',
    component: CatasigComponent,
  },
  {
    path: 'otc-catasig',
    component: OtcCatasigComponent,
  },
  {
    path: 'join-us',
    component: JoinUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatasigRoutingModule {}
