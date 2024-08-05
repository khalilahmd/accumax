import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-validation',
  standalone: true,
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class ValidationComponent {
  validationForm: FormGroup;
  isCodeValid: boolean = true;

  constructor(private fb: FormBuilder, private router: Router) {
    this.validationForm = this.fb.group({
      code1: ['', [Validators.required, Validators.pattern('^[0-9]$')]],
      code2: ['', [Validators.required, Validators.pattern('^[0-9]$')]],
      code3: ['', [Validators.required, Validators.pattern('^[0-9]$')]],
      code4: ['', [Validators.required, Validators.pattern('^[0-9]$')]],
      code5: ['', [Validators.required, Validators.pattern('^[0-9]$')]],
      code6: ['', [Validators.required, Validators.pattern('^[0-9]$')]]
    });
  }

  onSubmit() {
    if (this.validationForm.valid) {
      const code = `${this.validationForm.get('code1')?.value}${this.validationForm.get('code2')?.value}${this.validationForm.get('code3')?.value}${this.validationForm.get('code4')?.value}${this.validationForm.get('code5')?.value}${this.validationForm.get('code6')?.value}`;
      if (code === '000000') {
        this.router.navigate(['/home'])
        this.isCodeValid = true;
      } else {
        this.isCodeValid = false;
      }
      // Add logic to verify the validation code
    }
  }
}
