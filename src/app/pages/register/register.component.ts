// @ts-nocheck

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import Swal from 'sweetalert2';

import { msg } from '../../shared/utils/msg';
import { Validators, FormBuilder } from '@angular/forms';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
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

              window.location.href = 'list.html';
            }
          });
        });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  // Enviar para API
  // fetch('https://660b4ff2ccda4cbc75dca830.mockapi.io/api/users', {
  //   method: 'POST',
  //   body: JSON.stringify(payload),
  //     headers: {
  // 'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => response.json())
  // .then((response) => {

  // });

  // checkIfAnyRoleIsChecked() {
  //   let counter = 0;
  //   let roleList = document.getElementsByName('cargo');

  //   for (let radioButton of roleList) {
  //     if (radioButton.checked) counter++;
  //   }

  //   return counter !== roleList.length;

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
