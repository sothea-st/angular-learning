import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-add-new',
  imports: [],
  templateUrl: './button-add-new.component.html',
  styleUrl: './button-add-new.component.scss'
})
export class ButtonAddNewComponent {
  @Output() addNew = new EventEmitter<any>();

  handleEvent(): void {
    this.addNew.emit();
  }
}
