import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { IUser } from '../interfaces/IUser';
import { delay, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private readonly baseURL = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  postUser(payload: IUser) {
    return of(this.httpClient.post(`${this.baseURL}users`, payload))
      .pipe(delay(1000))
  }

}
