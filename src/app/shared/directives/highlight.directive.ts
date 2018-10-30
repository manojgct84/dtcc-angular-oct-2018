import { Directive,

        Input,

        ElementRef,
        Renderer2,

        HostListener
} from '@angular/core';

// attribute level
// <h1 appHighlight > , <div appHighlight > 
// h1 and div are host elements
// no templates, no stylesUrl

@Directive({
  selector: '[appHighlight]', // [] is MUST
})
export class HighlightDirective {

  @Input()
  color = 'lightgreen';

  constructor(private hostElement: ElementRef,
              private renderer: Renderer2) {
    console.log('highlight directive created');
  }

  @HostListener('mouseenter')
  onEnter() {
    console.log('mouse enter');
    this.renderer.setStyle(this.hostElement.nativeElement,
                           'background',
                           this.color);

     
  }

  @HostListener('mouseleave')
  onLeave() {
    this.renderer.removeStyle(this.hostElement.nativeElement,
                              'background');

  }

}
