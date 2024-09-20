import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { AuthGuardService } from '../service/auth-guard.service';
import { AuthService } from '../auth/service/auth.service';
import { MenuService } from './service/menu.service';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ],
  providers: [
    AuthGuardService,
    AuthService,
    MenuService
  ]
})
export class MenuModule { }
