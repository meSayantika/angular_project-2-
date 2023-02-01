import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login', component: LoginComponent },
  {path:'dashboard', component: DashboardComponent },
  {path:'details/:id', component: DetailsComponent },
  {path:'', redirectTo: 'login', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
