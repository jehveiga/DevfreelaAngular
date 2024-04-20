import {
  ChangeDetectionStrategy,
  Component,
  inject,
  type OnInit,
} from '@angular/core';
import { NavigationBehaviorOptions, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IListItem } from './interfaces/IListItem';
import { ListService } from './services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  list$ = new Observable<IListItem[]>();
  loadingTable: boolean = false;

  // Injeção de dependencia
  router = inject(Router);
  private listService = inject(ListService);

  constructor() { }

  ngOnInit(): void {
    this.loadItemsList();
  }

  loadItemsList() {
    this.listService.getProjects()
      .subscribe((projects) => {
        this.list$ = projects;
        this.loadingTable = true;
      })
      .unsubscribe();
  }

  deleteProject(id: string = '0'): void {
    this.listService.deleteProject(id).subscribe(
      (response) => {
        this.list$ = this.list$
        console.log(response);
      }
    );
  }

  redirectTo(url: string) {
    this.router.navigateByUrl(url);
  }

  redirectToWithParams(url: string, id: string) {
    const dataParams: NavigationBehaviorOptions = {
      state: {
        id: id
      }
    }
    this.router.navigate([`/${url}`], dataParams);
  }
}
