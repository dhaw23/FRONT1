import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { UserComponent } from './user/user.component';
import { HomeadminComponent } from './admin/homeadmin/homeadmin.component';
import { FooteradminComponent } from './admin/footeradmin/footeradmin.component';
import { DashboardadminComponent } from './admin/dashboardadmin/dashboardadmin.component';
import { ProfessorComponent } from './professor/professor.component';
import { FooterprofessorComponent } from './professor/footerprofessor/footerprofessor.component';
import { HeaderprofessorComponent } from './professor/headerprofessor/headerprofessor.component';
import { DashboardprofessorComponent } from './professor/dashboardprofessor/dashboardprofessor.component';
import { FooteruserComponent } from './user/footeruser/footeruser.component';
import { HeaderuserComponent } from './user/headeruser/headeruser.component';
import { DashboarduserComponent } from './user/dashboarduser/dashboarduser.component';
import { HeaderadminComponent } from './admin/headeradmin/headeradmin.component';
import { HomeprofessorComponent } from './professor/homeprofessor/homeprofessor.component';
import { HomeuserComponent } from './user/homeuser/homeuser.component';
import { LayoutadminComponent } from './admin/layoutadmin/layoutadmin.component';
import { LayoutprofessorComponent } from './professor/layoutprofessor/layoutprofessor.component';
import { LayoutuserComponent } from './user/layoutuser/layoutuser.component';
import { CoursesComponent } from './courses/courses.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    AdminComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    UserComponent,
    HomeadminComponent,
    FooteradminComponent,
    DashboardadminComponent,
    ProfessorComponent,
    FooterprofessorComponent,
    HeaderprofessorComponent,
    DashboardprofessorComponent,
    FooteruserComponent,
    HeaderuserComponent,
    DashboarduserComponent,
    HeaderadminComponent,
    HomeprofessorComponent,
    HomeuserComponent,
    LayoutadminComponent,
    LayoutprofessorComponent,
    LayoutuserComponent,
    CoursesComponent,
    BlogComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([

      { path:'signin', component: SigninComponent},
      { path:'signup', component: SignupComponent},
      { path:'', redirectTo:'/signin', pathMatch: 'full' } 

    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
