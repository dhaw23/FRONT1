import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.signInStudent(this.email, this.password).subscribe(
      (response) => {
        console.log('Student Sign-in successful', response);
      },
      (error) => {
        console.error('Student Sign-in error', error);
      }
    );
  }

  signInTeacher(): void {
    this.authService.signInTeacher(this.email, this.password).subscribe(
      (response) => {
        console.log('Teacher Sign-in successful', response);
      },
      (error) => {
        console.error('Teacher Sign-in error', error);
      }
    );
  }
}