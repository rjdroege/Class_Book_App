import { Directive, OnInit, Renderer2, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  @HostBinding("class.show") isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;

    let dropdownList = this.elementRef.nativeElement.querySelector('.dropdown-menu');

    if (this.isOpen){
      this.renderer.addClass(dropdownList, 'show');
    } else {
      this.renderer.removeClass(dropdownList, 'show');
    }

  }

  ngOnInit(): void {

  }

}
