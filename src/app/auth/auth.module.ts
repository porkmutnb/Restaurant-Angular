import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './service/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AuthRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
