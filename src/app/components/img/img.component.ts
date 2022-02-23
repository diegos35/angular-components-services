import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() img: string = '';
  imageDefault = './assetes/images/album.jpg'
  /* @Input() array: Array<number> = []; */ 

  @Output() loaded = new EventEmitter<string>();
  constructor() {
    //before render
    //No async - once time
    console.log('Constructor',  'imageValue =>', this.img) //instancia del componente
   }

   ngOnChanges(){//trigger
     //before render- during
     //estar update changes inputs -- many times
     console.log('OnChanges',  'imageValue =>', this.img);

   }

  ngOnInit(): void {
    //before render
    //async - fetch - API - promises -- once time
    console.log('ngOnInit',  'imageValue =>', this.img);
  }

  ngAfterViewInit(){//trigger
    //after render
    //handler children -- once time
    console.log('AfterViewInit');
  }

  ngOnDestroy() {
      //delete -- once time
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
