import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { IListItem } from '../interfaces/IListItem';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private readonly baseURL = environment.apiUrl;


  constructor(private http: HttpClient) { }
  getProjects() {
    return this.http.get<IListItem[]>(`${this.baseURL}projects`)
  }
}
