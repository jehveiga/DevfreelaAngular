import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'df-header',
  templateUrl: './df-header.component.html',
  styleUrl: './df-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DfHeaderComponent implements OnInit {
  ngOnInit(): void {
    this.buildHeader();
  }
  buildHeader() {
    if (this.checkIfUserIsLogged()) {

    } else {

    }
  }

  checkIfUserIsLogged() {
    return localStorage.getItem("userName") && localStorage.getItem("role");
  }
}
