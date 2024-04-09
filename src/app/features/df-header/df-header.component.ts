import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { IUser } from './interfaces/IUser';

@Component({
  selector: 'df-header',
  templateUrl: './df-header.component.html',
  styleUrl: './df-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DfHeaderComponent implements OnInit {
  user: IUser = {}; // undefined

  ngOnInit(): void {
    this.buildHeader();
  }
  buildHeader() {
    if (this.checkIfUserIsLogged()) {
      this.user.name = localStorage.getItem('userName') || '';
      this.user.role = localStorage.getItem('role') || '';
    }
  }

  checkIfUserIsLogged(): boolean {
    return localStorage.getItem('userName') !== null && localStorage.getItem('role') !== null;
  }
}
