// @ts-nocheck

import { ChangeDetectionStrategy, Component } from '@angular/core';
import Swal from 'sweetalert2'

import { msg } from '../../shared/utils/msg';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
  toggleRole(role: 'dev' | 'cliente') {
    this.registerForm.get('role')?.setValue(role);
  }
  msg = msg;

  registerForm: FormGroup = this.fb.group({
    role: ['', [Validators.required]],
    fullName: ['', [Validators.required]],
    birthDate: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) {
  }

  cadastrar() {



    this.registerForm.markAsTouched();


    //   if (this.checkIfAnyRoleIsChecked() === false) {
    //     Swal.fire({
    //       title: 'Erro',
    //       text: 'Marque algum perfil!',
    //       icon: 'error',
    //     });
    //     return;
    //   }

    //   let payload = {
    //     role:
    //       document.getElementsByName('cargo')[0].checked === true
    //         ? 'dev'
    //         : 'client',
    //     fullName: document.querySelector('#fullName').value,
    //     birthDate: document.querySelector('#birthDate').value,
    //     email: document.querySelector('#email').value,
    //     password: document.querySelector('#password').value,
    //   };

    //   // Enviar para API
    //   fetch('https://660b4ff2ccda4cbc75dca830.mockapi.io/api/users', {
    //     method: 'POST',
    //     body: JSON.stringify(payload),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((response) => {

    //       Swal.fire({
    //         title: 'Bom trabalho',
    //         text: 'Cadastrado com sucesso!',
    //         icon: 'success',
    //         confirmButtonText: 'Ok!',
    //       })
    //         .then((result) => {
    //           if (result.isConfirmed) {
    //             localStorage.setItem('userName', response.fullName);
    //             localStorage.setItem(
    //               'role',
    //               response.role === 'dev' ? 'Desenvolvedor' : 'Cliente'
    //             );
    //             localStorage.setItem('idClient', response.id);

    //             window.location.href = 'list.html';
    //           }
    //         })
    //         .catch((error) => {
    //           Swal.fire({
    //             title: 'Erro',
    //             text: 'Erro no servidor!',
    //             icon: 'error',
    //           });
    //         });
    //     });
    // }

    // checkIfAnyRoleIsChecked() {
    //   let counter = 0;
    //   let roleList = document.getElementsByName('cargo');

    //   for (let radioButton of roleList) {
    //     if (radioButton.checked) counter++;
    //   }

    //   return counter !== roleList.length;
  }

  isInvalid(inputName: string, validatorName: string) {
    const formControl: any = this.registerForm.get(inputName);
    if (formControl.error != null) {
      return formControl.errors[validatorName] && this.registerForm.get(inputName)?.touched;
    }

    return;
  }
}
