import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:"login", component:SignUpComponent},
  {path:"mainpage", component:MainpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
