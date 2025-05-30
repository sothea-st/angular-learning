import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-back',
  imports: [],
  templateUrl: './button-back.component.html',
  styleUrl: './button-back.component.scss'
})
export class ButtonBackComponent {
  @Output() back = new EventEmitter<any>();

  handleEvent(): void {
    this.back.emit();
  }
}
