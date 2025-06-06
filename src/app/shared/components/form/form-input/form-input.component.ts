import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  imports: [FormsModule, CommonModule],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss',
   providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputComponent),
      multi: true
    }
  ]
})
export class FormInputComponent implements ControlValueAccessor {
  triggerValidation(): void {
	  throw new Error('Method not implemented.');
  }
  @Input() label: string | undefined;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() name: string = '';
  @Input() required: boolean = false;

  value: string = '';
  touched: boolean = false;
  disabled: boolean = false;

  onChange = (value: any) => { };
  onTouched = () => { };
 

  setValue(val: any) {
    this.value = val;
    this.onChange(val);
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }
}
