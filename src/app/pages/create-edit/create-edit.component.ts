import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProject } from '../../shared/interfaces/IProject';
import { Helpers } from '../../shared/utils/helpers';
import { msg } from '../../shared/utils/msg';
import { CreateEditService } from './services/create-edit.service';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrl: './create-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CreateEditComponent implements OnInit {
  id: string;
  screenType: 'edit' | 'create';
  msg = msg;
  helpers = Helpers;

  router = inject(Router);
  createEditService = inject(CreateEditService);

  title: string = '';
  actionButtonText: string = '';

  constructor() {
    this.id = history.state.id;
    this.screenType = this.id ? 'edit' : 'create';
  }

  projectCreateEditForm = new FormGroup({
    title: new FormControl("", [Validators.required, Validators.minLength(3)]),
    description: new FormControl("", [Validators.required, Validators.minLength(3), Validators.max(200)]),
    totalCost: new FormControl("", [Validators.required])
  });

  ngOnInit(): void {
    this.setScreenTypeText();
    this.fillInputs()
  }


  createOrEdit() {
    if (this.projectCreateEditForm.valid) {
      console.log(this.projectCreateEditForm.value);
      let payload: IProject | any = this.projectCreateEditForm.value;
      console.log(payload);
      payload.idClient = localStorage.getItem("idClient") ?? '0';

      if (this.screenType === 'create') {
        this.createEditService.createProject(payload).subscribe(
          {
            next: (response: any) => {
              alert(`Cadastrado com sucesso: ${response.data.project}.`);
            },
            error: (error: any) => {
              alert(`Erro no servidor: ${error}`);
            }
          }
        )
      } else {
        this.createEditService.editProject(payload, this.id).subscribe(
          {
            next: (response: any) => {
              alert(`Editado com sucesso: ${response.data.project}.`);
            },
            error: (error: any) => {
              alert(`Erro no servidor: ${error}`);
            }
          }
        )
      }

    } else {
      this.projectCreateEditForm.markAllAsTouched();
    }
  }

  fillInputs() {
    if (this.screenType === "edit") {
      this.createEditService.getProjectById(this.id).subscribe(
        (project: IProject) => {
          console.log(this.projectCreateEditForm.value);
          this.projectCreateEditForm.patchValue({
            title: project.title,
            description: project.description,
            totalCost: String(project.totalCost)
          })
        });
    };
  };

  setScreenTypeText() {
    if (this.screenType == "create") {
      this.title = "Vamos cadastrar seu novo projeto!";
      this.actionButtonText = "Cadastrar";
    } else {
      this.title = "Editar projeto";
      this.actionButtonText = "Salvar";
    }
  }

}
