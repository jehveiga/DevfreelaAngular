import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrl: './create-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEditComponent implements OnInit {

  ngOnInit(): void { }

}
