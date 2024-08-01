import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailExist: boolean = true;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  onSubmit = () => {
    console.log('here we are')    
    if (this.loginForm.valid) { 
      const email = this.loginForm.get('email')?.value;
      console.log('Email:', email);
       if (email === 'admin@bfirst.ai') {
          this.emailExist = true;
          this.router.navigateByUrl('/validate')
        } else {
          this.emailExist = false;
          console.log(this.emailExist)
        }
    }
   
  }

  navigateToSignup = () => {
    this.router.navigate(['/signup'])
  }
}
