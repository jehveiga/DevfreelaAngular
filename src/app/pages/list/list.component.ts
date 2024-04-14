import { IListItem } from './interfaces/IListItem';
import { ChangeDetectionStrategy, Component, Injectable, type OnInit } from '@angular/core';
import { ListService } from './services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  list: IListItem[] = [];

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    // Enviar para API
    this.listService.getProjects().subscribe((projects: IListItem[]) => {
      this.list = projects;
      this.buildTable();
    });
  }

  buildTable() {
    (document
      .querySelector("#table_body") as any)
      .innerHTML = "";

    const idClient = localStorage.getItem("idClient");

    this.list = this.list.filter((listItem: IListItem) => listItem.idClient === idClient);

    this.list.forEach((listItem: IListItem) => {
      let template = `
        <div class="row">
        <div class="title-description">
          <h6 class="title">${listItem.title}</h6>
          <p class="description">
            ${listItem.description}
          </p>
        </div>
        <div class="price">R$ ${listItem.totalCost}</div>
        <div class="actions">
          <span class="edit material-symbols-outlined" onclick="goToEdit(${listItem.id})"> edit </span>
          <span class="delete material-symbols-outlined" onclick="deleteProject(${listItem.id})">delete</span>
        </div>listItem
      </div>
      `;

      (document
        .querySelector("#table_body") as any)
        .insertAdjacentHTML("beforeend", template);
    })
  }

}

