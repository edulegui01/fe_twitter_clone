import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  

  constructor(private fb: FormBuilder, private registerService:RegisterService, private router: Router,) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      nombre: ['', [Validators.required,]],
      apellido: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.email]],
    });

    
  }

  register() {
    const userData = {
      username: this.registerForm.controls['username'].value,
      password: this.registerForm.controls['password'].value,
      email: this.registerForm.controls['email'].value,
      nombre: this.registerForm.controls['nombre'].value,
      apellido: this.registerForm.controls['apellido'].value,
    };

    this.registerService.register(userData).subscribe({
      next: (result:any) => {
        this.router.navigate(['']);
      },
      error: (err) => {
        alert("NO SE PUDO REGISTRAR")
      }
      })
    }

    goToLogin(){
      this.router.navigate(['']);
    }
}
