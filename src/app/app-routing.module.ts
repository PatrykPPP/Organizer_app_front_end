import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './components/task/task.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RouteGuardService } from './services/guard/route-guard/route-guard.service';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';


const routes: Routes = [
  { path: '', component: LoginFormComponent},
  { path: 'login', component: LoginFormComponent },
  { path: 'registration', component: RegistrationFormComponent},
  { path: 'tasks', component: TaskComponent, canActivate: [RouteGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
