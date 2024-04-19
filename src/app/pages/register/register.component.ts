// @ts-nocheck

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import Swal from 'sweetalert2';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { msg } from '../../shared/utils/msg';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  router = inject(Router);
  msg = msg;

  registerForm: FormGroup = this.fb.group({
    role: ['', [Validators.required]],
    fullName: ['', [Validators.required]],
    birthDate: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private registerService: RegisterService) {

  }

  toggleRole(role: 'dev' | 'cliente') {
    this.registerForm.get('role')?.setValue(role);
  }

  cadastrar() {
    if (this.registerForm.valid) {
      let payload = this.registerForm.value;

      this.registerService.postUser(payload)
        .subscribe((response) => {
          Swal.fire({
            title: 'Bom trabalho',
            text: 'Cadastrado com sucesso!',
            icon: 'success',
            confirmButtonText: 'Ok!',
          }).then((result) => {
            if (result.isConfirmed) {
              localStorage.setItem('userName', response.fullName);
              localStorage.setItem(
                'role',
                response.role === 'dev' ? 'Desenvolvedor' : 'Cliente'
              );
              localStorage.setItem('idClient', response.id);

              this.router.navigateByUrl('list')
            }
          });
        });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  isInvalid(inputName: string, validatorName: string) {
    const formControl: any = this.registerForm.get(inputName);
    if (formControl.error != null) {
      return (
        formControl.errors[validatorName] &&
        this.registerForm.get(inputName)?.touched
      );
    }

    return;
  }
}
