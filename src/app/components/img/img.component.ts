import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';

  //Podemos utilizar este método para convertir en observable a un input, de esa manera 
  //al momento de un cambio, podemos decidir que hacer con el y aplicar código de ser necesario
  @Input('img') 
  set changeImage(newImg: string){
    this.img = newImg;
    console.log('change just img =>', this.img)
    //code
  }
  @Input() alt: string = '';

  imageDefault = './assets/images/album.jpg'
  /* @Input() array: Array<number> = []; */ 
  @Output() loaded = new EventEmitter<string>();
 /*  counter = 0;
  counterFn: number | undefined; */

  constructor() {
    //before render
    //No async - once time
    console.log('Constructor',  'imageValue =>', this.img) //instancia del componente
   }

   ngOnChanges(changes: SimpleChanges){//trigger
     //before render- during
     //estar update changes inputs -- many times
     console.log('OnChanges',  'imageValue =>', this.img);
     console.log(changes)

   }

  ngOnInit(): void {
    //before render
    //async - fetch - API - promises -- once time
    console.log('ngOnInit',  'imageValue =>', this.img);
    /* this.counterFn = window.setInterval(()=>{
      this.counter += 1;
      console.log('run counter')
    },1000) */
  }

  ngAfterViewInit(){//trigger
    //after render
    //handler children -- once time
    console.log('AfterViewInit');
  }

  ngOnDestroy() {
      //delete -- once time
    /*   window.clearInterval(this.counterFn) */
      console.log('ngOnDestroy');
  }

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('log child')
    this.loaded.emit(this.img);
  }
}
