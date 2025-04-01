import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHightLight]',
  standalone:true
})
export class HightLightDirective implements OnInit {

  @Input() appHightLight!: string;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.appHightLight === 'admin') {
      this.el.nativeElement.style.backgroundColor = '#ffdddd';
      this.el.nativeElement.style.border = '2px solid red';
    }
  }
}
