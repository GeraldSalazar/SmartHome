import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SmartHomeIndexComponent } from './smart-home-index/smart-home-index.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'smart-home', component: SmartHomeIndexComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
