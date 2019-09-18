import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './components/task/task.component';
import { LoginFormComponent } from './components/login-form/login-form.component';


const routes: Routes = [
  { path: '', component: LoginFormComponent},
  { path: 'tasks', component: TaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
