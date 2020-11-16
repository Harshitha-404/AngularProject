import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingComponent } from './shopping/shopping.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
const routes: Routes = [{
  path:"shopping",component:ShoppingComponent
},
{
   path:"",component:WelcomeComponent
},
{
  path:"login",component:LoginComponent
},
{
  path:"aboutus",component:AboutusComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
