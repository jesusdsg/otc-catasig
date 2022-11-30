import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatasigRoutingModule } from './catasig-routing.module';
import { CatasigComponent } from './components/catasig/catasig.component';
import { OtcCatasigComponent } from './components/otc-catasig/otc-catasig.component';
import { JoinUsComponent } from './components/join-us/join-us.component';


@NgModule({
  declarations: [
    CatasigComponent,
    OtcCatasigComponent,
    JoinUsComponent
  ],
  imports: [
    CommonModule,
    CatasigRoutingModule
  ]
})
export class CatasigModule { }
