import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { IListItem } from '../interfaces/IListItem';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private readonly baseURL = environment.apiUrl;
  private httpClient = inject(HttpClient);

  constructor() { }

  getProjects() {
    return this.httpClient.get<IListItem[]>(`${this.baseURL}projects`)
  }

  deleteProject(id: string) {
    return this.httpClient.delete(`${this.baseURL}projects${id}`)
  }
}
