import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IProject } from '../../../shared/interfaces/IProject';

@Injectable({
  providedIn: 'root'
})
export class CreateEditService {

  constructor() { }

  private readonly baseURL = environment.apiUrl;
  private httpClient = inject(HttpClient);

  getProjectById(id: string) {
    return this.httpClient.get<IProject>(`${this.baseURL}projects/${id}`);
  }

  createProject(project: IProject) {
    return of(this.httpClient.post(`${this.baseURL}projects`, project));
  }

  editProject(project: IProject, id: string) {
    return this.httpClient.put(`${this.baseURL}projects/${id}`, project);
  }

}
