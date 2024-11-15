import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ) {
    this.createLoginForm();
  }


  createLoginForm() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
    });
  }

  dologin() {

    const userData = {
        username: this.loginForm.controls['username'].value,
        password: this.loginForm.controls['password'].value,
    };

    this.loginService.login(userData.username,userData.password).subscribe({
      next: (result:any) => {
        this.router.navigate(['/home']);
      },
      error: (err) => {
        alert("DATOS INCORRECTOS")
      }
    })

  }

  goToRegister(){
    this.router.navigate(['/register']);
  }




}
