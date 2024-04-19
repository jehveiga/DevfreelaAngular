import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'df-wrapper',
  templateUrl: './df-wrapper.component.html',
  styleUrl: './df-wrapper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DfWrapperComponent {
  router = inject(Router);

  @Input() type: 'one-col' | 'two-col' = 'two-col';
  @Input() back: string = '';

  // Redirecionamento para URL especificada
  redirectTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
