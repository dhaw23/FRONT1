import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

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