import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    ProfileComponent,
    NavigationMenuComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
