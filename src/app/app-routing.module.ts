import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourOfourComponent } from './four-ofour/four-ofour.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path : "admin", loadChildren : () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path : "auth", loadChildren : () => import('./auth/auth.module').then(m => m.AuthModule) },
  
  
  
  { path : "", component : HomeComponent},
  { path : "**", component : FourOfourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
