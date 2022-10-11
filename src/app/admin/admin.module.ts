import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestUsersComponent } from './gest-users/gest-users.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AuthService } from '../shared/auth.service';



@NgModule({
  declarations: [
    GestUsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers : [AuthService]
})
export class AdminModule { 
  constructor(){
    console.log("module admin chargé")
  }
}
