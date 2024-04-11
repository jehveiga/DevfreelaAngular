import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'df-wrapper',
  templateUrl: './df-wrapper.component.html',
  styleUrl: './df-wrapper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DfWrapperComponent implements OnInit {

  ngOnInit(): void { }

}
