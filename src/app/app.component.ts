import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Diego';
  age = 25;
  img =  'https://source.unsplash.com/random';
  btnDisable = true;

  person = {
    name: 'Diego',
    age: 25,
    avatar: 'https://source.unsplash.com/random'
  }
}
