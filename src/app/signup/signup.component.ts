import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../service/admin.service';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  email: string = '';
  password: string = '';

  formUser: FormGroup;

  constructor(private authService: AuthService,private formBuilder:FormBuilder,private userService:UserService,private AdminService: AdminService ,private router:Router) {}
  //code abou 
  ngOnInit(): void {
      this.formUser=this.formBuilder.group({
        username:['',Validators.required],
        email:['',Validators.email],
        password:['',Validators.required],
      })
  }

  get f(){return this.formUser.controls}

  onSubmit(){
    if (this.formUser.invalid){
      return;
    }else{
      this.userService.registerUser(this.formUser).subscribe(
        (res:any) => {
          console.log(res);
        }
      )
      this.router.navigateByUrl('/login')
    }
  }
  

//
  signUpStudent(): void {
    this.authService.signUpStudent(this.email, this.password).subscribe(
      (response) => {
        console.log('Student Sign-up successful', response);
      },
      (error) => {
        console.error('Student Sign-up error', error);
      }
    );
  }

  signUpTeacher(): void {
    this.authService.signUpTeacher(this.email, this.password).subscribe(
      (response) => {
        console.log('Teacher Sign-up successful', response);
      },
      (error) => {
        console.error('Teacher Sign-up error', error);
      }
    );
  }
}