import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = 'valor initial';
  /* @Input() array: Array<number> = []; */ 
  constructor() { }

  ngOnInit(): void {
  }

}
