import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeadminComponent } from './admin/homeadmin/homeadmin.component';
import { LayoutadminComponent } from './admin/layoutadmin/layoutadmin.component';
import { LayoutComponent } from './layout/layout.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';


const routes: Routes = [
  {path:"login",component:SigninComponent},
  {path:"register",component:SignupComponent},


  {path:"",component:HomeComponent,children:[
    {path:"",component:LayoutComponent},
    {path:"courses",component:CoursesComponent},
    {path:"contact",component:ContactComponent},
    {path:"blog",component:BlogComponent},
    {path:"about",component:AboutComponent}

  ]},

  {path:"homeadmin",component : HomeadminComponent,children:[
    {path:"",component:LayoutadminComponent},
  ]},
  
];

@NgModule({
  imports: 
  [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
