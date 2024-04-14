import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'df-wrapper',
  templateUrl: './df-wrapper.component.html',
  styleUrl: './df-wrapper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DfWrapperComponent {
  @Input() type: 'one-col' | 'two-col' = 'two-col';
}
