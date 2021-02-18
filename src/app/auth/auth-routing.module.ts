import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Route[] = [
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
