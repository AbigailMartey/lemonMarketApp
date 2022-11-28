import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatToolbarModule } from '@angular/material/toolbar'

import { MaterialModule } from '../material.module'
import { ManagerRoutingModule } from './manager-routing.module'
import { ManagerComponent } from './manager.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component'

@NgModule({
  declarations: [ManagerComponent, UserManagementComponent, ReceiptLookupComponent],
  imports: [CommonModule, ManagerRoutingModule, MatToolbarModule, MaterialModule],
})
export class ManagerModule {}
