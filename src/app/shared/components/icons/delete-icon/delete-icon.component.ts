import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-icon',
  imports: [],
  templateUrl: './delete-icon.component.html',
  styleUrl: './delete-icon.component.scss'
})
export class DeleteIconComponent {
  @Input() id!: number;
  @Output() delete = new EventEmitter<number>();

  handleEvent(): void {
    this.delete.emit(this.id);
  }

}
