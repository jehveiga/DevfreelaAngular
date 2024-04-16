import { Observable, delay } from 'rxjs';
import { IListItem } from './interfaces/IListItem';
import { ListService } from './services/list.service';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  type OnInit,
} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ListComponent implements OnInit {
  list$ = new Observable<IListItem[]>();
  loadingTable: boolean = false;
  private listService = inject(ListService);

  constructor() { }

  ngOnInit(): void {
    this.obterMusicasCadastradas();
  }

  obterMusicasCadastradas() {
    this.list$ = this.listService.getProjects();
  }

  buildTable() {
    const idClient = localStorage.getItem('idClient');

    // this.list = this.list.filter(
    //   (listItem: IListItem) => listItem.idClient === idClient
    // );

  }

  deleteProject(id: string = '0'): void {
    // this.listService.deleteProject(id).subscribe(
    //   (response) => {
    //     this.list$ = this.list$.filter(
    //       (listItem: IListItem) => listItem.id !== id
    //     );
    //     this.buildTable();
    //   }
    // );
  }
  goToEdit(arg0: string | undefined) {
    throw new Error('Method not implemented.');
  }
}
