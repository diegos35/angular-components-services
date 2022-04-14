import { Directive, ElementRef, HostListener } from '@angular/core'; //ElementRef es un servicio

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  @HostListener('mouseenter') onMouseEnter(){//evento que queremos escuchar
    this.elementRef.nativeElement.style.backgroundColor = 'red'
  } 

  @HostListener('mouseleave') onMouseLeave(){//evento que queremos escuchar
    this.elementRef.nativeElement.style.backgroundColor = ''
  }

  constructor(
    private elementRef: ElementRef
  ) 
  {
    // this.elementRef.nativeElement.style.backgroundColor = 'red' //maniulacion directa del elmento
  }

}
