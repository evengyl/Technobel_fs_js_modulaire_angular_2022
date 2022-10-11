import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestUsersComponent } from './gest-users/gest-users.component';

const routes: Routes = [
    { path : "gestUsers", component : GestUsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
