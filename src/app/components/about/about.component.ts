import { Component, 
          OnInit,

          ViewChild,
          ElementRef,
          Renderer2
        } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @ViewChild('p1')
  p1Element: ElementRef; // wrapper for native element ie DOM

  @ViewChild('memberName')
  inputElement: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    // nativeElement is DOM element in browser
    this.p1Element.nativeElement.textContent = 'About our Technologies';
    this.inputElement.nativeElement.value = 'Member Name';
    this.inputElement.nativeElement.focus();

    this.renderer.setStyle(this.p1Element.nativeElement,
                           'background',
                           'lightgreen');

    // FIXME:
    // this.renderer.setAttribute(this.p1Element.nativeElement, 
    //                       'textContent',
    //                       'Management Team');


    

  }

}
