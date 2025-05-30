import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-icon',
  imports: [],
  templateUrl: './edit-icon.component.html',
  styleUrl: './edit-icon.component.scss'
})
export class EditIconComponent {
  @Input() id!: number;
  @Output() edit = new EventEmitter<number>();

  handleClick() {
    this.edit.emit(this.id);
  }
}
