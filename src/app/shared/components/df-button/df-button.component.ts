import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'df-button',
  templateUrl: './df-button.component.html',
  styleUrl: './df-button.component.scss'
})
export class DfButtonComponent implements OnInit {

  @Input() text: string = '';

  ngOnInit() {

  }
}
