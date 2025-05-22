import { Component, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [ReactiveFormsModule],
})
export class LoginComponent {
  showPassword = false;
  private auth = inject(Auth);
  private router = inject(Router);
  message = '';

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  updateLoginFormAttributes() {
    this.loginForm.patchValue({
      email: '',
      password: '',
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    signInWithEmailAndPassword(
      this.auth,
      this.loginForm.value.email as string,
      this.loginForm.value?.password as string
    )
      .then((userCred) => {
        this.message = 'Login Success';
        this.router.navigate(['/dashboard']);
      })
      .catch((err) => {
        this.message = err.message;
      });
    // Add your sign-in logic here
  }
}
