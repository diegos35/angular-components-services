import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showImage = true;

 
  imgParent = '';
  
  onLoadedParent(img: string){//crear listen para escuchar el emiter
    console.log('log parent', img); 
  }
  
  toggleImg(){
    this.showImage = !this.showImage;
  }

}