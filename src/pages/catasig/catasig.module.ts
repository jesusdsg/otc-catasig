import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatasigRoutingModule } from './catasig-routing.module';
import { CatasigComponent } from './components/catasig/catasig.component';
import { OtcCatasigComponent } from './components/otc-catasig/otc-catasig.component';
import { JoinUsComponent } from './components/join-us/join-us.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CatasigComponent, OtcCatasigComponent, JoinUsComponent],
  imports: [CommonModule, CatasigRoutingModule, ProgressSpinnerModule, DropdownModule, FormsModule],
})
export class CatasigModule {}
